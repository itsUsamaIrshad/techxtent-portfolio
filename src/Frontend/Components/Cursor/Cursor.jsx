import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <>
      <motion.div
        className=" fixed w-[50px] h-[50px] rounded-full border-[2px] border-solid border-[#2ec4b6] z-[999] sm:block hidden"
        animate={{ x: position.x + 10, y: position.y + 10 }}
      ></motion.div>
    </>
  );
};

export default Cursor;
