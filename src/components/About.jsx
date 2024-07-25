import React from "react";
import { Link } from "react-scroll";
import ProfilePic from "../assets/profile.png";
import Technologies from "./Technologies";
import { ID_RESUME } from "../data/resume";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full py-36 bg-light_background dark:bg-background text-light_text dark:text-text transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-6xl w-full px-6">
          <div className="pb-10">
            <p className="text-4xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
              01.About
            </p>
          </div>
        </div>
        <div className="h-auto w-full items-center justify-around max-w-5xl grid grid-cols-2 px-6 lg:max-w-5xl lg:w-full lg:px-4 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center">
            <div className="relative mx-auto p-2 group transition-all duration-700 lg:p-2">
              <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
              <img
                src={ProfilePic}
                alt="Profile.jpg"
                className="relative max-h-64 transition-all duration-700"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="my-8">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
                className="relative cursor-pointer mx-2 py-3 font-bold text-black group px-4 transition-all duration-700 lg:px-6"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">Contact me!</span>
              </Link>
            </div>
            <div className="my-8">
              <a
                href={`https://drive.google.com/uc?export=download&id=${ID_RESUME}`}
                download
                className="mx-2 py-3 font-bold text-black group relative px-8 transition-all duration-700 lg:px-10"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">Resume ↓</span>
              </a>
            </div>
          </div>

          <div className="text-justify col-span-2 py-4 font-semibold lg:row-start-1 lg:col-start-2">
            <p>
            Hello! I'm Luca :) FrontEnd Developer, enthusiastic, with the ability to contribute new and innovative ideas. I have skills to develop modular programming projects. I also consider having the versatility necessary to work in a team and I am always willing to listen and learn from other people's points of view. I really want to grow professionally and achieve all my goals.
            </p>
          </div>

          <div className="text-justify col-span-2 py-4 font-semibold lg:row-start-2 lg:col-start-2">
            <p>
            Worked as a developer for about 3 years, mainly focusing on Frontend development, although I also have experience and perform well on the Backend with some technologies. My experience includes roles as a Full Stack developer, which has allowed me to improve both my technical skills and my interpersonal skills. I learned to be responsible and communicate effectively with clients, since all my jobs have been freelance. These experiences have taught me a lot about web and application development, REST services, API development, client-server architecture, protocols, among other important aspects.
            </p>
          </div>

          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default About;
