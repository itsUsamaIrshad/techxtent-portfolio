import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext();

const NavbarContextProvider = (props) => {


 
  const [countOn, setCountOn] = useState(false);

  const [project, setProject] = useState(
    parseInt(localStorage.getItem("project") || 1)
  );

  

  const location = useLocation();

  const [activePath, setActivePath] = useState(location.pathname);
  const [bgButton , setBgButton] = useState('mobile')


const handleBgBtn = (path) =>
{
  setBgButton(path)
}

  const handleNavigation = (path) => {
    setActivePath(path); // Update active path state
  };

  const getActiveClass = (path) => {
    return activePath === path ? " font-semibold txtColor" : "text-black";
  };

  return (
    <NavbarContext.Provider
      value={{
        location,
       
        getActiveClass,
        handleNavigation,
        countOn,
        setCountOn,
        project,
        setProject,
        handleBgBtn,
        bgButton
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
