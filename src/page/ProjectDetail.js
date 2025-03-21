import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import transition from "../transition";
import { motion } from "framer-motion";

import "./ProjectDetail.scss";

import Marquee from "../components/marquee/Marquee"; // Fix the casing of the file name//+
import Slider from "../components/slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircle,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Roles } from "./Roles";

import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

// import Insync from "../assets/img/InSync-banner.svg";
import Insync_photoframe from "../assets/img/InSync-photoframe.svg";
import InSync_photo from "../assets/img/InSync-Photo.svg";
import SliderImage1 from "../assets/img/InSync-Slider1.svg";
import SliderImage2 from "../assets/img/InSync-Slider2.svg";
import SliderImage3 from "../assets/img/InSync-Slider3.svg";
import Lottie from "react-lottie";
import InsyncAnimation from "../assets/img/GIF/InSync";
import InsyncAnimation2 from "../assets/img/GIF/icon-park_brain";
import InsyncAnimation3 from "../assets/img/GIF/icon-park_user_test";
import InsyncPictureFrame1 from "../assets/img/GIF/InSync-PhotoFrame";
import InsyncPictureFrame2 from "../assets/img/GIF/InSync-Short2";
import InsyncAnimation_motion_sensor from "../assets/img/GIF/Motion-sensor";
import InsyncAnimation_family_note from "../assets/img/GIF/Family_note";
import InsyncAnimation_schedule from "../assets/img/GIF/Schedule";

import YoUQuestBanner from "../assets/img/GIF/yoUQuest_banner";
import YoUQuestPhoto from "../assets/img/yoUQuest-photo.svg";
import SlideyoUQuest1 from "../assets/img/SlideyoUQuest1.svg";
import SlideyoUQuest2 from "../assets/img/SlideyoUQuest2.svg";
import SlideyoUQuest3 from "../assets/img/SlideyoUQuest3.svg";
import BattlePass from "../assets/img/GIF/Battle-pass";
import TimeRecommed from "../assets/img/GIF/TimeRecommed";
import Mountain from "../assets/img/GIF/Mountains";
import YoUQuest_user1 from "../assets/img/GIF/Animation-1732605097051";
import YoUQuest_user2 from "../assets/img/GIF/Animation-1732605390912";
import YouUQuest_img1 from "../assets/img/YouUquest_img1.svg";
import YouUQuest_img2 from "../assets/img/YouUquest_img2.svg";

import AussieBanner from "../assets/img/GIF/AussieWildlife_banner";
import AussiePoster from "../assets/img/Aussie_banner.svg";
import SlideAussie1 from "../assets/img/SlideyoAussie1.svg";
import SlideAussie2 from "../assets/img/SlideyoAussie2.svg";
import SlideAussie3 from "../assets/img/SlideyoAussie3.svg";
import Quiz from "../assets/img/GIF/Quiz";
import Rpg from "../assets/img/GIF/Rpg";
import real_time from "../assets/img/GIF/real_time";
import Aussie_short1 from "../assets/img/GIF/Aussie_short1";
import Aussie_short2 from "../assets/img/GIF/Aussie_short2";

import NextProjectButton from "../components/nextproject/NextProject";

