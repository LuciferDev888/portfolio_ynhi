"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
  label?: string;
}

export function LiveProjectButton({ className, href, onClick, variant = "dark", label = "Chi tiết" }: LiveProjectButtonProps) {
  const ButtonWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  const isLight = variant === "light";

  return (
    <ButtonWrapper>
      <motion.button
        whileHover={{ scale: 1.03, backgroundColor: isLight ? "rgba(26, 26, 26, 0.08)" : "rgba(215, 226, 234, 0.1)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        className={cn(
          "rounded-full border-2 font-bold uppercase tracking-widest",
          "px-8 py-3 sm:px-10 sm:py-3.5",
          "text-sm sm:text-base focus:outline-none",
          isLight ? "border-[#1A1A1A] text-[#1A1A1A]" : "border-[#D7E2EA] text-[#D7E2EA]",
          className
        )}
      >
        {label}
      </motion.button>
    </ButtonWrapper>
  );
}

export default LiveProjectButton;

