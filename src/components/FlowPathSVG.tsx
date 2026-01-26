// components/FlowPathSVG.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

interface FlowPathSVGProps {
  scrollProgress: MotionValue<number>;
}

const VIEWBOX_W = 400;
const VIEWBOX_H = 1280;

/** Glass centers in viewBox coordinates */
const GLASSES = [
  { cx: 240, cy: 150 },
  { cx: 160, cy: 335 },
  { cx: 160, cy: 550 },
  { cx: 240, cy: 765 },
  { cx: 240, cy: 980 },
] as const;

/**
 * Stage timing:
 * - reach: line arrives and stops at the glass
 * - fillEnd: glass fills while line stays stopped
 */
const STAGES = [
  { reach: 0.06, fillEnd: 0.12 },
  { reach: 0.22, fillEnd: 0.28 },
  { reach: 0.38, fillEnd: 0.44 },
  { reach: 0.54, fillEnd: 0.6 },
  { reach: 0.7, fillEnd: 0.76 },
] as const;

function computeStopPositions(
  pathEl: SVGPathElement,
  points: ReadonlyArray<{ cx: number; cy: number }>,
  samples = 2500
): number[] {
  const total = pathEl.getTotalLength();
  if (!Number.isFinite(total) || total <= 0) return points.map(() => 0);

  const sampled: Array<{ x: number; y: number; t: number }> = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const p = pathEl.getPointAtLength(t * total);
    sampled.push({ x: p.x, y: p.y, t });
  }

  return points.map(({ cx, cy }) => {
    let bestT = 0;
    let bestD = Number.POSITIVE_INFINITY;

    for (const s of sampled) {
      const dx = s.x - cx;
      const dy = s.y - cy;
      const d = dx * dx + dy * dy;
      if (d < bestD) {
        bestD = d;
        bestT = s.t;
      }
    }

    if (bestT < 0) bestT = 0;
    if (bestT > 1) bestT = 1;
    return bestT;
  });
}

function FlowGlass({
  scrollProgress,
  cx,
  cy,
  fillStart,
  fillEnd,
}: {
  scrollProgress: MotionValue<number>;
  cx: number;
  cy: number;
  fillStart: number;
  fillEnd: number;
}) {
  const glassHeight = 70;
  const glassWidth = 45;

  const innerHeight = glassHeight - 4;
  const innerWidth = glassWidth - 4;

  const fillLevel = useTransform(scrollProgress, [fillStart, fillEnd], [0, 1]);
  const fillPx = useTransform(fillLevel, (v) => v * innerHeight);

  const innerBottomY = cy + glassHeight / 2 - 2;
  const fillY = useTransform(fillPx, (h) => innerBottomY - h);

  const overflowOpacity = useTransform(
    scrollProgress,
    [fillEnd - 0.015, fillEnd, fillEnd + 0.02],
    [0, 1, 0]
  );

  return (
    <g>
      <path
        d={`M ${cx - glassWidth / 2} ${cy - glassHeight / 2}
            L ${cx - glassWidth / 2} ${cy + glassHeight / 2}
            L ${cx + glassWidth / 2} ${cy + glassHeight / 2}
            L ${cx + glassWidth / 2} ${cy - glassHeight / 2}
            Z`}
        fill="oklch(0.15 0.02 270 / 0.5)"
        stroke="oklch(0.7 0.1 220 / 0.5)"
        strokeWidth="2.5"
      />

      <line
        x1={cx - glassWidth / 2 + 4}
        y1={cy - glassHeight / 2 + 8}
        x2={cx - glassWidth / 2 + 4}
        y2={cy + glassHeight / 2 - 8}
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
        strokeLinecap="round"
      />

      <motion.rect
        x={cx - glassWidth / 2 + 2}
        width={innerWidth}
        fill="url(#waterGradient)"
        style={{ y: fillY, height: fillPx }}
      />

      <motion.circle
        cx={cx}
        cy={cy - glassHeight / 2 - 8}
        r="4"
        fill="oklch(0.7 0.1 220)"
        filter="url(#glow)"
        style={{ opacity: overflowOpacity }}
      />
      <motion.circle
        cx={cx - 12}
        cy={cy - glassHeight / 2 - 12}
        r="3"
        fill="oklch(0.7 0.1 220)"
        filter="url(#glow)"
        style={{ opacity: overflowOpacity }}
      />
      <motion.circle
        cx={cx + 12}
        cy={cy - glassHeight / 2 - 12}
        r="3"
        fill="oklch(0.7 0.1 220)"
        filter="url(#glow)"
        style={{ opacity: overflowOpacity }}
      />
    </g>
  );
}

