import React from "react";
import Home from "./Home";
import SponsorScroll from "./SponsorScroll";
import ProjectSection from "./ProjectSection";
import ServicesSection from "./ServicesSection";
import Technologies from "./Technologies";
import ProjectCard from "./ProjectCard";
import ProgressProcess from "./ProgressProcess";
import Pomflit from "./Pomflit";
import ClientReview from "./ClientReview";

const index = () => {
  return (
    <>
      <div id="home">
        <Home />
        <SponsorScroll />
        <ProjectSection />
        <ServicesSection />
        <Technologies />
        <ProgressProcess />
        <ProjectCard />
        <Pomflit />
        <ClientReview />
      </div>
    </>
  );
};

export default index;
