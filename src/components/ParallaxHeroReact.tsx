import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface ParallaxHeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc: string;
}

export default function ParallaxHeroReact({
  title = "Your Family, Unfiltered.",
  subtitle = "Professional reverse osmosis systems for the health-conscious home",
  tagline = "Half the cost. Half the footprint. 10x quieter.",
  ctaText = "Schedule Free Water Test",
  ctaHref = "/free-water-test/",
  imageSrc,
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center justify-center"
    >
      {/* Background Layer with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
        aria-hidden="true"
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-[120%] object-cover object-center absolute top-[-10%]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.02_270_/_0.6)] via-[oklch(0.2_0.02_270_/_0.4)] to-[oklch(0.2_0.02_270_/_0.7)]" />
        {/* Subtle blue accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.1_220_/_0.1)] via-transparent to-[oklch(0.7_0.1_220_/_0.05)]" />
      </motion.div>

      {/* Content Layer */}
      <motion.div
        className="relative z-10 px-4 py-24 md:py-32 text-center max-w-5xl mx-auto"
        style={{
          y: prefersReducedMotion ? 0 : contentY,
          opacity: prefersReducedMotion ? 1 : opacity,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Location Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <svg
              className="w-4 h-4 text-[oklch(0.85_0.05_220)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-sm font-medium text-white/90">
              Serving the Wasatch Front
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.1] text-white"
            style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/90 font-light max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 text-[oklch(0.85_0.05_220)] font-medium"
          >
            {tagline}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href={ctaHref}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-glacier text-white font-semibold text-lg px-6 py-4 rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "oklch(0.55 0.12 220)",
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">{ctaText}</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/70 text-sm"
          >
            <TrustItem
              icon={
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              }
              text="Protecting Homes and Businesses"
            />
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
            <TrustItem
              icon={
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-6l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z" />
              }
              text="Professional Installation"
            />
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
            <TrustItem
              icon={
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              }
              text="Local Utah Team"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: prefersReducedMotion ? 1 : opacity }}
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        className="w-5 h-5 text-[oklch(0.85_0.05_220)]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      <span>{text}</span>
    </motion.div>
  );
}
