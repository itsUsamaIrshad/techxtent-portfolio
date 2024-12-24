import React from "react";

const Loader = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-black flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img src="/loader.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Loader;
