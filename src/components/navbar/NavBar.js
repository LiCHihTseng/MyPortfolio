import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/Jason.svg";
import { motion } from "framer-motion";
import "./NavBar.scss";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Sidebar />

      <div className="wrapper flex justify-end lg:justify-between lg:max-w-[1366px]">
        {/* Logo (lg 以下靠右, lg 以上正常) */}
        <Link to="/">
          <motion.img
            src={logo}
            alt="Logo"
            className="logo lg:ml-0 ml-auto" // Tailwind 增強靠右對齊
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ cursor: "pointer" }} // 添加游標樣式，提示可點擊
          />
        </Link>

        {/* 社群連結 (lg 以上顯示, lg 以下隱藏) */}
        <div className="social lg:flex hidden">
          <motion.a
            href="https://www.linkedin.com/in/li-chih-tseng-jason-22933319a/"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            className="no-underline text-white"
          >
            <p className="font-semibold hover:text-purple-600 hover:font-bold">
              Linkedin
            </p>
          </motion.a>
          <motion.a
            href="https://github.com/LiCHihTseng"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            className="no-underline text-white"
          >
            <p className="font-semibold hover:text-purple-600 hover:font-bold">
              Github
            </p>
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/19C9ks2xHv6t2RoBUfbNGKNyOmwajHE3v/view?usp=sharing"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            className="no-underline text-white"
          >
            <p className="font-semibold hover:text-purple-600 hover:font-bold">
              Resume
            </p>
          </motion.a>
        </div>
      </div>
    </Container>
  );
};