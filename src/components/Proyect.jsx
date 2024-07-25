import React from "react";
import { useTranslation } from "react-i18next";


export default function Proyect({
  title,
  img,
  date,
  description,
  tecnologies,
  deploy,
  repo,
  rol = "Front end Developer",
}) {
  const [t, i18n] = useTranslation("global")

  const hadleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <div className="flex flex-col h-full my-6 lg:flex-row">
        <img
          className="mx-6 my-auto lg:max-h-80"
          src={img}
          alt="personal-proyect"
        />
        <span className="lg:h-[360px] lg:w-2 lg:my-auto lg:bg-light_structure lg:dark:bg-structure transition-all duration-700"></span>
        <div className="flex flex-col items-start justify-start h-full text-justify">
          <h1 className="text-3xl font-bold mb-4 mt-0 mx-6 uppercase pt-4">
            {title}
            <p className="text-light_title dark:text-title text-xs border-b-4 border-light_structure dark:border-structure transition-all duration-700">
              {t("proyect.date")}: {date} / {t("proyect.role")}: {rol}
            </p>
          </h1>
          <div className="mx-6 text-base transition-all font-semibold">
            <p>{description}</p>
          </div>
          <div className="mx-6 text-sm">
            <p className="text-light_title dark:text-title text-xs font-bold mt-4 mb-1 uppercase transition-all duration-700">
              {t("proyect.technology")}:
            </p>
            <div className="flex flex-row flex-wrap font-semibold py-1 border-b-4 border-t-4 border-light_structure dark:border-structure">
              {tecnologies.map((tec) => (
                <Tecnology name={tec} />
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center mx-6 text-sm">
            <div className="my-8">
              <a
                href={deploy}
                target="_blank"
                rel="noreferrer noopener"
                className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">{t("proyect.visit")}</span>
              </a>
            </div>
            <div className="my-8">
              <a
                href={repo}
                target="_blank"
                rel="noreferrer noopener"
                className="mx-2 py-3 font-bold text-black group relative px-4 transition-all duration-700 lg:px-6"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">{t("proyect.repo")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="w-4/5 h-1 my-4 bg-light_structure dark:bg-structure transition-all duration-700"></span>
    </>
  );
}

function Tecnology({ name }) {
  return (
    <span className="border rounded-sm border-light_subtitle dark:border-subtitle px-2 py-[2px] m-1 transition-all">
      {name}
    </span>
  );
}
