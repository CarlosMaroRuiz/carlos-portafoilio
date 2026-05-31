"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export function TextReveal({
  children,
  delay = 0,
  className = "",
  duration = 0.75,
}: TextRevealProps) {
  return (
    <div style={{ overflow: "hidden" }} className={className}>
      <motion.div
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
