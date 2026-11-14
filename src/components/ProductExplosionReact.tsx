// components/ProductExplosionReact.tsx
import { useRef } from "react";
import FlowPathSVG from "./FlowPathSVG";
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
}

interface DescriptionBlock {
  type: "paragraph" | "emphasis" | "line" | string;
  text?: string;
  items?: string[];
}

interface ComponentStage {
  id: string;
  number: number;
  name: string;
  description: DescriptionBlock[];
}

const stages: ComponentStage[] = [
  {
    id: "sediment",
    number: 1,
    name: "Blue Logic Filtration (Pre-Treatment)",
    description: [
      { type: "highlight", text: "Purpose:" },
      {
        type: "text",
        text:
          " Before water ever reaches the RO membrane, it passes through Blue Logic Filtration: softening and filtration in one self-cleaning tank. Hardness, chlorine, chloramine, sediment and rust are taken out first.",
      },
      { type: "highlight", text: "Why it matters:" },
      {
        type: "text",
        text:
          " RO membranes are extremely effective but sensitive to scale and chlorine. Treating the water first protects the membrane and lets the RO run efficiently, at about 3 gallons of purified water for every 1 sent to drain.",
      },
      {
        type: "highlight",
        text: "This is the foundation the rest of the system is built on.",
      },
    ],
  },
  {
    id: "carbon",
    number: 2,
    name: "Sediment Pre-Filter",
    description: [
      { type: "highlight", text: "Purpose:" },
      {
        type: "text",
        text:
          " A full-flow sediment filter catches fine particles right before the RO membrane.",
      },
      { type: "highlight", text: "Why it matters:" },
      {
        type: "text",
        text:
          " Fine sediment can foul an RO membrane. This stage makes sure the membrane only sees clean, conditioned water.",
      },
      { type: "highlight", text: "This is your membrane's last line of defense." },
    ],
  },
  {
    id: "membrane",
    number: 3,
    name: "Reverse Osmosis Membrane (Primary Purification)",
    description: [
      { type: "highlight", text: "Purpose:" },
      {
        type: "text",
        text:
          " This is the core purification engine of the system. The RO membrane reduces total dissolved solids, heavy metals including lead and arsenic, fluoride, nitrates, PFAS, pharmaceuticals, pesticides, microplastics, bacteria and viruses.",
      },
      {
        type: "text",
        text: " It removes contaminants larger than approximately 0.0001 microns.",
      },
      { type: "highlight", text: "Why it matters:" },
      {
        type: "text",
        text:
          " Filtration can only remove what it can physically trap or chemically bind. RO removes what is dissolved in the water, not just what is suspended in it.",
      },
      { type: "highlight", text: "This is what turns treated water into truly purified water." },
    ],
  },
  {
    id: "polishing",
    number: 4,
    name: "Storage (165-Gallon Food-Grade Tank)",
    description: [
      { type: "highlight", text: "Purpose:" },
      {
        type: "text",
        text:
          " Purified water is stored in a 165-gallon food-grade tank so it is always ready on demand.",
      },
      {
        type: "features",
        items: [
          "BPA-free, phthalate-free polyethylene",
          "NSF/ANSI and FDA compliant materials",
          "Sealed lid and drain outlet",
          "Homes that need more add a second 165-gallon tank",
        ],
      },
      { type: "highlight", text: "Why it matters:" },
      {
        type: "text",
        text: " Whole-home RO needs volume on hand, so purified water is ready when your home needs it.",
      },
      { type: "highlight", text: "This is what keeps purified water ready around the clock." },
    ],
  },
  {
    id: "remineralize",
    number: 5,
    name: "Constant Pressure Delivery (Grundfos SCALA2)",
    description: [
      { type: "highlight", text: "Purpose:" },
      {
        type: "text",
        text:
          " This final stage delivers purified water to every faucet, shower and appliance in your home.",
      },
      {
        type: "text",
        text:
          " A Grundfos SCALA2 variable-speed pump regulates pressure automatically as demand changes.",
      },
      {
        type: "features",
        items: [
          "Automatic pressure regulation",
          "Steady pressure when several fixtures run at once",
          "Dry-run and low-flow protection",
          "Soft start",
        ],
      },
      { type: "highlight", text: "Why it matters:" },
      {
        type: "text",
        text:
          " Water sitting in a storage tank has no pressure of its own. The pump is what makes purified water feel like normal city pressure.",
      },
      { type: "highlight", text: "This is what makes pure water feel effortless at every tap." },
    ],
  },
];

