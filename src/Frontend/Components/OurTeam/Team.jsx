import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const services = [
  {
    title: "Hamza Abbas",
    skill: "Flutter Developer",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "As a skilled Flutter Developer, Hamza Abbas specializes in building high-performance, visually appealing mobile applications that run seamlessly across multiple platforms. With expertise in cross-platform app development, he ensures efficiency and scalability in every project.",
  },
  {
    title: "Usama Irshad",
    skill: "Frontend Developer",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "Usama Irshad is an expert Frontend Developer with a passion for creating responsive, interactive, and user-friendly web interfaces. His proficiency in HTML, CSS, JavaScript, and modern frontend frameworks guarantees an exceptional user experience.",
  },
  {
    title: "Muhammad Bin Ashiq",
    skill: "Backend Developer",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "Muhammad Bin Ashiq is a seasoned Backend Developer who specializes in building scalable and secure server-side applications. His expertise in databases, APIs, and server management ensures the reliability and performance of the backend systems.",
  },
  {
    title: "Ali Gulzar",
    skill: "WordPress Developer",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "Ali Gulzar is a skilled WordPress Developer who creates highly customizable, responsive, and functional websites. With extensive experience in theme customization, plugin development, and site optimization, he ensures that every WordPress site delivers a seamless experience.",
  },
  {
    title: "Muhammad Adil",
    skill: "UX/UI Designer",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "Muhammad Adil is a talented UX/UI Designer dedicated to crafting intuitive, user-centered designs. His expertise in wireframing, prototyping, and user testing ensures that every design is not only visually appealing but also enhances the user experience across all platforms.",
  },
  {
    title: "Faiz Malik",
    skill: "Shopify Developer",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "Faiz Malik is a Shopify Developer who specializes in building customized, feature-rich e-commerce stores. With his deep understanding of the Shopify platform, he helps businesses establish a robust online presence and optimize their e-commerce operations for maximum growth.",
  },
  {
    title: "Moheeb Mirza",
    skill: "Google Ads Expert",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "Faiz Malik is a Shopify Developer who specializes in building customized, feature-rich e-commerce stores. With his deep understanding of the Shopify platform, he helps businesses establish a robust online presence and optimize their e-commerce operations for maximum growth.",
  },
  {
    title: "Arslan ALi",
    skill: "Digital Marketing Expert",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/team.png?alt=media&token=d3e31a51-7ff8-4308-8265-848f014cfdf2",
    description:
      "Faiz Malik is a Shopify Developer who specializes in building customized, feature-rich e-commerce stores. With his deep understanding of the Shopify platform, he helps businesses establish a robust online presence and optimize their e-commerce operations for maximum growth.",
  },
];

const Team = () => {
  return (
    <>
      <div className="min-h-[100vh]  p-[2rem]">
        <div className=" mt-[5rem] ">
          <h2 className="text-center font-bold  text-4xl text-black relative after:content-[''] after:block after:w-[15%] after:h-1 after:bg-cyan-600 after:mx-auto after:mt-2">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 text-center  place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-40 mt-[10rem]">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-black    relative shadow-xl group max-w-[300px] "
            >
              <div className=" p-5">
                <div className="h-[50px] flex justify-center  ">
                  <div className=" h-[160px] w-[160px]  transform -translate-y-[5rem] rounded-full bgColor shadowlg ">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="max-w-[150px] block mx-auto group-hover:scale-110 duration-300 drop-shadow-md  clipImage"
                    />
                  </div>
                </div>
                <h1 className="text-2xl font-bold  txtColor text-center">
                  {service.title}
                </h1>
                <h1 className="text-md  txtColor text-center mb-6">
                  {service.skill}
                </h1>
                <p className="text-gray-500  duration-300 text-[1rem]">
                  {service.description}
                </p>
              </div>
              <div className="bgColor w-full p-3 flex justify-center gap-5">
                <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
                  <FaFacebookF />
                </div>
                <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
                  <FaLinkedin />
                </div>
                <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
                  <FaGithub />
                </div>
                <div className=" bg-white p-3 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:text-white">
                  <FaInstagram />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
