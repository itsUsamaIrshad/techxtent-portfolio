import React from "react";
import logo from "../../../assets/logo.png";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
const Footer = () => {
  const pagesLinks = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "/service",
    },
    {
      title: "Projects",
      url: "/project",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  const servicesLinks = [
    {
      title: "Web Development",
    },
    {
      title: "SaaS Apps",
    },
    {
      title: "UX/UI Desinger",
    },
    {
      title: "SEO",
    },
    {
      title: "Digital Marketing",
    },
    {
      title: "Mobile Application",
    },
  ];
  const socialMediaLinks = [
    {
      title: "Facebook",
    },
    {
      title: "Twitter",
    },
    {
      title: "Youtube",
    },
    {
      title: "LinkedIn",
    },
    {
      title: "Dribble",
    },
  ];

  return (
    <>
      <div
        className="w-full h-[100vh] bg-white"
        style={{
          clipPath: "ellipse(60% 50% at 50% 0%)",
        }}
      ></div>
      <div className=" bg-gray-200">
        <div className=" px-0 md:px-[2rem]  -mt-[62vh] ">
          <div className="w-full grid place-items-center  min-h-[100vh] md:grid-cols-2  lg:grid-cols-4  ">
            <div className=" text-black flex justify-center  text-center    z-10 mt-[10rem] lg:mt-0">
              <ul className="space-y-5 space-x-2 flex flex-col justify-center">
                <li>
                  <img src="/logo.png" className="h-[80px]" alt="" />
                </li>
                <li className=" text-sm sm:text-xl">
                  Technology company providing cutting-edge software solutions.
                </li>

                <li className=" flex flex-col md:flex-row gap-4 justify-center md:justify-start text-sm sm:text-xl ">
                  <IoMdPhonePortrait className=" text-3xl" /> +92 41 87 17401
                </li>
                <li className=" flex flex-col md:flex-row gap-3 justify-center md:justify-start text-sm sm:text-xl">
                  <IoMail className=" text-3xl" /> info.textextent@gmail.com
                </li>

                <li className="flex flex-col md:flex-row items-center justify-center md:justify-start text-sm sm:text-xl gap-2">
                  <FaMapMarkerAlt className="text-3xl" />
                  Kohinoor 1 City Faisalabad
                </li>
              </ul>
            </div>
            <FooterLinks title="Pages" links={pagesLinks} />
            <FooterLinks title="Services" links={servicesLinks} />
            <FooterLinks title="Socials" links={socialMediaLinks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
