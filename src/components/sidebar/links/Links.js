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
      window.location.href = "/MyPortfolio#Projects";
    } else {
      e.preventDefault();
      setTimeout(() => {
        const element = document.getElementById("Projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {/* Homepage */}
      <motion.div variants={itemVariants}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block" // 確保 span 作為塊級元素處理
          >
            Homepage
          </motion.span>
        </Link>
      </motion.div>

      {/* About */}
      <motion.div variants={itemVariants}>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block"
          >
            About
          </motion.span>
        </Link>
      </motion.div>

      {/* Projects */}
      <motion.div variants={itemVariants}>
        <motion.a
          href="/MyPortfolio#Projects"
          onClick={handleProjectClick}
          className="no-underline text-black"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block"
          >
            Projects
          </motion.span>
        </motion.a>
      </motion.div>

      {/* 社群連結（手機顯示，桌面隱藏） */}
      <div className="flex flex-col lg:hidden space-y-3 mt-4">
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://www.linkedin.com/in/li-chih-tseng-22933319a/"
            className="no-underline text-black"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <p className="">Linkedin</p>
            </motion.span>
          </motion.a>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://github.com/LiCHihTseng"
            className="no-underline text-black"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <p className="">Github</p>
            </motion.span>
          </motion.a>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://drive.google.com/file/d/1K5wnMjp5de3kSs0gGXtRwb9IVj5UjUjA/view?usp=sharing"
            className="no-underline text-black"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <p className="">MY CV</p>
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Links;