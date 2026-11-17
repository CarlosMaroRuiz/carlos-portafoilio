"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

interface WireCubeProps {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
  solid?: boolean;
}

function WireCube({ x, y, scale = 1, opacity = 1, solid = false }: WireCubeProps) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill={solid ? "#f5f5f5" : "none"}
      stroke={solid ? "#f5f5f5" : "#bdbdbd"}
      strokeWidth="1.25"
      strokeLinejoin="round"
      opacity={opacity}
    >
      <path d="M0 24 24 12 48 24 24 36Z" />
      <path d="M0 24v28l24 14 24-14V24M24 36v30" />
      {solid && <path d="M24 36v30L48 52V24Z" fill="#c8c8c8" stroke="none" />}
    </g>
  );
}

interface CubeArtworkProps {
  className?: string;
}

export function CubeArtwork({ className = "" }: CubeArtworkProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 70, damping: 20, mass: 0.8 });
  const springY = useSpring(pointerY, { stiffness: 70, damping: 20, mass: 0.8 });
  const foregroundX = useTransform(springX, [-1, 1], [-14, 14]);
  const backgroundX = useTransform(springX, [-1, 1], [10, -10]);
  const foregroundY = useTransform(springY, [-1, 1], [-10, 10]);
  const backgroundY = useTransform(springY, [-1, 1], [7, -7]);

  return (
    <motion.svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      onPointerMove={reduceMotion ? undefined : (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
        pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      viewBox="0 0 700 560"
    >
      <g stroke="#fff" strokeOpacity=".12" strokeWidth="1">
        <path d="M35 452h630M74 82v400M626 82v400" strokeDasharray="2 8" />
        <path d="m110 420 480-270M120 144l460 264" strokeDasharray="2 10" />
      </g>

      <motion.g
        style={{ x: foregroundX, y: foregroundY, transformBox: "fill-box", transformOrigin: "center" }}
      >
        <g className="cube-float cube-float--one">
          <WireCube x={72} y={176} scale={2.2} opacity={0.9} />
        </g>
        <g className="cube-float cube-float--two">
          <WireCube x={222} y={292} scale={1.45} opacity={0.78} />
        </g>
        <g className="cube-float cube-float--three">
          <WireCube x={356} y={334} scale={1.05} opacity={0.82} solid />
        </g>
        <g className="cube-float cube-float--four">
          <WireCube x={500} y={294} scale={1.45} opacity={0.86} />
        </g>
      </motion.g>

      <motion.g
        style={{ x: backgroundX, y: backgroundY, transformBox: "fill-box", transformOrigin: "center" }}
      >
        <g className="cube-float cube-float--gem">
          <WireCube x={430} y={98} scale={3} opacity={0.95} />
        </g>
      </motion.g>

      <ellipse
        cx="350"
        cy="280"
        rx="270"
        ry="112"
        stroke="#fff"
        strokeOpacity=".25"
        strokeWidth="1"
        strokeDasharray="3 9"
        className="cube-orbit"
      />
      <ellipse
        cx="350"
        cy="280"
        rx="200"
        ry="74"
        stroke="#fff"
        strokeOpacity=".12"
        strokeWidth="1"
        className="cube-orbit cube-orbit--reverse"
      />

      <g fill="#f2f2f2">
        <circle cx="530" cy="210" r="3" />
        <circle cx="606" cy="236" r="2" />
        <circle cx="412" cy="238" r="2.5" />
        <circle cx="324" cy="176" r="2" />
        <circle cx="171" cy="364" r="2.5" />
      </g>
      <g className="cube-float cube-float--small-one">
        <WireCube x={560} y={418} scale={0.42} opacity={0.9} solid />
      </g>
      <g className="cube-float cube-float--small-two">
        <WireCube x={304} y={112} scale={0.48} opacity={0.72} solid />
      </g>
      <g className="cube-float cube-float--small-three">
        <WireCube x={610} y={166} scale={0.35} opacity={0.7} />
      </g>
      <g className="cube-float cube-float--small-four">
        <WireCube x={180} y={100} scale={0.75} opacity={0.72} solid />
      </g>
      <g className="cube-float cube-float--small-five">
        <WireCube x={24} y={354} scale={0.75} opacity={0.68} />
      </g>
      <g className="cube-float cube-float--small-six">
        <WireCube x={622} y={255} scale={0.65} opacity={0.72} solid />
      </g>
      <g className="cube-float cube-float--small-seven">
        <WireCube x={408} y={438} scale={0.55} opacity={0.72} />
      </g>
      <g className="cube-float cube-float--small-eight">
        <WireCube x={270} y={184} scale={0.55} opacity={0.62} solid />
      </g>
    </motion.svg>
  );
}
