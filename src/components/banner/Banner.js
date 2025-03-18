import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";
import "./Banner.scss"; // 保留 SCSS 作為備用樣式

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Banner = () => {
  const targetRef = useRef(null);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const toRotate = ["Current Student", "Web Designer", "UI/UX Designer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="overflow-hidden w-full"
    >
      <section className="banner bg-cover bg-center bg-no-repeat py-24 sm:py-32 lg:py-40" id="Homepage">
        <Container className="max-w-7xl mx-auto">
          <Row className="items-center justify-center text-center sm:text-left">
            <Col
              lg={11}
              md={10}
              sm={12}
              className="flex flex-col justify-center h-full"
            >
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline inline-block px-4 py-2 text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-500/50 to-indigo-500/50 border border-white/50 rounded-lg mb-4">
                      Welcome to my Portfolio
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                      {`Hi! I'm Jason Tseng`}{" "}
                      <span className="txt-rotate text-purple-400">
                        <span className="wrap border-r-2 border-gray-600 inline-block">
                          {text}
                        </span>
                      </span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 max-w-prose">
                      Currently studying at the University of Queensland, Master
                      of Interaction Design student
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>

          <Row className="justify-center ">
            <Col md="auto" className="flex justify-center ">
              <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                onClick={() => (window.location.href = "mailto:zxcjason234@gmail.com")}
                className="bg-purple-800 text-white font-bold text-lg py-2 px-4 rounded-lg flex items-center hover:bg-purple-700"
              >
                Contact me! <ArrowRightCircle size={25} className="ml-2" />
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};