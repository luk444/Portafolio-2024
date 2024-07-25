import React from "react";

export default function Skill({ title, src, alt, classname }) {
  return (
    <div className="relative group transition-all">
      <img className={`w-20 max-h-20 mx-auto my-1 ${classname}`} src={src} alt={alt}/>
      <p>{title}</p>
      <span className="absolute -bottom-1 right-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
      <span className="absolute -top-1 left-0 w-0 h-1 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:w-full group-hover:transition-all group-hover:duration-700"></span>
      <span className="absolute -bottom-1 right-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
      <span className="absolute -top-1 left-0 w-1 h-0 bg-light_subtitle dark:bg-subtitle duration-700 group-hover:h-full group-hover:transition-all group-hover:duration-700"></span>
    </div>
  );
}
