"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  label?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
}

export function ContactButton({
  label = "Contact Me",
  href = "#register",
  className,
  onClick,
  variant = "dark",
}: ContactButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Handle page scroll dynamically
      const targetId = href.startsWith("#") ? href.substring(1) : href;
      const contactSection = document.getElementById(targetId);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isLight = variant === "light";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={handleClick}
      className={cn(
        "rounded-full font-bold uppercase tracking-widest transition-shadow shadow-md",
        "px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4.5",
        "text-xs sm:text-sm md:text-base focus:outline-none",
        isLight ? "text-white bg-[#1A1A1A] hover:bg-[#333333] border-2 border-[#1A1A1A]" : "text-white",
        className
      )}
      style={
        isLight
          ? {}
          : {
              background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }
      }
    >
      {label}
    </motion.button>
  );
}

export default ContactButton;

