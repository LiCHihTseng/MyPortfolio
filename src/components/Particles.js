import { motion } from "framer-motion";
import React from "react";

const AnimatedCircleBackground = () => {
  return (
    <div className="background-layer">
      {/* Right-Side Main Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5, x: "40%", y: "-10%" }}
        animate={{ scale: 1.2, opacity: 0.8, x: "40%", y: "-10%" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="animated-circle main-circle"
      />

      {/* Upper-Left Smaller Circle */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0.4, x: "20%", y: "-30%" }}
        animate={{ scale: 1, opacity: 0.6, x: "20%", y: "-30%" }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="animated-circle small-circle"
      />
    </div>
  );
};

export default AnimatedCircleBackground;
