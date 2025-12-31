import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

interface FilterStage {
  id: string;
  name: string;
  description: string;
  icon: string;
  removal: string;
  purity: number;
}

const stages: FilterStage[] = [
  {
    id: "sediment",
    name: "Sediment Pre-Filter",
    description: "Captures particles, rust, and debris down to 5 microns",
    icon: "🪨",
    removal: "Particles & Sediment",
    purity: 25,
  },
  {
    id: "carbon",
    name: "Carbon Block Filter",
    description: "Eliminates chlorine, VOCs, and organic compounds",
    icon: "⬛",
    removal: "Chlorine & Organics",
    purity: 50,
  },
  {
    id: "ro-membrane",
    name: "RO Membrane",
    description: "Molecular-level filtration at 0.0001 microns",
    icon: "🔬",
    removal: "99.8% Contaminants",
    purity: 85,
  },
  {
    id: "remineralize",
    name: "Remineralization",
    description: "Adds beneficial minerals for optimal taste and pH",
    icon: "💎",
    removal: "Minerals Added",
    purity: 99.8,
  },
];

export default function FilterFlowReact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [purityDisplay, setPurityDisplay] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to purity percentage
  const purity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 25, 50, 85, 99.8, 99.8],
  );

  // Update displayed purity value on scroll
  useMotionValueEvent(purity, "change", (latest) => {
    setPurityDisplay(latest);
  });

  // Left side stages movement (stages 0 and 1)
  const leftY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  // Right side stages movement (stages 2 and 3)
  const rightY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  // Individual stage opacities based on scroll position
  const stage0Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4],
    [0, 1, 1, 0.3],
  );
  const stage1Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.45, 0.55],
    [0, 1, 1, 0.3],
  );
  const stage2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.7],
    [0, 1, 1, 0.3],
  );
  const stage3Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.75, 0.85],
    [0, 1, 1, 0.3],
  );

  const stageOpacities = [
    stage0Opacity,
    stage1Opacity,
    stage2Opacity,
    stage3Opacity,
  ];

  // Scale transforms for stages
  const stage0Scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4],
    [0.8, 1, 1, 0.9],
  );
  const stage1Scale = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.45, 0.55],
    [0.8, 1, 1, 0.9],
  );
  const stage2Scale = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.7],
    [0.8, 1, 1, 0.9],
  );
  const stage3Scale = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.75, 0.85],
    [0.8, 1, 1, 0.9],
  );

  const stageScales = [stage0Scale, stage1Scale, stage2Scale, stage3Scale];

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Droplet glow intensity
  const glowIntensity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.6, 1],
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[oklch(0.15_0.02_270)]"
      style={{ height: "400vh" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.7 0.1 220 / 0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Header - fades out on scroll */}
        <motion.div
          className="absolute top-8 left-0 right-0 text-center px-4 z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
          }}
        >
          <span className="inline-block text-[oklch(0.7_0.1_220)] text-sm font-semibold tracking-wider uppercase mb-2">
            The Purification Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-3">
            Every Drop, Transformed
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Watch your water travel through four stages of purification
          </p>
        </motion.div>

        {/* Central Water Droplet */}
        <motion.div
          className="relative z-20"
          style={{
            filter: useTransform(
              glowIntensity,
              (v) =>
                `drop-shadow(0 0 ${30 * v}px oklch(0.7 0.1 220 / ${0.5 * v}))`,
            ),
          }}
        >
          <div className="w-20 h-28 md:w-28 md:h-40 relative">
            <svg viewBox="0 0 100 140" className="w-full h-full">
              <defs>
                <linearGradient
                  id="dropletGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="oklch(0.85 0.08 220)" />
                  <stop offset="50%" stopColor="oklch(0.7 0.1 220)" />
                  <stop offset="100%" stopColor="oklch(0.55 0.12 220)" />
                </linearGradient>
              </defs>
              <path
                d="M50 10 C50 10, 85 60, 85 90 C85 115, 70 130, 50 130 C30 130, 15 115, 15 90 C15 60, 50 10, 50 10 Z"
                fill="url(#dropletGrad)"
              />
              <ellipse
                cx="35"
                cy="70"
                rx="12"
                ry="20"
                fill="white"
                opacity="0.3"
              />
              <ellipse
                cx="30"
                cy="65"
                rx="6"
                ry="10"
                fill="white"
                opacity="0.5"
              />
            </svg>

            {/* Purity indicator */}
            <motion.div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <motion.div className="text-2xl md:text-3xl font-bold text-[oklch(0.7_0.1_220)]">
                {purityDisplay.toFixed(1)}%
              </motion.div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                Pure
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Left Track - Stages 0 & 1 */}
        <motion.div
          className="absolute left-4 md:left-[10%] top-1/2 flex flex-col gap-6 md:gap-8"
          style={{ y: leftY }}
        >
          {stages.slice(0, 2).map((stage, index) => (
            <motion.div
              key={stage.id}
              className="relative"
              style={{
                opacity: stageOpacities[index],
                scale: stageScales[index],
              }}
            >
              <StageCard stage={stage} side="left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Track - Stages 2 & 3 */}
        <motion.div
          className="absolute right-4 md:right-[10%] top-1/2 flex flex-col gap-6 md:gap-8"
          style={{ y: rightY }}
        >
          {stages.slice(2, 4).map((stage, index) => (
            <motion.div
              key={stage.id}
              className="relative"
              style={{
                opacity: stageOpacities[index + 2],
                scale: stageScales[index + 2],
              }}
            >
              <StageCard stage={stage} side="right" />
            </motion.div>
          ))}
        </motion.div>

        {/* Connection Lines */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {/* Left pipes */}
          <motion.div
            className="absolute left-[calc(10%+200px)] top-1/2 w-[calc(40%-200px)] h-0.5 bg-gradient-to-r from-white/20 to-[oklch(0.7_0.1_220_/_0.3)]"
            style={{
              opacity: useTransform(scrollYProgress, [0.1, 0.2], [0, 0.6]),
              scaleX: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
              transformOrigin: "left",
            }}
          />
          {/* Right pipes */}
          <motion.div
            className="absolute right-[calc(10%+200px)] top-1/2 w-[calc(40%-200px)] h-0.5 bg-gradient-to-l from-white/20 to-[oklch(0.7_0.1_220_/_0.3)]"
            style={{
              opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 0.6]),
              scaleX: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
              transformOrigin: "right",
            }}
          />
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 md:w-64 z-10">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[oklch(0.7_0.1_220)] rounded-full"
              style={{ width: progressWidth }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/40">
            <span>Tap Water</span>
            <span>Pure Water</span>
          </div>
        </div>

        {/* Completion Message */}
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0.85, 0.95], [0, 1]),
            y: useTransform(scrollYProgress, [0.85, 0.95], [20, 0]),
          }}
        >
          <div className="text-4xl mb-2">✨</div>
          <div className="text-lg font-semibold text-white">
            Purification Complete
          </div>
          <div className="text-sm text-white/60">99.8% pure from every tap</div>
        </motion.div>
      </div>
    </section>
  );
}

function StageCard({
  stage,
  side,
}: {
  stage: FilterStage;
  side: "left" | "right";
}) {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 
        w-44 md:w-56
        ${side === "right" ? "text-right" : "text-left"}
      `}
    >
      <div
        className={`text-3xl md:text-4xl mb-3 ${side === "right" ? "text-right" : "text-left"}`}
      >
        {stage.icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-white mb-1">
        {stage.name}
      </h3>
      <p className="text-xs md:text-sm text-white/60 mb-3 leading-relaxed">
        {stage.description}
      </p>
      <div
        className={`inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 ${side === "right" ? "flex-row-reverse" : ""}`}
      >
        <span className="w-2 h-2 bg-[oklch(0.7_0.1_220)] rounded-full animate-pulse" />
        <span className="text-xs text-[oklch(0.7_0.1_220)] font-medium">
          {stage.removal}
        </span>
      </div>
    </div>
  );
}
