import React, { useContext } from "react";
import { Link } from "react-scroll";
import { RiCodeSLine, RiCodeSSlashLine } from "react-icons/ri";
import { ThemeContext } from "./themeContext";
import { useTranslation } from "react-i18next";


const Hero = () => {
  const [t, i18n] = useTranslation("global")

  const hadleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div
      name="home"
      className="w-full h-full py-36 bg-light_background dark:bg-background text-light_text dark:text-text lg:h-screen transition-all duration-700"
    >
      <div className="mx-auto my-6 px-6 flex flex-col h-full pl-16 justify-center " style={{maxWidth:'90em'}}>
        <span className="lg:relative max-w-[36px] text-4xl text-light_subtitle dark:text-subtitle my-4 transition-all duration-700">
          <RiCodeSLine color={theme === "dark" ? "white" : "black"} />
        </span>
        <div className="lg:flex flex-row">
          <div>
            <p className="text-light_title dark:text-title text-xl lg:text-right transition-all duration-700">
              {t("hero.hi")}
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold lg:text-right">
              Luca Ventura
            </h1>
            <h2 className="text-light_title dark:text-title my-2 font-bold sm:text-5xl lg:text-right transition-all duration-700">
              {t("hero.front")}
            </h2>
          </div>
          <span className="h-full w-2 mx-4 bg-light_structure dark:bg-structure transition-all duration-700"></span>
          <div>
            <p className="py-6 max-w-2xl text-justify font-semibold">
              {t("hero.specs")}
            </p>
            <div className="my-4">
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                duration={1500}
                className="relative mx-1 px-8 py-3 font-bold text-black group cursor-pointer transition-all duration-700"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">{t("hero.view")}</span>
              </Link>
            </div>
          </div>
        </div>
        <span
          className="lg:relative max-w-[36px] text-4xl my-4 text-light_subtitle dark:text-subtitle left-[96.5%] transition-all duration-700"
          style={{ marginLeft: "-50px" }}
        >
          <RiCodeSSlashLine color={theme === "dark" ? "white" : "black"} />
        </span>
      </div>
    </div>
  );
};

export default Hero;
