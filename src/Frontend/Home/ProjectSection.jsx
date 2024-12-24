import React, { useState, useContext } from "react";
import CountUp from "react-countup";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { MdAppSettingsAlt } from "react-icons/md";
import ScrollTrigger from "react-scroll-trigger";
import { NavbarContext } from "../../Context/NavbarContext";
import { TiDocumentText } from "react-icons/ti";
import Heading from "../Components/Heading/Heading";
const ProjectSection = () => {
  const cardsData = [
    {
      id: 1,
      icon: <TiDocumentText />,
      desc: "Years of Experience in Industry",
      count: 7,
    },
    {
      id: 2,
      icon: <BsFillCalendarCheckFill />,
      desc: "Projects Successfully Completed",
      count: 500,
    },
    {
      id: 3,
      icon: <MdAppSettingsAlt />,
      desc: "Mobile Application Developed",
      count: 105,
    },
    {
      id: 4,
      icon: <GrEmoji />,
      desc: "Satisfied Clients Worldwide",
      count: 150,
    },
  ];

  const { countOn, setCountOn } = useContext(NavbarContext);

  return (
    <>
      <div
        className=" px-12   min-h-[100vh]  mt-[5rem] space-y-10"
        id="scroll-Btn"
      >
        <Heading text="About TechXtent" />
        <div className=" grid xl:grid-cols-[50%_auto] gap-4 place-items-center ">
          <div>
            <h1 className="font-semibold text-2xl leading-relaxed">
              TechXtent: A Leading Web & Mobile App Development Company in
              Faisalabad, Pakistan
            </h1>
            <h3 className=" text-xl font-bold txtColor mt-3">
              Your One-Stop Solution for Websites, Mobile Apps, and Custom
              Software.
            </h3>
            <p className=" italic mt-3 text-lg">
              With 7+ years of experience, TechXtent transforms ideas into
              reality using cutting-edge technology and unmatched expertise.
            </p>
          </div>
          <div className=" w-[100%]  flex  justify-center items-center  gap-4 flex-wrap">
            {cardsData.map((data, index) => {
              return (
                <>
                  <div
                    className="card max-w-[100%] w-[300px] h-[200px] bg-white shadow-card flex justify-center flex-col gap-2 rounded-lg"
                    key={index}
                  >
                    <div className="txtColor text-6xl">{data.icon}</div>
                    <ScrollTrigger onEnter={() => setCountOn(true)}>
                      <h1 className=" text-3xl font-extrabold text-center">
                        {countOn && (
                          <CountUp
                            start={0}
                            end={data.count}
                            duration={2}
                            delay={0}
                          />
                        )}
                        +
                      </h1>
                    </ScrollTrigger>
                    <h2 className=" text-xl font-medium text-center">
                      {data.desc}
                    </h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
