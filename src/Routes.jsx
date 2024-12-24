import React from "react";
import { Routes, Route } from "react-router-dom";
import LoaderRoute from "./Components/LoaderRoute";
import Frontend from "./Frontend";
const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LoaderRoute component={Frontend} />}></Route>
      </Routes>
    </>
  );
};

export default Index;
