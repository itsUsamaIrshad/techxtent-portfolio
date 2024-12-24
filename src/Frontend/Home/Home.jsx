import React, { useContext, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../Context/NavbarContext";
const Home = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const scrollBtns = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const { handleNavigation, getActiveClass } = useContext(NavbarContext);

  return (
    <>
      <div className="hero h-[100vh] w-full relative overflow-hidden bg-cover">
        <div className="wrapper w-full m-auto bg-red-500">
          <motion.div
            className="w-full mt-[4rem]  xs:mt-[5rem]   h-[100vh]  flex justify-center items-center flex-col"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={textVariants}
              className=" md:p-3  text-[20px] xs:text-[25px] sm:text-[30px] lg:text-[35px]  text-transparent font-extrabold uppercase sm:tracking-[5px] text-center"
            >
              Expand Your Online Reach with U
            </motion.h2>
            <motion.h1
              variants={textVariants}
              className="text-[#2ec4b6] text-center font-bold  text-[26px] xs:text-[30px] sm:text-[40px] lg:text-[50px]"
            >
              Software Development Company
            </motion.h1>
            <h2 className=" md:p-3  text-[20px] xs:text-[25px] sm:text-[30px] lg:text-[35px]  text-transparent font-extrabold uppercase sm:tracking-[5px] text-center">
              in Faisalabad, Pakistan
            </h2>
            <motion.div
              className="text-center mt-[1rem] mb-[1rem]    w-full flex flex-wrap sm:flex-row items-center justify-center gap-4"
              variants={textVariants}
            >
              <motion.button
                variants={textVariants}
                className=" px-4 py-2 xs:px-6 xs:py-3 sm:px-6 sm:py-4 border-0 outline-0 rounded-[30px] bg-[#2ec4b6] text-white mr-2 sm:mr-0 cursor-pointer font-medium"
              >
                <Link
                  to="/project"
                  className={`${getActiveClass("/project")}`}
                  onClick={() => handleNavigation("/project")}
                >
                  Latest Work
                </Link>
              </motion.button>
              <motion.button
                variants={textVariants}
                className="px-4 py-2 xs:px-6 xs:py-3 sm:px-6 sm:py-4 border-0 outline-0 rounded-[30px] bg-[#2ec4b6] text-white mr-2 sm:mr-0 cursor-pointer font-medium"
              >
                <Link
                  to="/contact"
                  className={`${getActiveClass("/project")}`}
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact US
                </Link>
              </motion.button>
            </motion.div>

            <a href="#scroll-Btn">
              <motion.img
                src="./scroll.svg"
                alt="scroll-icon"
                className=" w-[45px] h-[45px]  sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]"
                variants={scrollBtns}
                initial="initial"
                animate="animate"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
