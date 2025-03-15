import React from 'react';
import Jason from "../assets/img/Jason 1.svg"; // 確保路徑正確

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* 文字區域 */}
        <div className="flex-1 text-left md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            I’m dedicated to designing exceptional UI/UX and front-end solutions that blend beauty with functionality, enhancing lives with every interaction.
          </h1>
        </div>

        {/* 圖片區域 */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Jason}
            alt="Jason Illustration"
            className="w-2/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;