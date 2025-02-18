import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./app.scss";
import { NavBar } from "./components/navbar/NavBar";
import ProjectDetail from "./page/ProjectDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import Footer from "./components/footer/Footer";
import About from "./page/About";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  useEffect(() => {
    // 確保 location.hash 只包含 `#project`
    if (location.hash && location.hash.includes("Projects")) {
      setTimeout(() => {
        const element = document.getElementById("Projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // 讓 React 確保元素已經渲染
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
