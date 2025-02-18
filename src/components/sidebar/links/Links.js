import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const location = useLocation();

  const handleProjectClick = (e) => {
    if (location.pathname !== "/MyPortfolio") {
      e.preventDefault();
      window.location.href = "/MyPortfolio#Projects"; // ✅ 導向 `/MyPortfolio#Projects`
    } else {
      e.preventDefault();
      setTimeout(() => {
        const element = document.getElementById("Projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // ✅ 當前頁面稍微等待後滾動
    }
  };

  return (
    <motion.div className="links flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6" variants={variants}>
      {/* Homepage */}
      <motion.div variants={itemVariants}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Homepage
          </motion.span>
        </Link>
      </motion.div>

      {/* About */}
      <motion.div variants={itemVariants}>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            About
          </motion.span>
        </Link>
      </motion.div>

      {/* Projects */}
      <motion.div variants={itemVariants}>
        <motion.a 
          href="/MyPortfolio#Projects"
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          onClick={handleProjectClick}
        >
          Projects
        </motion.a>
      </motion.div>

      {/* 社群連結（lg 以上隱藏，lg 以下顯示） */}
      <div className="flex flex-col lg:hidden space-y-3 mt-4">
        <motion.a href="https://www.linkedin.com/in/li-chih-tseng-22933319a/c" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="no-underline text-white">
          <p className="font-semibold">Linkedin</p>
        </motion.a>
        <motion.a href="https://github.com/LiCHihTseng" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="no-underline text-white">
          <p className="font-semibold">Github</p>
        </motion.a>
        <motion.a href="https://drive.google.com/file/d/1K5wnMjp5de3kSs0gGXtRwb9IVj5UjUjA/view?usp=sharing" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="no-underline text-white">
          <p className="font-semibold">MY CV</p>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Links;
