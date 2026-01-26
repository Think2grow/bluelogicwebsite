import React from "react";
import { motion, useInView } from "framer-motion";

interface LiquidFillProps {
  color?: string;
  height?: number;
  width?: number;
  inView?: boolean;
}

// SVG wave path generator for a smooth, premium look
const wavePath = `M0,30 Q25,40 50,30 T100,30 V100 H0 Z`;

export const LiquidFill: React.FC<LiquidFillProps> = ({
  color = "oklch(0.7 0.1 220)",
  height = 100,
  width = 100,
  inView = false,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      style={{ display: "block" }}
      aria-hidden="true"
      focusable="false"
    >
      <motion.path
        d={wavePath}
        fill={color}
        initial={{ translateY: 60 }}
        animate={inView ? { translateY: 0 } : { translateY: 60 }}
        transition={{
          duration: 1.2,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{ filter: "blur(0.5px)" }}
      />
    </svg>
  );
};
