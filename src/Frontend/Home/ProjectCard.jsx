import React from "react";
import SwiperData from "./SwiperData";
const ProjectCard = () => {
  return (
    <>
      <div className="sm:mt-[10rem]  min-h-[50vh]">
        <div className="mb-[3rem]">
          <h2 className="  text-center font-bold text-4xl relative after:content-[''] after:block after:w-[15%]  after:h-1 after:bg-[#2ec4b6] after:mx-auto after:mt-2">
            Our Projects
          </h2>
        </div>
        <SwiperData />
      </div>
    </>
  );
};

export default ProjectCard;
