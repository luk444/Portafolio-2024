import React from "react";
import Proyect from "./Proyect";
import proyects from "../data/proyects";

function Work() {
  return (
    <div
      name="work"
      className="w-full h-full py-30 bg-light_background dark:bg-background text-light_text dark:text-text transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-6xl w-full px-6">
          <div className="pb-10">
            <p className="text-4xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
              02.Work
            </p>
          </div>
        </div>

        {/* PROYECTOS */}
        <div className="flex flex-col justify-center items-center">
          {proyects.map((proyect) => (
            <Proyect {...proyect} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
