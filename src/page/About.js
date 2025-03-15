import React from "react";
import Jason from "../assets/img/Jason 1.svg"; // 確保路徑正確
import "./About.scss";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
      {/* 上方區域：標題和圖片 */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* 文字區域 */}
        <div className="flex-1 text-left md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ">
            I’m dedicated to designing exceptional UI/UX and front-end solutions
            that blend beauty with functionality, enhancing lives with every
            interaction.
          </h1>
        </div>

        {/* 圖片區域 */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Jason}
            alt="Jason Illustration"
            className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto"
          />
        </div>
      </div>

      {/* 下方區域：新內容 */}
      <div className="mt-10 sm:mt-12 lg:mt-16">
        {/* 在桌面尺寸使用 grid 佈局，左邊固定，右邊滾動；在小尺寸垂直堆疊 */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
          {/* 左邊：h1，桌面尺寸時固定 */}
          <div className="lg:col-span-1 lg:sticky lg:top-10">
            <h1 className="text-2xl text-des sm:text-3xl lg:text-4xl font-semibold text-left lg:text-left mb-6 sm:mb-8 lg:mb-0 ">
              With nearly a few years under my belt, I’ve been busy studying
              UI/UX skills and collaborating with teams, shaping digital
              products, and designing immersive experiences that truly connect.
            </h1>
          </div>

          {/* 右邊：p 內容，桌面尺寸可滾動 */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8 font-extralight">
            <p className="text-[22px] text-des font-light leading-relaxed text-left lg:text-left ">
              I was born and raised in 🇹🇼 Taiwan (Chinese Taipei), where my
              journey kicked off as an MIS (Management Information Systems)
              student. Back then, I thought my future was all about managing
              data and systems—until I stumbled upon front-end development and
              UI/UX design. Suddenly, it clicked. I fell head over heels for
              crafting beautiful, user-friendly websites and apps that not only
              looked stunning but also made life easier for people. That’s where
              my real passion took root.
            </p>
            <p className="text-[22px] text-des font-light leading-relaxed text-left lg:text-left ">
              The big turning point came when I packed my bags and headed to 🇦🇺
              Australia, ready to open a new chapter and challenge myself like
              never before. Leaving Taiwan was a leap of faith, but it opened
              doors to a world of possibilities. I dove into front-end and UI/UX
              with everything I had, creating digital experiences that people
              could truly connect with. What lights me up the most?
              Collaborating with others—teaming up on projects brings a rush of
              achievement I can’t get enough of. Seeing an idea transform into
              reality with a group effort feels like pure magic.
            </p>
            <p className="text-[22px] text-des font-light leading-relaxed text-left lg:text-left">
              In my downtime, you’ll catch me on the tennis court, swinging my
              racket, or chatting with people from all walks of life. Those
              conversations fuel my creativity and remind me that design is all
              about understanding people’s needs. Whether I’m building a sleek
              website, sketching a user-friendly interface, or brainstorming
              with a teammate, I’m driven by one goal: to create something
              beautiful, functional, and meaningful that leaves a mark.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2>Experience</h2>
        <div className=" grid grid-cols-3 mt-5">
          <div className="col-span-1">Dec 2024 - March 2025</div>
          <div className="col-span-1">
            <h3>ACROSSPORTS LTD.</h3>
            <p>Taipei, Taiwan</p>
            <p>Web Developer</p>
          </div>
          <div className="col-span-1">
            <p>
              At ACROSSPORTS, Building the website to track shoes product
              performance across multiple e-commerce platformsand responsible
              for the user interface design, ensuring the dashboard was
              intuitive and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
