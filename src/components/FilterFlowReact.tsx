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
  const [activeStage, setActiveStage] = useState(-1);
  const [purityDisplay, setPurityDisplay] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to purity percentage
  const purity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.55, 0.7, 0.9],
    [0, 25, 50, 85, 99.8, 99.8],
  );

  // Update displayed purity value and active stage on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine which stage is active based on scroll
    if (latest < 0.2) {
      setActiveStage(-1); // No stage active yet
    } else if (latest < 0.35) {
      setActiveStage(0);
    } else if (latest < 0.5) {
      setActiveStage(1);
    } else if (latest < 0.65) {
      setActiveStage(2);
    } else if (latest < 0.8) {
      setActiveStage(3);
    } else {
      setActiveStage(4); // All complete
    }
  });

  useMotionValueEvent(purity, "change", (latest) => {
    setPurityDisplay(latest);
  });

  // Droplet position: centered (0%) -> left (20-85%) -> centered (90%+)
  const dropletX = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.85, 0.9],
    ["0%", "0%", "-280%", "-280%", "0%"],
  );

  // Droplet scale: large -> small (during cards) -> large again
  const dropletScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.85, 0.9],
    [1, 1, 0.6, 0.6, 1],
  );

  // Cards container opacity: hidden -> visible -> hidden
  const cardsOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.22, 0.82, 0.88],
    [0, 1, 1, 0],
  );

  // Cards vertical scroll movement
  const cardsY = useTransform(scrollYProgress, [0.2, 0.85], ["60vh", "-60vh"]);

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  // Droplet glow intensity
  const glowIntensity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    [0.4, 0.7, 1],
  );

  return (
    <section
      ref={containerRef}
      data-react-root
      className="absolute inset-0 bg-[oklch(0.15_0.02_270)]"
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
            opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]),
          }}
        >
          <span className="inline-block text-glacier text-sm font-semibold tracking-wider uppercase mb-2">
            The Purification Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-3">
            Every Drop, Transformed
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Watch your water travel through four stages of purification
          </p>
        </motion.div>

        {/* Water Droplet - moves from center to left and back */}
        <motion.div
          className="absolute z-20 left-1/2"
          style={{
            x: dropletX,
            scale: dropletScale,
            filter: useTransform(
              glowIntensity,
              (v) =>
                `drop-shadow(0 0 ${30 * v}px oklch(0.7 0.1 220 / ${0.5 * v}))`,
            ),
          }}
        >
          <div className="w-20 h-28 md:w-28 md:h-40 relative -translate-x-1/2">
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
            <motion.div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <motion.div className="text-xl md:text-2xl font-bold text-glacier">
                {purityDisplay.toFixed(1)}%
              </motion.div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                Pure
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter Stage Cards - Vertically stacked, center-aligned */}
        <motion.div
          className="absolute flex flex-col items-center gap-6"
          style={{
            opacity: cardsOpacity,
            y: cardsY,
          }}
        >
          {stages.map((stage, index) => (
            <StageCard
              key={stage.id}
              stage={stage}
              isActive={activeStage === index}
              isPast={activeStage > index}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 md:w-64 z-10">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-glacier rounded-full"
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
          className="absolute mb-8 md:mb-0 bottom-8 md:bottom-24 left-1/2 -translate-x-1/2 text-center z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0.88, 0.95], [0, 1]),
            y: useTransform(scrollYProgress, [0.88, 0.95], [20, 0]),
          }}
        >
          <div className="text-4xl mb-2">✨</div>
          <div className="text-lg font-semibold text-white">
            Purification Complete
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StageCard({
  stage,
  isActive,
  isPast,
}: {
  stage: FilterStage;
  isActive: boolean;
  isPast: boolean;
}) {
  return (
    <motion.div
      className={`
        backdrop-blur-sm border rounded-xl p-4 md:p-6 
        w-72 md:w-80 text-center
        transition-all duration-300
        ${
          isActive
            ? "bg-white/10 border-glacier shadow-lg shadow-[oklch(0.7_0.1_220/0.2)]"
            : isPast
              ? "bg-white/5 border-white/20"
              : "bg-white/5 border-white/10"
        }
      `}
      animate={{
        scale: isActive ? 1.05 : 1,
        opacity: isActive ? 1 : isPast ? 0.6 : 0.4,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-3xl md:text-4xl mb-3">{stage.icon}</div>
      <h3 className="text-base md:text-lg font-semibold text-white mb-1">
        {stage.name}
      </h3>
      <p className="text-xs md:text-sm text-white/60 mb-3 leading-relaxed">
        {stage.description}
      </p>
      <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
        <span
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            isActive
              ? "bg-glacier animate-pulse"
              : isPast
                ? "bg-glacier"
                : "bg-white/30"
          }`}
        />
        <span
          className={`text-xs font-medium transition-colors duration-300 ${
            isActive || isPast ? "text-glacier" : "text-white/50"
          }`}
        >
          {stage.removal}
        </span>
      </div>
    </motion.div>
  );
}
