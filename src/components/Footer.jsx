import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

function Footer() {
  return (
    <div name="footer" className="w-full bg-light_background dark:bg-background lg:hidden transition-all duration-700">
      <div className="max-w-6xl mx-auto flex flex-row justify-center items-center w-full max-h-10 py-8 text-3xl border-t-4 border-light_structure dark:border-structure text-light_text dark:text-text transition-all duration-700">
        <a
          href="https://www.linkedin.com/in/luk444/"
          className=" px-2"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/luk444" className=" px-2">
          <AiOutlineGithub />
        </a>
        <a href="mailto:lucaventura54@gmail.com" className=" px-2">
          <AiOutlineMail />
        </a>
        <span className="h-12 w-1 mx-2 bg-light_structure dark:bg-structure transition-all duration-700"></span>
        <span className="text-sm font-bold">©2022 Luca Ventura</span>
      </div>
    </div>
  );
}

export default Footer;
