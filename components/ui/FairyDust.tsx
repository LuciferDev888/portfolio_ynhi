"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  decay: number;
  isStar: boolean;
  rotation: number;
  rotationSpeed: number;
  isMouse: boolean;
  twinkleSpeed?: number;
  angle?: number;
}

export function FairyDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const colors = [
      "rgba(45, 106, 79, ",   // Green
      "rgba(82, 183, 136, ",  // Light green
      "rgba(216, 243, 220, ", // Soft white/green
      "rgba(255, 215, 0, ",   // Gold yellow
      "rgba(255, 255, 255, ", // Pure white
    ];

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Spawn mouse particles
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Spawn 2 particles per move to keep performance balanced
      for (let i = 0; i < 2; i++) {
        particles.push(createParticle(x, y, true));
      }
    };

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        for (let i = 0; i < 1; i++) {
          particles.push(createParticle(x, y, true));
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Spawn background floating particles automatically
    const spawnBackgroundTimer = setInterval(() => {
      // Keep up to 80 background floating particles
      const bgCount = particles.filter(p => !p.isMouse).length;
      if (bgCount < 80) {
        const x = Math.random() * canvas.width;
        // Spawn either randomly across screen (initially) or at the bottom
        const y = Math.random() * canvas.height;
        particles.push(createParticle(x, y, false));
      }
    }, 150);

    const createParticle = (cx: number, cy: number, isMouse: boolean): Particle => {
      const size = isMouse ? Math.random() * 5 + 3 : Math.random() * 4 + 1.5;
      
      // Background particles rise slowly, mouse particles spread out
      const speedX = isMouse ? (Math.random() - 0.5) * 1.5 : (Math.random() - 0.5) * 0.2;
      const speedY = isMouse ? (Math.random() - 0.7) * 1.5 - 0.2 : -Math.random() * 0.4 - 0.1;
      
      const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
      
      // Background particles live longer (slower decay)
      const decay = isMouse ? Math.random() * 0.015 + 0.01 : Math.random() * 0.003 + 0.001;
      const isStar = Math.random() > 0.45;

      return {
        x: cx,
        y: cy,
        size,
        speedX,
        speedY,
        color: colorPrefix,
        alpha: isMouse ? 1.0 : Math.random() * 0.5 + 0.1, // background sparkles start slightly transparent
        decay,
        isStar,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        isMouse,
        twinkleSpeed: isMouse ? undefined : Math.random() * 0.03 + 0.01,
        angle: Math.random() * Math.PI * 2,
      };
    };

    // Draw a 4-pointed star
    const drawStar = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      size: number,
      rotation: number
    ) => {
      context.save();
      context.translate(cx, cy);
      context.rotate(rotation);
      context.beginPath();
      context.moveTo(0, -size);
      context.quadraticCurveTo(0, 0, size, 0);
      context.quadraticCurveTo(0, 0, 0, size);
      context.quadraticCurveTo(0, 0, -size, 0);
      context.quadraticCurveTo(0, 0, 0, -size);
      context.closePath();
      context.fill();
      context.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Update positions
        if (p.isMouse) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.alpha -= p.decay;
        } else {
          // Floating wave drift for background sparkles
          if (p.angle !== undefined && p.twinkleSpeed !== undefined) {
            p.angle += 0.02;
            p.x += p.speedX + Math.sin(p.angle) * 0.2;
            p.y += p.speedY;
            
            // Twinkle effect (sine wave opacity pulsing)
            p.alpha = (Math.sin(p.angle * 2) * 0.4 + 0.6) * (1 - p.decay * (p.y / canvas.height));
            
            // Background sparkles decay faster as they approach the top
            p.alpha -= p.decay;
          } else {
            p.y += p.speedY;
            p.alpha -= p.decay;
          }
        }

        p.rotation += p.rotationSpeed;

        // Remove dead particles
        if (p.alpha <= 0 || p.x < -10 || p.x > canvas.width + 10 || p.y < -10 || p.y > canvas.height + 10) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`;
        
        // Render glow effect
        ctx.shadowBlur = p.isMouse ? p.size * 1.5 : p.size * 2;
        ctx.shadowColor = p.color.includes("255, 215, 0") ? "rgba(255, 215, 0, 0.6)" : "rgba(82, 183, 136, 0.5)";

        if (p.isStar) {
          drawStar(ctx, p.x, p.y, p.size, p.rotation);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Reset shadow for next drawings
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      clearInterval(spawnBackgroundTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export default FairyDust;
