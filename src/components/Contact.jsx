import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const [t, i18n] = useTranslation("global")

  const hadleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      name="contact"
      className="w-full h-full py-36 bg-light_background dark:bg-background transition-all duration-700"
    >
      <form
        method="POST"
        action="https://getform.io/f/apjmzega"
        className="max-w-6xl mx-auto flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-6xl w-full px-6">
          <div className="pb-10">
            <p className="text-4xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
              {t("contact.contac")}
            </p>
          </div>
        </div>
        <div className="max-w-5xl w-full px-6 grid lg:grid-cols-2">
          <input
            required
            type="text"
            placeholder={t("contact.name")}
            name="name"
            className="my-4 mx-6 p-2 border-2 font-semibold placeholder-light_text dark:placeholder-text border-light_structure dark:border-structure focus:border-2 focus:border-light_subtitle focus:dark:border-subtitle focus:outline-none bg-light_structure dark:bg-structure text-light_text dark:text-text transition-all duration-700"
          />
          <input
            required
            type="email"
            placeholder={t("contact.email")}
            name="email"
            className="my-4 mx-6 p-2 border-2 font-semibold placeholder-light_text dark:placeholder-text border-light_structure dark:border-structure focus:border-2 focus:border-light_subtitle focus:dark:border-subtitle focus:outline-none bg-light_structure dark:bg-structure text-light_text dark:text-text transition-all duration-700"
          />
          <input
            required
            type="subject"
            placeholder={t("contact.subject")}
            name="subject"
            autoComplete="off"
            className="my-4 mx-6 p-2 border-2 font-semibold placeholder-light_text dark:placeholder-text border-light_structure dark:border-structure focus:border-2 focus:border-light_subtitle focus:dark:border-subtitle focus:outline-none bg-light_structure dark:bg-structure text-light_text dark:text-text lg:col-span-2 transition-all duration-700"
          />
          <textarea
            required
            name="message"
            placeholder={t("contact.message")}
            cols="30"
            rows="10"
            autoComplete="off"
            className="resize-none my-4 mx-6 p-2  border-2 font-semibold placeholder-light_text dark:placeholder-text border-light_structure dark:border-structure focus:border-2 focus:border-light_subtitle focus:dark:border-subtitle focus:outline-none bg-light_structure dark:bg-structure text-light_text dark:text-text lg:col-span-2 transition-all duration-700"
          ></textarea>
          <div className="my-4 flex items-center justify-center lg:col-span-2">
            <button
              type="submit"
              className=" mx-2  py-3 font-bold text-black group relative px-6 transition-all duration-700"
            >
              <span className="absolute inset-0 w-full h-full transition duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
              <span className="relative">{t("contact.lets")}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
