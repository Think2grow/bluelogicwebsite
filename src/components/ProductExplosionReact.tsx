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
    description: "99% contaminant removal at 0.0001 microns",
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
  { value: "99%", label: "Contaminant Removal" },
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
          <span className="inline-block text-glacier text-sm font-semibold tracking-wider uppercase mb-4">
            The Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Main Content Grid - Mobile: vertical list with image in middle, Desktop: stages left, sticky image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24">
          {/* Left Column - All 5 stages (desktop), sequential on mobile */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {/* All 5 stages */}
            {stages.map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                index={index}
                isInView={isInView}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}

            {/* Image container - mobile only, positioned after all stages */}
            <motion.div
              className="lg:hidden relative"
              style={{
                y: prefersReducedMotion ? 0 : imageY,
                scale: prefersReducedMotion ? 1 : imageScale,
              }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.7_0.1_220_/_0.1)] via-transparent to-[oklch(0.7_0.1_220_/_0.05)] pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Sticky image (desktop only) */}
          <div className="hidden lg:block order-2 relative">
            <div className="sticky top-24 h-fit">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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
                <div className="absolute inset-0 bg-linear-to-tr from-[oklch(0.7_0.1_220_/_0.1)] via-transparent to-[oklch(0.7_0.1_220_/_0.05)] pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>

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
              <div className="text-3xl md:text-4xl font-bold text-glacier mb-2">
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
            className="inline-flex items-center gap-2 text-glacier font-semibold text-lg transition-colors"
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
  prefersReducedMotion,
  className = "",
}: {
  stage: ComponentStage;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
  className?: string;
}) {
  const initialX = prefersReducedMotion ? 0 : -50;

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 ${className}`}
      initial={{ opacity: 0, x: initialX }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[oklch(0.7_0.1_220_/_0.2)] text-glacier flex items-center justify-center font-bold shrink-0">
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
