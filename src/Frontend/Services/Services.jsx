import React from "react";
import ServicesSection from "../Home/ServicesSection";
import Pomflit from "../Home/Pomflit";
import ClientReview from "../Home/ClientReview";
import HeroSection from "../Components/HeroSection/HeroSection";

const Services = () => {
  return (
    <>
      <div id="services">
        <HeroSection text="Services" />

        <ServicesSection />
        <Pomflit />
        <ClientReview />
      </div>
    </>
  );
};

export default Services;
