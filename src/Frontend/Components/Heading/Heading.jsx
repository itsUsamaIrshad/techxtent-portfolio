import React from "react";

const Heading = ({ text }) => {
  return (
    <>
      <h2
        className={`text-center font-bold text-4xl text-black mt-[3rem]  relative after:content-[''] after:block after:w-[15%] after:h-1  after:mx-auto after:mt-2 after:bg-[#2ec4b6] `}
      >
        {text}
      </h2>
    </>
  );
};

export default Heading;
