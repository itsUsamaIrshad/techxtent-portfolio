// import React, { useState } from "react";
// import Loader from "../Frontend/Loader";

// const LoaderRoute = (props) => {
//   const { Component } = props;

//   const [loader, setLoader] = useState(false);

//   if (!loader) return <Loader />;

//   return <Component />;
// };

// export default LoaderRoute;

import React, { useState, useEffect } from "react";
import Loader from "../Frontend/Loader";

const LoaderRoute = ({ component: Component }) => {
  const [loader, setLoader] = useState(true); // Start with `true` to show the loader initially.

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false); // Simulate the loading delay.
    }, 2000); // Adjust time (in milliseconds) as per requirement.

    return () => clearTimeout(timer); // Cleanup the timer on unmount.
  }, []);

  return loader ? <Loader /> : <Component />;
};

export default LoaderRoute;
