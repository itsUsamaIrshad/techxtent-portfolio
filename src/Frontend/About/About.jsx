import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import Team from "../Components/OurTeam/Team";
import { NavbarContext } from "../../Context/NavbarContext";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import HeroSection from "../Components/HeroSection/HeroSection";
const About = () => {
  const countUpComponent = (start, end, label) => (
    <div className="h-[140px] w-[140px] rounded-full border-white border-2 flex flex-col justify-center items-center text-center">
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        {countOn && (
          <CountUp
            start={start}
            end={end}
            duration={2}
            className="font-semibold text-2xl"
          />
        )}
      </ScrollTrigger>
      <p className="text-sm">{label}</p>
    </div>
  );

  const { countOn, setCountOn } = useContext(NavbarContext);

  return (
    <>
      <div id="about">
        <HeroSection text="About" />
        <div className="grid grid-cols-1  lg:grid-cols-2  px-[1rem] sm:px-[3rem] md:px-[2rem] mt-[5rem] gap-8">
          <div className=" p-4 w-full  md:p-12 h-auto  relative  ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/web.jpg?alt=media&token=9aaddb25-02a3-4a90-a3ef-b2bd2e57feeb"
              alt="image"
              className=" max-w-[80%]"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/web2.jpg?alt=media&token=1e1cef38-11bb-4eda-8ce3-2727c8267898"
              alt="image"
              className=" max-w-[80%] md:max-w-[60%]  lg:max-w-[70%] absolute top-[25%] sm:top-[25%]  md:top-[30%] right-0   sm:border-[16px] border-[8px] border-white"
            />
          </div>
          <div className=" space-y-6  mt-[5rem] md:mt-0">
            <h2 className=" text-4xl  font-semibold relative  after:content-[''] after:block after:w-[40%] after:h-1 after:bg-cyan-400 after:mr-0 after:mt-2">
              About TechXtent
            </h2>

            <h3 className=" lg:mt-[4rem] text-xl font-semibold">
              Let's help your concept take shape! Your partner for total company
              transformation is TechXtent.
            </h3>
            <p>
              With over 7 years of experience in IT development, we specialize
              in mobile app development, web solutions, UI/UX design, software
              development, e-commerce, and quality assurance. Our expert team
              delivers tailored digital transformations to help your business
              thrive. We stay ahead with cutting-edge technology and provide
              innovative solutions aligned with your needs. Everything we do is
              driven by integrity, transparency, and honesty, ensuring a
              positive impact in the digital world.
            </p>
          </div>
        </div>

        <div className="bg-black ">
          <div className="grid lg:grid-cols-2 mt-[12rem] text-white p-10">
            <div className=" space-y-10  flex flex-col sm:justify-center items-center  sm:px-6">
              <h2 className=" font-semibold text-md xs:text-2xl sm:text-4xl ">
                Over a decade of global experience.
              </h2>
              <p className=" text-sm sm:text-lg">
                With more than ten years of experience in providing software
                solutions, website development, design services, and SaaS
                services globally, TechXtent Solutions is a top software firm.
                Our team of professionals has experience working with a variety
                of industries and provides solutions that are tailored to each
                client's specific requirements. You can rely on us to be your
                trustworthy partner in accomplishing your company objectives.
              </p>
            </div>
            <div className=" grid md:grid-cols-3 gap-4 md:gap-5 p-5 md:p-0 place-content-center mx-auto">
              {countUpComponent(1, 24, "Years Experience Internationally")}
              {countUpComponent(50, 400, "Permanent Clients Who Trust")}
              {countUpComponent(100, 1240, "Successful Projects")}
            </div>
          </div>
        </div>

        <div className=" px-[1rem] xs:px-[2.5rem]  mt-[5rem]">
          <h2 className=" text-center text-4xl font-semibold ">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 mt-[4rem] gap-5 ">
            <div className="card  p-5 bg-white border-[1px] space-y-8 rounded-2xl hover:shadow-2xl transition-all duration-250">
              <div className="flex gap-10">
                <div className=" rounded-full w-[55px]  h-[55px p-[0.5rem]  bg-cyan-300 flex justify-center">
                  <img
                    src="/about-our-mission.png"
                    alt=""
                    className=" mx-w-[4.5rem]"
                  />
                </div>
                <h2 className=" text-xl font-semibold">Our Mission</h2>
              </div>
              <p className="sm:px-11 sm:text-lg text-sm">
                Through digital innovation, we aim to deliver exceptional
                technology services that enable you to fulfill your project and
                business objectives. We have evolved from creating amazing
                scripts to execute your application to offering complete tech
                solutions, and we now have clients all around the world,
                including Chat Gram, Microsoft, and Art of Works.
              </p>
            </div>
            <div className="card p-5 bg-white border-[1px] space-y-8 rounded-2xl hover:shadow-2xl">
              <div className="flex gap-10">
                <div className=" rounded-full w-[55px]  h-[55px] p-[0.5rem]  bg-cyan-300 flex justify-center">
                  <FaEye className=" w-[30px] h-[30px] p-1" />
                </div>
                <h2 className=" text-xl font-semibold">Our Vision</h2>
              </div>
              <p className="sm:px-11 sm:text-lg text-sm">
                Our mission is to become the firm that businesses choose first
                when they are looking for a modern, affordable IT provider. It
                motivates us to offer top-notch web and mobile solutions that
                meet various business requirements in accordance with their
                strategy.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:px-[5rem]">
          <div className=" mt-[3rem] grid  lg:grid-cols-[26%_30%_auto] place-items-center ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/web.jpg?alt=media&token=9aaddb25-02a3-4a90-a3ef-b2bd2e57feeb"
              className="max-w-[15rem] md:max-w-[22.6rem]"
              alt=""
            />
            <div className="card bg-cyan-500 md:px-[6.67rem] px-[2.5rem] py-[2.6rem]  space-y-4">
              <h1 className=" text-2xl font-semibold text-white">
                Successfully Completed Project
              </h1>
              <p className=" text-5xl text-white">500+</p>
            </div>
            <div className="card bg-gray-100 md:px-[6.67rem] px-[2.5rem] py-[1.9rem] space-y-3">
              <h1 className=" text-xl sm:text-2xl font-semibold">
                If you have any question, feel free to Message Us
              </h1>
              <p className="  text-xl sm:text-2xl txtColor">+92 319 7846426</p>
              <p className=" text-xl sm:text-2xl">
                Monday - Friday: 11:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className=" lg:px-[5rem] ">
          <div className=" mt-[3rem] grid  lg:grid-cols-[25%_50%_25%]">
            <div className="card bg-cyan-500 px-[3.67rem] hidden lg:block w-full lg:w-auto py-[2.6rem]  space-y-4">
              <p className=" text-4xl text-white">500+</p>
              <h1 className=" text-2xl font-semibold text-white">
                Successfully Completed Project
              </h1>
            </div>
            <video
              src="https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/aboutVideo.mp4?alt=media&token=e4f040bb-f188-456d-9395-661da85ab632"
              autoPlay
              loop
              className="w-full"
              height={450}
              width={450}
            ></video>
            <div className="card bg-gray-100 px-[1.67rem]  py-[4rem] space-y-3">
              <div className=" flex flex-col">
                <h1 className=" text-4xl font-semibold">15+</h1>
                <p>qualified employees</p>
              </div>
              <p className=" text-sm text-center">
                Collaborate with our leader and diligent individuals that bring
                creative ideas to companies just like yours.
              </p>
            </div>
          </div>
        </div>
        <Team />
        <div className="bgRocket">
          <div className="grid md:grid-cols-2">
            <div className=" px-[2.5rem] flex justify-center items-start  mx-auto flex-col h-[100vh] space-y-8 ">
              <h1 className=" text-white text-4xl font-semibold">
                Ready to get started?
              </h1>
              <p className=" text-white text-2xl">
                Empower your digital journey and unlock limitless potential
                <br /> through strategic talent partnerships.
              </p>
              <button className=" bgColor p-5 rounded-md font-semibold">
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
