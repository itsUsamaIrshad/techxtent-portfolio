import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link, useLocation , NavLink } from "react-router-dom";
import { NavbarContext } from "../../../Context/NavbarContext";

const Header = () => {
  // const [transparent, settransparent] = useState("header");
  const [active, setActive] = useState("navBar");

  const { activePath, getActiveClass, handleNavigation } =
    useContext(NavbarContext);

  // const addBg = () => {
  //   if (window.scrollY >= 10) {
  //     settransparent("header activeHeader");
  //   } else {
  //     settransparent("header");
  //   }
  // };
  // window.addEventListener("scroll", addBg);

  const toggleBar = () => {
    if (active === "navBar") {
      setActive("navBar activeNavbar");
    } else {
      setActive("navBar");
    }
  };

  return (
    <>
      <div className="navbar-section">
        <div className="header">
          <div className="logoDiv p-1 ">
            <a href="#" className="logo">
              <h1 className="flex">
                <img
                  src="/logo.png"
                  className="icon"
                  alt="Logo"
                />
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem relative" onClick={toggleBar}>
                <Link
                  to="/"
                  className={`group ${getActiveClass("/")}`}
                  onClick={() => handleNavigation("/")}
                >
                  Home
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bgColor transition-all duration-500 ${
                      activePath === "/" ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              </li>
              <li className="navItem relative" onClick={toggleBar}>
                <Link
                  to="/about"
                  className={`group ${getActiveClass("/about")}`}
                  onClick={() => handleNavigation("/about")}
                >
                  About
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bgColor transition-all duration-500 ${
                      activePath === "/about" ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              </li>

              <li className="navItem relative" onClick={toggleBar}>
                <Link
                  to="/service"
                  className={`group ${getActiveClass("/service")}`}
                  onClick={() => handleNavigation("/service")}
                >
                  Services
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bgColor transition-all duration-500 ${
                      activePath === "/service" ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              </li>

              <li className="navItem relative" onClick={toggleBar}>
                <Link
                  to="/project"
                  className={`group ${getActiveClass("/project")}`}
                  onClick={() => handleNavigation("/project")}
                >
                  Project
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bgColor transition-all duration-500 ${
                      activePath === "/project" ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              </li>

              <li className="navItem relative" onClick={toggleBar}>
                <Link
                  to="/contact"
                  className={`group ${getActiveClass("/contact")}`}
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bgColor transition-all duration-500 ${
                      activePath === "/contact" ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              </li>
            </ul>
            <div className="closeNavbar">
              <AiFillCloseCircle className="icon" onClick={toggleBar} />
            </div>
          </div>

          <div className="headerBtns">
            <button className="contactBtn">
              <a href="mailto:sales@techxtents.com">Join Us</a>
            </button>
          </div>
          <div className="toggleNavbar">
            <TbGridDots className="icon" onClick={toggleBar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
