import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          strokeWidth="2"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 6 6 H 18" }, // 第一條線，從 x=6 到 x=18，長度 12
            open: { d: "M 6 17 L 18 7" }, // 展開時變為 X
          }}
        />
        <motion.path
          strokeWidth="2"
          stroke="black"
          strokeLinecap="round"
          d="M 6 12 H 18" // 第二條線，從 x=6 到 x=18，長度 12
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <motion.path
          strokeWidth="2"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 6 18 H 18" }, // 第三條線，從 x=6 到 x=18，長度 12
            open: { d: "M 6 7 L 18 17" }, // 展開時變為 X
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;