import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const BottomFooter = () => {
  return (
    <>
      <div className=" w-full bg-gray-200 ">
        <div className="container px-0 sm:px-[3rem] flex justify-center text-center md:justify-between flex-wrap  min-h-[20vh]">
          <div>
            <h1 className="text-sm sm:text-xl">
              Copyright © 2024{" "}
              <span className="txtColor"> TechXtent Solutions Pvt Ltd. </span>
            </h1>
          </div>
          <div className=" flex flex-wrap justify-center gap-4">
            <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
              <FaFacebookF />
            </div>
            <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
              <FaInstagram />
            </div>
            <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
              <FaLinkedin />
            </div>
            <div className="bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
              <FaYoutube />
            </div>
            <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
