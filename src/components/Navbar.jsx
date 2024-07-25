import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import PortfolioLogo from "../assets/luca-white-logo.png";
import PortfolioLogoLight from "../assets/luca-dark-logo.png";
import { ThemeContext } from "./themeContext";
import { ID_RESUME } from "../data/resume";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true); // Estado para el idioma

  const handleClick = () => {
    setMenu(!menu);
  };

  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsEnglish(lang === 'en');
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="fixed w-full h-[125px] flex justify-between items-center px-4 bg-light_background dark:bg-background text-light_text dark:text-text text-xl z-50 transition-all duration-700">
      <div>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1500}
        >
          <img
            src={theme === "dark" ? PortfolioLogo : PortfolioLogoLight}
            alt="Logo"
            className="h-[180px] mt-3 cursor-pointer transition-all duration-700"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <label className="inline-flex items-center cursor-pointer me-4">
          <input
            type="checkbox"
            checked={isEnglish}
            onChange={() => handleChangeLanguage(isEnglish ? "es" : "en")}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isEnglish ? "EN" : "ES"}
          </span>
        </label>
      </div>

      <ul className="hidden lg:flex mx-2">
        <li className="mx-4 px-4 items-center">
          <p className="relative group">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1500}
            >
              {t("navbar.home")}
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
          </p>
        </li>
        <li className="mx-4 px-4 items-center">
          <p className="relative group">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1500}
            >
              {t("navbar.about")}
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
          </p>
        </li>
        <li className="mx-4 px-4 items-center">
          <p className="relative group">
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              duration={1500}
            >
              {t("navbar.mywork")}
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
          </p>
        </li>
        <li className="mx-4 px-4 items-center">
          <p className="relative group">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1500}
            >
              {t("navbar.contact")}
            </Link>
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-light_hover dark:bg-hover transition-all duration-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-700"></span>
          </p>
        </li>
      </ul>

      <div onClick={handleClick} className="lg:hidden z-10 text-4xl">
        <button className="relative group">
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-300">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={
                  !menu
                    ? "bg-light_text dark:bg-text h-[2px] w-8 transform transition-all duration-300 origin-left group-focus:-rotate-[0deg]"
                    : "bg-light_text dark:bg-text h-[2px] w-8 transform transition-all duration-300 origin-left group-focus:rotate-[45deg]"
                }
              ></div>
              <div
                className={
                  !menu
                    ? "bg-light_text dark:bg-text h-[2px] w-3/4 transition-all duration-300"
                    : "bg-light_text dark:bg-text h-[2px] w-3/4 rounded transform transition-all duration-300 group-focus:-translate-x-10"
                }
              ></div>
              <div
                className={
                  !menu
                    ? "bg-light_text dark:bg-text h-[2px] w-8 transform transition-all duration-300 origin-left group-focus:rotate-[0deg]"
                    : "bg-light_text dark:bg-text h-[2px] w-8 transform transition-all duration-300 origin-left group-focus:-rotate-[45deg]"
                }
              ></div>
            </div>
          </div>
        </button>
      </div>

      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-light_background dark:bg-background flex flex-col justify-center items-center ease-in-out transition-all duration-700 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="py-6 text-4xl" onClick={handleClick}>
          <span className="text-light_text dark:text-text">Toggle</span> {/* Placeholder for Toggle */}
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1500}
          >
            {t("navbar.home")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1500}
          >
            {t("navbar.about")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            duration={1500}
          >
            {t("navbar.mywork")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
          >
            {t("navbar.contact")}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a
            href={`https://drive.google.com/uc?export=download&id=${ID_RESUME}`}
            download
          >
            {t("navbar.resume")} ↓
          </a>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-2/3 left-1">
        <ul>
          <li className=" w-40 h-16 flex justify-between items-center ml-[-115px] transition-all duration-700 hover:ml-[-5px] relative group">
            <span className="absolute left-0 w-0 h-16 bg-[#0072b1] transition-all duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
            <a
              className="absolute justify-between flex items-center w-full duration-700 group-hover:duration-700 text-white"
              href="https://www.linkedin.com/in/luk444"
            >
              LnkIn
              <AiOutlineLinkedin className="absolute left-[105px] text-4xl text-light_title dark:text-title group-hover:text-white transition-all duration-700 group-hover:duration-700" />
            </a>
            <span className="absolute -right-1 h-0 top-1/2 w-1 bg-[#0072b1] transition-all duration-700 group-hover:h-1/2 group-hover:transition-all group-hover:duration-700"></span>
            <span className="absolute -right-1 h-0 bottom-1/2 w-1 bg-[#0072b1] transition-all duration-700 group-hover:h-1/2 group-hover:transition-all group-hover:duration-700"></span>
          </li>

          <li className=" w-40 h-16 flex justify-between items-center ml-[-115px] transition-all duration-700 hover:ml-[-5px] relative group">
            <span className="absolute left-0 w-0 h-16 bg-[#131212] transition-all duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
            <a
              className="absolute flex items-center w-full duration-700 group-hover:duration-700 group-hover:w-3/4 text-white"
              href="https://github.com/luk444"
            >
              GitHub
              <AiOutlineGithub className="absolute left-[105px] text-4xl text-light_title dark:text-title group-hover:text-white transition-all duration-700 group-hover:duration-700" />
            </a>
            <span className="absolute -right-1 h-0 top-1/2 w-1 bg-[#131212] transition-all duration-700 group-hover:h-1/2 group-hover:transition-all group-hover:duration-700"></span>
            <span className="absolute -right-1 h-0 bottom-1/2 w-1 bg-[#131212] transition-all duration-700 group-hover:h-1/2 group-hover:transition-all group-hover:duration-700"></span>
          </li>

          <li className=" w-40 h-16 flex justify-between items-center ml-[-115px] transition-all duration-700 hover:ml-[-5px] relative group">
            <span className="absolute left-0 w-0 h-16 bg-[#e51a26] transition-all duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
            <a
              className="absolute flex items-center w-full duration-700 group-hover:duration-700 group-hover:w-3/4 text-white"
              href={`mailto:lucaventura54@gmail.com`}
            >
              Mail
              <AiOutlineMail className="absolute left-[105px] text-4xl text-light_title dark:text-title group-hover:text-white transition-all duration-700 group-hover:duration-700" />
            </a>
            <span className="absolute -right-1 h-0 top-1/2 w-1 bg-[#e51a26] transition-all duration-700 group-hover:h-1/2 group-hover:transition-all group-hover:duration-700"></span>
            <span className="absolute -right-1 h-0 bottom-1/2 w-1 bg-[#e51a26] transition-all duration-700 group-hover:h-1/2 group-hover:transition-all group-hover:duration-700"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
