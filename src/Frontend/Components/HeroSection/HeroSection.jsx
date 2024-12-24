import React from "react";
import { motion } from "framer-motion";
const HeroSection = ({ text }) => {
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

  return (
    <>
      <div className="hero h-[70vh] w-full relative overflow-hidden bg-cover">
        <div className="wrapper h-full w-full m-auto">
          <motion.div
            className="w-full mt-[4rem]   xs:mt-[5rem]   h-[60vh] flex justify-center items-center flex-col"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={textVariants}
              className="text-[#2ec4b6] text-center font-bold  text-[26px] xs:text-[30px] sm:text-[40px] lg:text-[60px]"
            >
              {text}
            </motion.h1>
            {/* <motion.p
              variants={textVariants}
              className="text-[#2ec4b6] px-8 text-center font-light  text-[16px] sm:text-[20px] lg:text-[34px]"
            >
              Turning Your Ideas Into Reality
            </motion.p> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
