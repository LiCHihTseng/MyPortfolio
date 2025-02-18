import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/Jason.svg";
import { motion } from "framer-motion";
import "./NavBar.scss";
import Sidebar from "../sidebar/Sidebar";

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
    <Container className="navbar">
      <Sidebar />

      <div className="wrapper">
        {/* Logo (lg 以下靠右, lg 以上正常) */}
        <motion.img
          src={logo}
          alt="Logo"
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* 社群連結 (lg 以上顯示, lg 以下隱藏) */}
        <div className="social lg:flex hidden">
          <motion.a href="https://www.linkedin.com/in/li-chih-tseng-22933319a/c" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} className="no-underline text-white">
            <p className="font-semibold">Linkedin</p>
          </motion.a>
          <motion.a href="https://github.com/LiCHihTseng" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} className="no-underline text-white">
            <p className="font-semibold">Github</p>
          </motion.a>
          <motion.a href="https://drive.google.com/file/d/1K5wnMjp5de3kSs0gGXtRwb9IVj5UjUjA/view?usp=sharing" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} className="no-underline text-white">
            <p className="font-semibold">MY CV</p>
          </motion.a>
        </div>
      </div>
    </Container>
  );
};
