import React from "react";
import { motion } from "framer-motion";
const Whatsapp = () => {
  const alertBtns = {
    initial: {
      scale: 0.9,
    },
    animate: {
      scale: 1.1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <>
      <a
        href="https://wa.me/923157602505?text=Hey%20I%20am%20interested%20in%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
        // Security enhancement for external links
      >
        <motion.div
          className=" fixed  xs:bottom-[40px] bottom-[10px] right-[1rem] z-10"
          variants={alertBtns}
          initial="initial"
          animate="animate"
        >
          <img
            src="./whatsapp.svg"
            alt="WhatsApp icon"
            className=" w-[40px]  sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
          />
        </motion.div>
      </a>
    </>
  );
};

export default Whatsapp;