export default function FlowPathSVG({ scrollProgress }: FlowPathSVGProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [stopPos, setStopPos] = useState<number[] | null>(null);
  const [panTargets, setPanTargets] = useState<number[] | null>(null); // px
  const [panMax, setPanMax] = useState(0);

  /**
   * Where the active glass sits inside the viewport.
   * 0.35 means 35% from the top.
   */
  const ANCHOR_Y_RATIO = 0.35;

  useEffect(() => {
    const update = () => {
      const viewportEl = viewportRef.current;
      const svgEl = svgRef.current;
      const pathEl = pathRef.current;

      if (!viewportEl || !svgEl || !pathEl) return;

      try {
        // Stop positions for line plateaus
        const stops = computeStopPositions(pathEl, GLASSES, 2500);
        setStopPos(stops);

        const viewportH = viewportEl.clientHeight;

        // IMPORTANT: we force a tall rendered SVG (see style below),
        // so this rect height will be meaningful and pan can exist.
        const rect = svgEl.getBoundingClientRect();
        if (!rect.height || !rect.width) return;

        const max = Math.max(0, rect.height - viewportH);
        setPanMax(max);

        // Scale from viewBox to rendered pixels
        const scaleY = rect.height / VIEWBOX_H;

        const glassYpx = GLASSES.map((g) => g.cy * scaleY);
        const anchorPx = viewportH * ANCHOR_Y_RATIO;

        const targets = glassYpx.map((gy) => {
          const raw = gy - anchorPx; // desired pan amount
          return Math.min(max, Math.max(0, raw));
        });

        setPanTargets(targets);
      } catch {
        setStopPos(null);
        setPanTargets(null);
        setPanMax(0);
      }
    };

    update();

    // Two-frame delay helps when layout/fonts settle after initial paint
    const t1 = window.setTimeout(update, 0);
    const t2 = window.setTimeout(update, 50);

    window.addEventListener("resize", update);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Build scroll -> lineProgress mapping with plateaus (stops)
  const { input, outputLine } = useMemo(() => {
    const fallbackStops = [0.18, 0.36, 0.54, 0.72, 0.9];
    const stops =
      stopPos && stopPos.length === GLASSES.length ? stopPos : fallbackStops;

    const inArr: number[] = [0];
    const outArr: number[] = [0];

    for (let i = 0; i < STAGES.length; i++) {
      const reach = STAGES[i].reach;
      const fillEnd = STAGES[i].fillEnd;

      inArr.push(reach);
      outArr.push(stops[i]);

      inArr.push(fillEnd);
      outArr.push(stops[i]);
    }

    inArr.push(1);
    outArr.push(1);

    return { input: inArr, outputLine: outArr };
  }, [stopPos]);

  const lineProgress = useTransform(scrollProgress, input, outputLine);
  const strokeDashoffset = useTransform(lineProgress, (p) => 1 - p);

  // Build scroll -> pan mapping using the same plateaus so it stays locked per stage
  const outputPan = useMemo(() => {
    const fallback = new Array(GLASSES.length).fill(0);
    const pans = panTargets && panTargets.length === GLASSES.length ? panTargets : fallback;

    const out: number[] = [0];
    for (let i = 0; i < STAGES.length; i++) {
      out.push(pans[i]);
      out.push(pans[i]);
    }
    out.push(pans[pans.length - 1] ?? 0);

    return out;
  }, [panTargets]);

  const panValue = useTransform(scrollProgress, input, outputPan);
  const panTranslate = useTransform(panValue, (v) => {
    const clamped = Math.min(panMax, Math.max(0, v));
    return -clamped; // translate up
  });

  return (
    <div
      ref={viewportRef}
      style={{ width: "100%", height: "100%", minHeight: "100%", overflow: "hidden" }}
    >
      <motion.svg
        ref={svgRef}
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Blue Logic water filtration flow path showing the journey from source water through each purification stage"
        // Force a tall rendered SVG so the design is not tiny and panning has room.
        // This is the key difference vs height: auto.
        style={{ width: "100%", height: "1200px", y: panTranslate, display: "block" }}
      >
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.7 0.1 220)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="oklch(0.75 0.12 215)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.7 0.1 220)" stopOpacity="0.8" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          ref={pathRef}
          d="M 200 50 
             C 200 120, 300 180, 200 250
             C 100 320, 200 380, 200 450
             C 200 520, 100 580, 200 650
             C 300 720, 200 780, 200 850
             C 200 920, 300 980, 200 1050
             C 100 1120, 200 1200, 200 1260"
          fill="none"
          stroke="url(#waterGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          pathLength={1}
          strokeDasharray={1}
          style={{ strokeDashoffset }}
        />

        {GLASSES.map((g, i) => (
          <FlowGlass
            key={i}
            scrollProgress={scrollProgress}
            cx={g.cx}
            cy={g.cy}
            fillStart={STAGES[i].reach}
            fillEnd={STAGES[i].fillEnd}
          />
        ))}
      </motion.svg>
    </div>
  );
}
