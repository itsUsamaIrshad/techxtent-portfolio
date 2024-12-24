import React from "react";
import { Link } from "react-router-dom";
const FooterLinks = ({ title, links }) => {
  return (
    <>
      <div className="text-black z-10 flex  justify-center text-center mt-[3rem] md:mt-0">
        <ul className=" space-y-6 ">
          <li className=" text-2xl font-medium">{title}</li>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url} className=" hover:text-[#2ec4b6]">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
