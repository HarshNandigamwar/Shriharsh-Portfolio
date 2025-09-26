"use client";

import { motion, useAnimation } from "motion/react";

const chevronVariants = {
  normal: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [4, 0],
    opacity: [0.3, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ChevronDown = ({
  width = 20,
  height = 20,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m6 9 6 6 6-6"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export { ChevronDown };