const stats = [
  { value: "5", label: "Treatment Stages" },
  { value: "165 gal", label: "Purified Storage" },
  { value: "About 3:1", label: "Purified to Drain" },
  { value: "5 yr", label: "Warranty on Defects" },
];

export default function ProductExplosionReact({
  title = "Engineering Excellence",
  subtitle = "Premium components working in perfect harmony",
}: ProductExplosionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Faster and more usable mapping for the right-side animation
  const { scrollYProgress: scrollCardsProgress } = useScroll({
    target: cardsRef,
    offset: ["start 80%", "end 20%"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[oklch(0.15_0.02_270)] text-white py-20 md:py-32"
    >
      {/* Background gradient (keep clipping here, not on the section) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.7 0.1 220 / 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-glacier text-sm font-semibold tracking-wider uppercase mb-4">
            The Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">{title}</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24"
          ref={cardsRef}
        >
          {/* Left column */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {stages.map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                index={index}
                isInView={isInView}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}

            {/* Mobile image removed per request */}
          </div>

          {/* Right column: sticky viewport window that lasts through all cards */}
          <div className="hidden lg:block order-2 relative">
            <div
              className="sticky top-24 overflow-hidden"
              style={{ height: "calc(100vh - 6rem)" }}
            >
              <FlowPathSVG scrollProgress={scrollCardsProgress} />
            </div>
          </div>
        </div>

        {/* Stats */}
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
            href="/the-system/"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-full bg-[oklch(0.7_0.1_220)] text-[oklch(0.15_0.02_270)] font-semibold text-lg shadow-[0_12px_30px_oklch(0.7_0.1_220_/_0.3)] border border-white/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.7_0.1_220)] md:w-auto md:px-0 md:py-0 md:rounded-none md:bg-transparent md:text-glacier md:shadow-none md:border-0"
            whileHover={{ x: 3 }}
          >
            <span>Explore Technical Specs</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 overflow-hidden ${className}`}
    >
      <div className="flex items-start gap-4 relative z-10">
        <div className="w-10 h-10 rounded-full bg-[oklch(0.7_0.1_220_/_0.2)] text-glacier flex items-center justify-center font-bold shrink-0">
          {stage.number}
        </div>
        <div>
          <h3 className="font-semibold text-white mb-1">{stage.name}</h3>
          <div className="text-sm text-white/60 leading-relaxed space-y-3">
            {(() => {
              const blocks = stage.description;
              const featureIdx = blocks.findIndex((b) => b.type === "features");
              const beforeFeatures = featureIdx !== -1 ? blocks.slice(0, featureIdx) : blocks;
              const afterFeatures = featureIdx !== -1 ? blocks.slice(featureIdx + 1) : [];

              return (
                <>
                  {beforeFeatures.map((block, i) => {
                    if (block.type === "highlight") {
                      return (
                        <span key={i} className="text-glacier font-semibold block">
                          {block.text}
                        </span>
                      );
                    }
                    if (block.type === "text") {
                      return (
                        <span key={i} className="block">
                          {block.text}
                        </span>
                      );
                    }
                    return null;
                  })}

                  {featureIdx !== -1 && (
                    <ul className="list-disc ml-6">
                      {(blocks[featureIdx] as any).items.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {afterFeatures.map((block, i) => {
                    if (block.type === "highlight") {
                      return (
                        <span key={i + 100} className="text-glacier font-semibold block mt-2">
                          {block.text}
                        </span>
                      );
                    }
                    if (block.type === "text") {
                      return (
                        <span key={i + 200} className="block">
                          {block.text}
                        </span>
                      );
                    }
                    return null;
                  })}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
