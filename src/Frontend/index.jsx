import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Whatsapp from "./Components/ScrollWhatsapp/Whatsapp";
import Cursor from "./Components/Cursor/Cursor";
import Home from "./Home";
import About from "./About/About";
import Services from "./Services/Services";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const Index = () => {
  return (
    <>
      <Header />
      <Whatsapp />
      <Cursor />
      <ScrollToTop />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default Index;
