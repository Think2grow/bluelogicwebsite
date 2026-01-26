import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface LiquidFillScrollProps {
  color?: string;
  waveColor?: string;
  fillHeight: any; // MotionValue<number>
}

export const LiquidFillScroll: React.FC<LiquidFillScrollProps> = ({
  color = "oklch(0.7 0.1 220 / 0.35)",
  waveColor = "oklch(0.7 0.1 220 / 0.5)",
  fillHeight,
}) => {
  const waveX = useMotionValue(0);
  const springWaveX = useSpring(waveX, { stiffness: 20, damping: 10 });

  React.useEffect(() => {
    let frame: number;
    const animate = () => {
      waveX.set(Math.sin(Date.now() / 700) * 24);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [waveX]);

  return (
    <div
      className="absolute left-0 bottom-0 w-full z-0"
      style={{
        height: '100%',
        pointerEvents: 'none',
        willChange: 'transform',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: fillHeight,
          background: color,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <motion.svg
          width="100%"
          height="32"
          viewBox="0 0 400 32"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 32, x: springWaveX }}
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0,24 Q100,32 200,24 T400,24 V32 H0 Z"
            fill={waveColor}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
