import React, {useContext} from "react";
import { BsMoon, BsSun } from "react-icons/bs"
import { ThemeContext } from "./themeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-light_text dark:text-text shadow-none p-2 focus:outline-none text-4xl lg:text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <BsMoon/>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-light_text dark:text-text focus:outline-none shadow-none p-2 text-4xl lg:text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <BsSun/>
        </button>
      )}
    </div>
  );
};

export default Toggle;