// Mock data, should be imported or retrieved from a context/store in a real app
const items = [
  {
    id: 1,
    project_category: "Side Projects",
    title: "InSync: The Digital Picture Frame",
    img: InsyncAnimation,
    img_2: Insync_photoframe,

    slider_img: [SliderImage1, SliderImage2, SliderImage3],
    keywords: [
      "Mobile App",
      "Ambient Project",
      "Digital Photo Frame",
      "Schedule Management",
      "User Experience",
    ],
    project_sum:
      "I contributed to expanding InSync’s functionality as an ambient product for family engagement and scheduling by designing the user interface for both the mobile app and digital frame. Working with the team, I introduced responsive features like motion detection and personalized status lights, creating an intuitive, hands-free interaction experience.\n\nTo enhance usability, I integrated navigation elements and visual cues, helping users easily manage schedules, view updates, and share stories within the family circle. These enhancements transformed InSync into a meaningful family hub, fostering better communication and helping users feel more connected to each other’s daily lives.",
    project_highlights: [
      {
        key: "Motion sensors and Interactive Video Playback",
        img: InsyncAnimation_motion_sensor,
        description:
          "Motion sensors detect when a user approaches the photo frame, triggering the display of an interactive video. Users can also customize status lights via the mobile app, choosing colors to reflect different moods or states, or use the auto-status feature to display their availability, such as busy, occupied, or relaxing, on the photo frame.",
      },
      {
        key: "Posting Family Notes",
        img: InsyncAnimation_family_note,
        description:
          "Enhancing family communication, this feature allows users to post notes on the digital photo frame. Notes can be used for reminders, messages, or small thoughtful gestures, fostering a deeper connection among family members.",
      },
      {
        key: "Scheduling System Feedback",
        img: InsyncAnimation_schedule,
        description:
          "An intuitive schedule display helps families stay on top of daily plans. Integrated with existing calendars, the system ensures effortless updates, keeping every member informed and organized.",
      },
    ],
    video_title: "View Video",
    video_link: "https://youtu.be/y29mrG8imNg",
    problem_statements_title: "Problem Statements",
    problem_statements:
      "Traditional time management apps, often confined to mobile devices, can be both a boon and a bane for family coordination. While they synchronize schedules and organize tasks, they frequently demand constant attention, leading to distractions and fragmented focus. This constant connectivity can isolate family members, prioritizing efficiency over a harmonious family experience. There is a need for a solution that encourages social interaction and collaboration without the intrusive nature of current mobile applications, by integrating technology more subtly and naturally into the home environment.",
    user_need:
      "The main users of InSync are families seeking a convenient, shared platform for staying connected and informed about each other's schedules, events, and daily moments. This includes both tech-savvy members and those less familiar with technology, such as older adults who may appreciate easy-to-access family updates without needing to use a smartphone or computer.    ",
    my_role:
      "As the Lead UI Designer for InSync, I focused on creating intuitive interfaces for both the mobile app and digital photo frame, collaborating closely with our backend developer, mobile developer, and hardware specialist to integrate key features like motion detection, personalized status lights, and an ambient scheduling display. My primary responsibility was to align design with user needs, ensuring usability across platforms.\n\n In addition to leading the UI design process, I conducted iterative testing to refine the user experience. Delayed feedback required multiple design adjustments, enhancing our product’s relevance to family communication needs but adding pressure to our timeline. I also supported React Native development, gaining valuable coding experience and contributing to a foundation of user-centered, ambient interaction that makes InSync a meaningful tool for family connectivity.",
    initial_user_test:
      "Our initial concept for the InSync digital picture frame focused solely on uploading and displaying photos. However, after conducting initial user testing, we received valuable feedback that prompted us to rethink the functionality. Users expressed interest in expanding the content beyond photos, specifically requesting the ability to upload videos, similar to how Instagram Stories or BeReal work. \n\nOne suggestion was to enhance family interaction by displaying videos when a user approaches the picture frame. This feedback highlighted the potential for a more dynamic, engaging experience, where videos could be shown as a form of family interaction. This idea was well-received and inspired us to consider how multimedia content could be integrated to make the frame a more interactive and social experience.",
    user_test_title: "Think Aloud Methodology",
    user_test_desc:
      "We conducted Think Aloud testing to evaluate how users interacted with InSync’s photo frame and mobile app. Users were asked to vocalize their thoughts while performing predefined tasks, providing insight into their understanding and behavior.",
    key_findings: [
      "Initial Confusion: Users often hesitated with features like the looping GIF and motion sensors. This uncertainty required some exploration before they understood how to interact with buttons and navigation.",
      "Positive Reception: Despite initial challenges, users appreciated features like posting notes for family members, recognizing it as a valuable tool for communication.",
      "Scheduling System: The scheduling display was seen as useful and intuitive, though users struggled to understand the purpose of the light indicator, speculating incorrectly about its function.",
      "Aesthetic Feedback: Visible wires on the frame distracted users, suggesting a need for more polished hardware design.",
    ],
    user_img: InsyncAnimation2,
    use_img2: InsyncAnimation3,
    short_img1: InsyncPictureFrame1,
    short_img2: InsyncPictureFrame2,
    conclusion:
      "Working on the InSync project was a transformative journey that challenged me to design interfaces that seamlessly blend technology with daily life. As the lead UI designer, I focused on creating an ambient and intuitive system that fostered family engagement through features like motion detection and personalized status lights. Balancing user feedback, hardware constraints, and development timelines required innovative problem-solving and adaptability, but the positive reception validated our efforts. This experience honed my technical and design skills while deepening my appreciation for user-centered, responsive solutions, inspiring me to continue crafting meaningful technologies that enhance everyday experiences.",
  },
  {
    id: 2,
    project_category: "Side Projects",
    title: "yoUQuest - Your ultimate tool to beat burnout",
    img: YoUQuestBanner,
    img_2: YoUQuestPhoto,

    slider_img: [SlideyoUQuest1, SlideyoUQuest2, SlideyoUQuest3],
    keywords: [
      "Website",
      "Task Management",
      "User Experience",
      "Unique Features",
      "Preventing Burnout",
    ],
    project_sum:
      "yoUQuest is a platform dedicated to empowering students at the University of Queensland by addressing the challenges of academic burnout. \n\nBefore yoUQuest, managing assignments and tasks was a fragmented, stressful process for students, often leading to poor time management and feelings of overwhelm. Staying motivated through demanding academic schedules while maintaining personal well-being was a daunting challenge. \n\nWith yoUQuest, we’ve revolutionized how students organize and complete their academic tasks. By simply searching for their course, students gain access to a personalized assignment setup based on UQ’s course data. The platform allows them to break down assignments into smaller tasks, track their progress using an innovative battle pass system, and visually experience the satisfaction of “climbing a mountain” as they complete their work. A built-in timer ensures students maintain healthy work habits by recommending breaks, supporting better focus, and preventing burnout.\n\nWhat makes yoUQuest stand out is its focus on holistic student well-being. The platform not only simplifies academic management but also encourages a balanced approach to study by integrating gamified progress tracking with practical burnout prevention strategies. With yoUQuest, students can stay on top of their workload, feel accomplished, and thrive academically without compromising their mental health.",
    project_highlights: [
      {
        key: "Task Management and Reward-Based Battle Pass System",
        img: BattlePass,
        description:
          "Integrating task management with a gamified reward system, users can organize their assignments while unlocking steps in the battle pass. Adding more tasks dynamically increases the steps required to complete the battle pass, making progress both engaging and motivating as students work toward stunning mountain rewards.",
      },
      {
        key: "Time Management and Break Recommendations",
        img: TimeRecommed,
        description:
          "A built-in timer divides tasks into manageable intervals. For every 50 minutes of focused work, users are encouraged to take a 10-minute break, promoting healthy study habits and reducing burnout.",
      },
      {
        key: "Mountain Progress Visualization",
        img: Mountain,
        description:
          "The Mountain Page provides a visually engaging representation of users' progress, showcasing their journey as they climb metaphorical summits with every completed task.",
      },
    ],
    video_title: "View More",
    video_link: "https://youtu.be/y29mrG8imNg",
    problem_statements_title: "Problem Statements",
    problem_statements:
      "University of Queensland students often struggle with academic burnout, driven by overwhelming workloads, poor time management, and the challenge of balancing academic and personal commitments. This results in decreased productivity, mental fatigue, and a lack of motivation, ultimately impacting their academic performance and well-being. Existing tools fail to address these issues holistically, leaving students without effective systems to manage their time and reduce stress.",
    user_need:
      "University of Queensland students often struggle with managing academic workloads while maintaining a healthy balance between studies and personal life. They face challenges such as poor time management, high expectations, and a lack of motivation, leading to burnout and decreased productivity. \n\nThey need a user-friendly platform that simplifies task tracking and promotes better time management. A solution that incorporates engaging visuals, regular reminders for breaks, and rewarding progress can help students stay motivated and achieve their goals efficiently.",
    my_role:
      "As the team designer and developer for yoUQuest, I spearheaded efforts to address academic burnout and improve time management among university students. Working closely with UQ students, I conducted user research to uncover pain points and led the design process to ensure our solutions aligned with user needs.\n\nI was responsible for creating intuitive designs for key features, including the task page and reward-based battle pass system, while also developing functionalities for the tutorial page, profile page, and mountain progress page. Additionally, I conducted user testing to gather feedback and continuously refine the website, ensuring it remained intuitive and user-friendly through iterative design improvements.",
    initial_user_test:
      "Our initial design for yoUQuest aimed to address the core issue of academic burnout among University of Queensland (UQ) students by providing a simple task management tool. However, after conducting user research and interviews, it became clear that students needed more than just a basic task organizer—they wanted a system that motivated them to stay on track while reducing stress. This feedback encouraged us to incorporate gamification elements and personalization features into the design.\n\nFor example, students highlighted that traditional task management apps felt overwhelming or impersonal, particularly during high-pressure periods like exam preparation. They suggested incorporating a visual reward system, leading to the development of the battle pass feature. By integrating task progress with a gamified reward system, students could visually track their achievements, turning task completion into a motivating and rewarding experience. This insight was pivotal in shaping yoUQuest into a tool that not only helps manage academic responsibilities but also fosters engagement and a sense of accomplishment.",
    user_test_title: "Comprehensive User Insights through Mixed Methods",
    user_test_desc:
      "We conducted bodystorming, think-aloud sessions, and task reconstruction interviews to understand how students interact with yoUQuest. These methods provided valuable insights into user behavior, task management, and areas for improvement in the platform.",
    key_findings: [
      "Task Flow: Users preferred simplified dashboards and visual tools like calendars for managing high-stress periods.",
      "Progress Tracking: Participants enjoyed gamified milestones but requested options for customization and simpler task management.",
      "Navigation: Users found course management intuitive, with suggestions for clearer search cues.",
      "Decision-Making: Students prioritized assignments based on deadlines and appreciated flexibility in planning.",
    ],
    user_img: YoUQuest_user1,
    use_img2: YoUQuest_user2,
    short_img1: YouUQuest_img1,
    short_img2: YouUQuest_img2,
    conclusion:
      "The yoUQuest task management system has been a resounding success, offering an intuitive platform that empowers students to manage their academic workload efficiently while reducing burnout. By incorporating user feedback and leveraging Figma for high-fidelity prototyping, we created a tool that combines structured task tracking, gamified progress features, and practical break timers to support student well-being.\n\nThis initiative has not only enhanced the user experience but also addressed the challenges of academic burnout through thoughtful design. YoUQuest demonstrates the power of user-centered innovation in creating impactful solutions that promote motivation, organization, and stress management for students.",
  },
  {
    id: 3,
    project_category: "Side Projects",
    title: "Aussie Wildlife - Discover, Learn, Protect",
    img: AussieBanner,
    img_2: AussiePoster,

    slider_img: [SlideAussie1, SlideAussie2, SlideAussie3],
    keywords: [
      "Website",
      "Education Website",
      "User Experience",
      "RPG Game Experience",
      "Children Focused",
    ],
    project_sum:
      "Aussie Wildlife is an innovative educational platform designed to inspire curiosity and appreciation for Australia's unique biodiversity. Through immersive, game-based learning, users can embark on virtual explorations of diverse Australian ecosystems, discovering native species and their ecological significance.\n\nThe platform engages children and educators with RPG-style adventures, interactive challenges, and visually rich content, transforming traditional wildlife education into a captivating journey. Aussie Wildlife emphasizes the importance of conservation by highlighting the role each species plays within its environment, fostering a sense of responsibility and connection to nature.\n\nBy blending technology, education, and entertainment, Aussie Wildlife aims to make learning about Australia's wildlife an exciting and memorable experience for all ages.",
    project_highlights: [
      {
        key: "Real-Time Data Integration with ALA API",
        img: real_time,
        description:
          "The website leverages API data from the Atlas of Living Australia (ALA) to provide a distribution map and regional animal photos. Datasets highlight the most frequently observed wildlife locations across Australian states, enabling children to easily identify hotspots for native animals.",
      },
      {
        key: "Engaging RPG Mode with Accessibility Features",
        img: Rpg,
        description:
          "Aussie Wildlife incorporates an RPG-inspired design to captivate children, featuring Non-Playable Characters (NPCs) that narrate stories about native animals. To enhance accessibility, a read-out function provides audio playback of content, catering to diverse literacy levels while boosting engagement. The addition of outfit customization for NPCs adds another layer of interactivity.",
      },
      {
        key: "Interactive Quiz for Knowledge Reinforcement",
        img: Quiz,
        description:
          "At the end of the website, a simple quiz reinforces learning by assessing children's understanding of the presented content in a fun and interactive manner.",
      },
    ],
    video_title: "View More",
    video_link: "https://github.com/ChiaWen-Kao/DECO7180-Aussie_Wildlife",
    problem_statements_title: "The What",
    problem_statements:
      "Aussie Wildlife is a gamified educational platform designed to immerse users in the rich biodiversity of Australia. By combining interactive RPG-style adventures with engaging educational content, it allows students, educators, and nature enthusiasts to explore diverse ecosystems and learn about native fauna in an exciting and meaningful way.\n\nThrough this dynamic platform, users can discover the unique roles Australian wildlife play in their ecosystems, fostering both knowledge and a deeper appreciation for conservation.",
    user_need:
      "Aussie Wildlife is designed for children, educators, and nature enthusiasts who are eager to learn about Australia’s unique biodiversity in an engaging way. These users often seek interactive and visually appealing tools that make exploring nature both fun and educational.\n\nThey need a platform that combines gamified experiences with immersive storytelling to captivate their attention while fostering a deeper understanding of Australia’s ecosystems. By making learning accessible and enjoyable, Aussie Wildlife aims to spark curiosity and inspire a lasting appreciation for the country’s native fauna.",
    my_role:
      "In the Aussie Wildlife project, I took on key responsibilities, starting with identifying the target audience and crafting detailed user personas, scenarios, and storyboards. This groundwork ensured our platform was tailored to the needs of children and provided a strong direction for the team. I also contributed to the initial prototyping phase by sketching concepts and gathering feedback to refine our design and website plan.\n\nAs one of the primary developers, I collaborated with my teammate to implement core features, including API integration for dynamic content like kangaroo images and habitat information. I also addressed feedback by implementing a read-aloud function, enhancing accessibility for children who preferred auditory learning. Additionally, I focused on improving interactivity through features like kangaroo customization and map exploration, ensuring the final product was both engaging and educational. My efforts helped align the project with our goals and the needs of our target audience.",
    initial_user_test:
      "Our early design concept for AussieWildlife sought to create a fun and interactive educational platform to promote an appreciation for Australian wildlife among children. While the initial sketches and paper prototype focused on simple map interactions and species information, user feedback revealed that young users desired a more engaging and playful experience that would allow for exploration and learning through interaction.\n\nFor instance, early testers found static content delivery (e.g., images and text) insufficiently immersive. This feedback led us to integrate gamification elements, such as a customizable kangaroo character and an interactive map with flag icons that link to species-specific information. Additionally, we decided to incorporate a quiz feature, enabling children to test their knowledge and reinforce what they learned. This insight was instrumental in transforming AussieWildlife into an engaging platform tailored to children's learning preferences.",
    user_test_title:
      "Iterative Refinement Through Prototyping and User Feedback",
    user_test_desc:
      "We employed mixed methods, including paper prototyping, digital prototype evaluations, and feedback sessions with peers and tutors, to gather insights into user preferences and interaction patterns. These methods helped us iteratively refine the platform's design, ensuring it met the needs of our target audience.",
    key_findings: [
      "Interactivity and Engagement: Users emphasized the importance of interactive features, such as the map page with clickable flags and a customizable kangaroo character, to make learning enjoyable.",
      "Educational Content: Children and testers highlighted the need for a read-aloud feature to aid younger users who may struggle with reading.",
      "Navigation and Design: Testers appreciated the clean and intuitive layout but suggested smoother transitions between pages, which we addressed in the digital prototype phase.",
      "Gamification Appeal: The kangaroo customization feature and the quiz were praised for their ability to make learning playful and memorable, encouraging return visits to the website.",
    ],
    user_img: InsyncAnimation2,
    use_img2: YoUQuest_user2,
    short_img1: Aussie_short1,
    short_img2: Aussie_short2,
    conclusion:
      "Working on the Aussie Wildlife project has been an incredible journey of creativity, collaboration, and innovation. From defining our target audience to implementing engaging features like interactive maps, gamified learning, and a read-aloud function, we aimed to create an educational platform that makes learning about Australia's wildlife fun and accessible for children.\n\nThe challenges—like mastering new tools, overcoming technical hurdles, and ensuring the design resonated with our young audience—pushed us to refine our skills and problem-solve effectively. The positive feedback from tutors, classmates, and testing participants validated our efforts and reinforced the project's impact.\n\nSeeing the final prototype come to life, complete with interactive elements and thoughtful educational design, has been immensely rewarding. This experience has deepened my understanding of user-centered design and strengthened my passion for creating digital solutions that educate, engage, and inspire.",
  },
];

const textVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

const ProjectDetail = () => {
  const location = useLocation();
  const ref = useRef(null);
  const { id } = useParams(); // Access the id from the URL
  const { item } = location.state || {}; // Get item data from location state

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, [id]);

  // Helper function to find the item by ID if location.state is not available
  const getItemById = (id) => {
    return items.find((item) => item.id === parseInt(id));
  };

  // Use either location.state data or find the item by ID
  const projectItem = item || getItemById(id);

  if (!projectItem) return <div>No data available for project {id}.</div>;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: projectItem.img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.user_img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.use_img2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.short_img1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: projectItem.short_img2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const keyfeatureOptions = (img) => ({
    loop: true,
    autoplay: true,
    animationData: img,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  //animation for scrolling
  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const isSVG =
    typeof projectItem.img === "string" && projectItem.img.endsWith(".svg");

  const isshort1SVG =
    typeof projectItem.short_img1 === "string" &&
    projectItem.short_img1.endsWith(".svg");
  const isshort2SVG =
    typeof projectItem.short_img2 === "string" &&
    projectItem.short_img2.endsWith(".svg");
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 overflow-hidden"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left sm:text-left"
      >
        {projectItem.title}
      </motion.h1>
      <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center">
        {isSVG ? (
          <img
            src={projectItem.img}
            alt={projectItem.title}
            className="w-full sm:w-2/3 lg:w-1/2 h-auto object-cover rounded-lg"
          />
        ) : (
          <Lottie
            options={defaultOptions}
            className="w-full sm:w-2/3 lg:w-1/2 min-h-[300px] sm:min-h-[250px] lg:h-auto object-cover rounded-lg"
          />
        )}
      </div>

      <Marquee
        className="absolute bottom-0 left-0 "
        keywords={projectItem.keywords}
      />

      {/* Roles Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-4 sm:mx-6 lg:mx-8 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {Roles.filter((role) => role.id === parseInt(id)).map((roleData) => (
          <React.Fragment key={roleData.id}>
            {/* MY ROLE Section */}
            <div>
              <h5 className="text-lg sm:text-1xl lg:text-2xl">
                {roleData.role}
              </h5>
              <div className="flex-col mt-4 space-y-2">
                {roleData.role_content.map((content, index) => (
                  <p
                    className="text-des font-light text-base sm:text-lg lg:text-xl"
                    key={`role-${index}`}
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>

            {/* TEAM Section */}
            <div>
              <h5 className="text-lg sm:text-1xl lg:text-2xl">
                {roleData.team}
              </h5>
              <div className="flex-col mt-4 space-y-2">
                {roleData.team_content.map((content, index) => (
                  <p
                    className="text-des font-light text-base sm:text-lg lg:text-xl"
                    key={`team-${index}`}
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>

            {/* YEAR Section */}
            <div>
              <h5 className="text-lg sm:text-1xl lg:text-2xl">
                {roleData.year}
              </h5>
              <div className="flex-col mt-4 space-y-2">
                {roleData.year_content.map((content, index) => (
                  <p
                    className="text-des font-light text-base sm:text-lg lg:text-xl"
                    key={`year-${index}`}
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>

            {/* TOOLS Section */}
            <div>
              <h5 className="text-lg sm:text-1xl lg:text-2xl">
                {roleData.title}
              </h5>
              <div className="flex-col mt-4 space-y-2">
                {roleData.content.map((content, index) => (
                  <p
                    className="text-des font-light text-base sm:text-lg lg:text-xl"
                    key={`tool-${index}`}
                  >
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Project Summary Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4 sm:mx-6 lg:mx-8 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h5 className="text-2xl sm:text-3xl lg:text-4xl">Project Summary</h5>
        <div className="space-y-4">
          {projectItem.project_sum.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-des font-light text-base sm:text-lg lg:text-xl"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex space-x-4 items-center mt-6 sm:mt-8 lg:mt-10">
            <a
              href={projectItem.video_link}
              target="_blank"
              className="hover:cursor-pointer space-x-4 text-white text-lg sm:text-xl lg:text-2xl"
            >
              {projectItem.video_title}
            </a>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <div className="flex rounded-lg items-center justify-center mt-6 sm:mt-8 lg:mt-10">
        <img
          src={projectItem.img_2}
          alt=""
          className="w-full sm:w-3/4 lg:w-2/3 h-auto rounded-lg"
        />
      </div>

      {/* Spacer */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]"></div>

      {/* Problem Statements Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4 sm:mx-6 lg:mx-8 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h5 className="text-2xl sm:text-3xl lg:text-4xl">
          {projectItem.problem_statements_title}
        </h5>
        <p className="text-des font-light text-base sm:text-lg lg:text-xl">
          {projectItem.problem_statements}
        </p>
      </div>

      {/* Users And Need Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4 sm:mx-6 lg:mx-8 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10">
        <h5 className="text-2xl sm:text-3xl lg:text-4xl">Users And Need</h5>
        <div className="space-y-4">
          {projectItem.user_need.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-des font-light text-base sm:text-lg lg:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* My Role Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4 sm:mx-6 lg:mx-8 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h5 className="text-2xl sm:text-3xl lg:text-4xl">My Role</h5>
        <div className="space-y-4">
          {projectItem.my_role.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-des font-light text-base sm:text-lg lg:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-6 sm:mt-8 lg:mt-10">
        <Slider keywords={projectItem.slider_img} />
      </div>

      {/* Spacer */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]"></div>

      {/* Key Features Section */}
      <div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mx-4 sm:mx-6 lg:mx-8">
          Key Features
        </h2>
        {projectItem.project_highlights.map((highlight) => (
          <div
            key={highlight.key}
            className="flex flex-col p-4 items-center mt-6 sm:mt-8 lg:mt-10"
          >
            <h4 className="font-semibold items-center justify-center text-gray-300 text-xl sm:text-2xl lg:text-3xl">
              {highlight.key}
            </h4>
            <div className="w-full lg:w-2/3 mt-4">
              <p className="text-des font-light text-base sm:text-lg lg:text-xl text-center lg:text-left">
                {highlight.description}
              </p>
            </div>
            <div className="w-full sm:w-3/4 lg:w-1/2 mt-6 sm:mt-8 lg:mt-10">
              <Lottie
                options={keyfeatureOptions(highlight.img)}
                style={{
                  height: "100%",
                  borderRadius: "0.5rem",
                }}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]"></div>

      {/* Feedback Section */}
      <div className="mt-6 sm:mt-8 lg:mt-10 mx-4 sm:mx-6 lg:mx-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl">
          Feedback Are Everywhere
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 sm:mt-8 lg:mt-10 gap-6 sm:gap-8 lg:gap-10">
          {/* 文字區域，桌面尺寸放在左邊 */}
          <div className="space-y-4">
            {projectItem.initial_user_test
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-des font-light text-base sm:text-lg lg:text-xl"
                >
                  {paragraph}
                </p>
              ))}
          </div>
          {/* Lottie 動畫區域，桌面尺寸放在右邊 */}
          <div className="flex justify-center items-center">
            <Lottie
              options={defaultOptions2}
              className="relative w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]"></div>

      {/* User Evaluation & Test Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl">
          User Evaluation & User Test
        </h2>
        <h5 className="mt-4 sm:mt-6 lg:mt-8 text-xl sm:text-2xl lg:text-3xl">
          {projectItem.user_test_title}
        </h5>
        <p className="text-des font-light text-base sm:text-lg lg:text-xl mt-4">
          {projectItem.user_test_desc}
        </p>
        <div className="mt-6 sm:mt-8 lg:mt-10">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl">Key Findings</h3>
          <div className="flex flex-col md:flex-row mt-6 sm:mt-8 lg:mt-10 gap-6 sm:gap-8 lg:gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <Lottie
                options={defaultOptions3}
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <ul style={{ paddingLeft: "20px" }}>
                {projectItem.key_findings.map((highlight, index) => {
                  const parts = highlight.split(":");
                  const boldText = parts[0];
                  const restText = parts[1] ? parts[1] : "";
                  return (
                    <li
                      key={index}
                      className="flex p-1 items-center text-des font-light text-base sm:text-lg lg:text-xl"
                    >
                      <FontAwesomeIcon icon={faCircle} className="fa-2xs" />
                      <span className="ml-5">
                        <strong className="text-white">{boldText}</strong>
                        {restText && `: ${restText}`}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]"></div>

      {/* Short Images Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
          <div className="w-full sm:w-1/2">
            {isshort1SVG ? (
              <img
                src={projectItem.short_img1}
                alt=""
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg"
              />
            ) : (
              <Lottie
                options={defaultOptions4}
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg"
              />
            )}
          </div>
          <div className="w-full sm:w-1/2">
            {isshort2SVG ? (
              <img
                src={projectItem.short_img2}
                alt=""
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg"
              />
            ) : (
              <Lottie
                options={defaultOptions5}
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 mt-6 sm:mt-8 lg:mt-10">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl">Conclusion</h3>
        <div className="space-y-4 mt-4">
          {projectItem.conclusion.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-des font-light text-base sm:text-lg lg:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]"></div>

      {/* Next Project Button */}
      <div className="flex justify-end items-end mx-4 sm:mx-6 lg:mx-8 mt-6 sm:mt-8 lg:mt-10">
        <motion.div
          className="rounded-full"
          whileHover={{
            scaleX: 1.1,
            transition: { duration: 0.8 },
          }}
          style={{ backgroundColor: "#333338" }}
        >
          <NextProjectButton />
        </motion.div>
      </div>

      <div className="" style={{ height: "60vh" }}></div>
    </div>
  );
};

export default ProjectDetail;
