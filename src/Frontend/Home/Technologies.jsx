import React, { useState } from "react";
import { GrReactjs } from "react-icons/gr";
import { RiAppleLine } from "react-icons/ri";
import { BsAndroid2 } from "react-icons/bs";
import { SiFlutter } from "react-icons/si";
import {
  FaBootstrap,
  FaHtml5,
  FaAngular,
  FaPhp,
  FaPython,
  FaNodeJs,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { IoLogoVue, IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiMongodb, SiMysql } from "react-icons/si";
import Heading from "../Components/Heading/Heading";
import { motion } from "framer-motion";

const Technologies = () => {
  const [visible, setVisible] = useState(1);

  const categories = [
    {
      id: 1,
      label: "Mobile/IOS",
      icons: [<GrReactjs />, <RiAppleLine />, <BsAndroid2 />, <SiFlutter />],
    },
    {
      id: 2,
      label: "Frontend",
      icons: [
        <FaBootstrap />,
        <FaAngular />,
        <GrReactjs />,
        <FaHtml5 />,
        <IoLogoVue />,
        <SiTypescript />,
      ],
    },
    {
      id: 3,
      label: "Backend",
      icons: [<FaPython />, <FaPhp />, <FaNodeJs />],
    },
    {
      id: 4,
      label: "Database",
      icons: [<SiMongodb />, <SiMysql />, <IoLogoFirebase />],
    },
    {
      id: 5,
      label: "CMS",
      icons: [<FaWordpress />, <FaShopify />],
    },
  ];

  const renderIcons = (icons) =>
    icons.map((icon, i) => (
      <motion.div
        key={i}
        className="p-[1rem] rounded-full shadow-card"
        initial={{
          scale: 0.9,
          backgroundColor: "#2ec4b6",
          color: "#fff",
        }}
        animate={{
          scale: 1.1,
          backgroundColor: "#000",
          color: "#fff",
          transition: {
            scale: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
            backgroundColor: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
            color: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
      >
        {React.cloneElement(icon, {
          className: "text-[3rem] ",
          style: { color: "inherit" },
        })}
      </motion.div>
    ));

  return (
    <div className="min-h-[100vh] w-full mt-[8rem]">
      <Heading text="Technologies" />
      <div className="lg:container px-5">
        {/* Description Section */}
        <div className="grid place-items-center lg:grid-cols-2 mt-[3rem] gap-10">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/coding.png?alt=media&token=2a46187d-3b81-4d1f-bf51-b71ff4f9058e"
              className="w-[500px]"
              alt="Technologies"
            />
          </div>
          <div className="space-y-6">
            <h2>
              At TechXtent, we provide cutting-edge technology solutions
              tailored to meet your business needs. Our expertise spans a wide
              range of advanced technologies, ensuring we deliver personalized
              solutions that drive success.
            </h2>
            <h2>
              With our Cognitive Design approach, we focus on user-centric
              design, intuitive interfaces, and seamless experiences.
            </h2>
            <h2>
              TechXtent is dedicated to delivering innovative IT solutions,
              leveraging the latest technologies to help businesses thrive in
              the digital age.
            </h2>
          </div>
        </div>

        {/* Buttons and Icons Section */}
        <div className="grid lg:grid-cols-2 gap-10 mt-[7rem]">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                className={`  py-2 sm:py-3 pr-10  sm:pr-20 w-[180px] xs:w-[160px] sm:w-[220px] border-2 border-cyan-400 text-cyan-400 outline-0 rounded-3xl font-bold relative overflow-hidden group`}
                onClick={() => setVisible(id)}
              >
               
                <span className={`bgColor -translate-x-full absolute inset-0  transform transition-transform duration-250 group-hover:translate-x-0`}></span>
                <span className="relative z-10 flex gap-2 sm:gap-4 justify-center group-hover:text-white group-hover:ml-2 sm:group-hover:ml-5 duration-500 text-sm sm:text-md ">
                  {label}
                </span>
              </button>
            ))}
          </div>
          <motion.div
            className="flex justify-center flex-wrap place-content-center gap-6"
            initial="initial"
            animate="animate"
          >
            {renderIcons(
              categories.find((category) => category.id === visible)?.icons ||
                []
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
