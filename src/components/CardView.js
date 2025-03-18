import React from "react";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "./CardView.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Insync from "../assets/img/InSync-logo.png";
import yoUQuest from "../assets/img/yoUQuest.png";
import AussieWild from "../assets/img/AussieWildlife.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const variants = {
//   initial: {
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

const items = [
  {
    id: 1,
    title: "InSync",
    img: Insync,
    platform: ["Mobile App", "Physical Products"],
    desc: "An ambient home interface for effortless family coordination, InSync blends seamlessly into daily life to support family schedules and social engagement.",
  },
  {
    id: 2,
    title: "yoUQuest",
    img: yoUQuest,
    platform: ["Website", "ReactJS"],
    desc: "yoUQuest is a gamified task management platform that helps university students combat academic burnout through progress tracking, customizable goals, and break reminders, promoting balance and productivity.",
  },
  {
    id: 3,
    title: "Aussie Wildlife",
    img: AussieWild,
    platform: ["Website", "JavaScript"],
    desc: "Aussie Wildlife is an interactive educational platform that uses game-based learning to inspire curiosity and appreciation for Australia's unique biodiversity through immersive RPG-style exploration.",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${item.id}`, { state: item });
  };

  return (
    <motion.div
      className="m-2 sm:m-4 xl:m-6 grid grid-cols-1 xl:grid-cols-2 cardContainer cursor-pointer overflow-hidden bg-gray-800/20 rounded-xl sm:hover:border-2 sm:hover:border-white sm:hover:shadow-xl "
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      }}
      viewport={{ once: true, amount: "some" }}
      onClick={handleClick}
    >
      <div className="w-full h-auto xl:h-full">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 sm:gap-6 p-4 sm:p-6">
        <div className="textContainer">
          <div className="flex flex-wrap gap-2 mt-2">
            {Array.isArray(item.platform) ? (
              item.platform.map((platform, index) => (
                <p
                  key={index}
                  className="inline-block rounded-full py-1 px-3 border-2 border-gray-700 bg-gray-800/30 text-sm sm:text-base text-gray-200"
                >
                  {platform}
                </p>
              ))
            ) : (
              <p className="inline-block rounded-full py-1 px-3 border-2 border-gray-700 bg-gray-800/30 text-sm sm:text-base text-gray-200">
                {item.platform}
              </p>
            )}
          </div>
          <h1 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            {item.title}
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg lg:text-xl text-gray-200">
            {item.desc}
          </p>
        </div>
        <motion.div
          className="flex justify-end p-2 sm:p-4 gap-2 sm:gap-4 items-center"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <motion.p className="text-right inline-block mb-0 text-sm sm:text-lg text-white">
            See More
          </motion.p>
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const CardView = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.5", "0.5 0"],
  });

  // 修正 useTransform，移除不正確的 ease 參數
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <Container id="Projects" className="max-w-[1366px] mx-auto w-full">
      <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8">
        My Project
      </motion.h1>

      <div className="flex flex-col items-center w-full">
        <motion.div className="w-full xl:justify-center m-0 sm:m-2">
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </motion.div>
      </div>
    </Container>
  );
};
