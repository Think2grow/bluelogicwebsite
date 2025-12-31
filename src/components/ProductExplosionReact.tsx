import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "framer-motion";

interface ProductExplosionProps {
  title?: string;
  subtitle?: string;
  imageSrc: string;
}

interface ComponentStage {
  id: string;
  number: number;
  name: string;
  description: string;
}

const stages: ComponentStage[] = [
  {
    id: "sediment",
    number: 1,
    name: "Sediment Pre-Filter",
    description: "Removes particles, rust, and sediment down to 5 microns",
  },
  {
    id: "carbon",
    number: 2,
    name: "Carbon Block Filter",
    description: "Eliminates chlorine, VOCs, and organic compounds",
  },
  {
    id: "membrane",
    number: 3,
    name: "RO Membrane",
    description: "99.9% contaminant removal at 0.0001 microns",
  },
  {
    id: "polishing",
    number: 4,
    name: "Polishing Filter",
    description: "Final stage for crystal-clear, pure water",
  },
  {
    id: "remineralize",
    number: 5,
    name: "Remineralization",
    description: "Adds beneficial minerals for optimal taste",
  },
];

const stats = [
  { value: "5", label: "Filtration Stages" },
  { value: "99.9%", label: "Contaminant Removal" },
  { value: "10x", label: "Quieter Operation" },
  { value: "50%", label: "Smaller Footprint" },
];

export default function ProductExplosionReact({
  title = "Engineering Excellence",
  subtitle = "Premium components working in perfect harmony",
  imageSrc,
}: ProductExplosionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for the central image
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95],
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[oklch(0.15_0.02_270)] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.7 0.1 220 / 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-[oklch(0.7_0.1_220)] text-sm font-semibold tracking-wider uppercase mb-4">
            The Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center mb-16 md:mb-24">
          {/* Left Column - Stages 1 & 2 */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {stages.slice(0, 2).map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                index={index}
                isInView={isInView}
                align="right"
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>

          {/* Center - System Image */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            style={{
              y: prefersReducedMotion ? 0 : imageY,
              scale: prefersReducedMotion ? 1 : imageScale,
            }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-md lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{
                boxShadow: "0 0 60px oklch(0.7 0.1 220 / 0.2)",
              }}
            >
              <img
                src={imageSrc}
                alt="Blue Logic RO System - Complete Installation Diagram"
                className="w-full h-auto"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.7_0.1_220_/_0.1)] via-transparent to-[oklch(0.7_0.1_220_/_0.05)] pointer-events-none" />
            </motion.div>

            {/* Center Stage Card (RO Membrane) - positioned below image on mobile, absolute on desktop */}
            <motion.div
              className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 text-center">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.7_0.1_220)] text-white flex items-center justify-center font-bold text-sm mx-auto mb-2">
                  3
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {stages[2].name}
                </h3>
                <p className="text-xs text-white/60 mt-1 max-w-[200px]">
                  {stages[2].description}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stages 4 & 5 */}
          <div className="flex flex-col gap-6 order-3">
            {stages.slice(3, 5).map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                index={index + 3}
                isInView={isInView}
                align="left"
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>

        {/* Mobile-only: Stage 3 card */}
        <motion.div
          className="lg:hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 max-w-sm mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[oklch(0.7_0.1_220)] text-white flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">
                  {stages[2].name}
                </h3>
                <p className="text-sm text-white/60">{stages[2].description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.9 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[oklch(0.7_0.1_220)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.a
            href="/the-system"
            className="inline-flex items-center gap-2 text-[oklch(0.7_0.1_220)] font-semibold text-lg transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>Explore Technical Specs</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function StageCard({
  stage,
  index,
  isInView,
  align,
  prefersReducedMotion,
}: {
  stage: ComponentStage;
  index: number;
  isInView: boolean;
  align: "left" | "right";
  prefersReducedMotion: boolean | null;
}) {
  const initialX = prefersReducedMotion ? 0 : align === "right" ? -50 : 50;

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 ${
        align === "right" ? "lg:text-right" : "lg:text-left"
      }`}
      initial={{ opacity: 0, x: initialX }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
      whileHover={{
        backgroundColor: "oklch(1 0 0 / 0.08)",
        borderColor: "oklch(0.7 0.1 220 / 0.3)",
        transition: { duration: 0.2 },
      }}
    >
      <div
        className={`flex items-start gap-4 ${align === "right" ? "lg:flex-row-reverse" : ""}`}
      >
        <div className="w-10 h-10 rounded-full bg-[oklch(0.7_0.1_220_/_0.2)] text-[oklch(0.7_0.1_220)] flex items-center justify-center font-bold shrink-0">
          {stage.number}
        </div>
        <div>
          <h3 className="font-semibold text-white mb-1">{stage.name}</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            {stage.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
