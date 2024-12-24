import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../Components/HeroSection/HeroSection";
import { NavbarContext } from "../../Context/NavbarContext";

const Project = () => {
  const { project, setProject } = useContext(NavbarContext);

  const AllProjects = [
    {
      id: 1,
      label: "All",
      pro: [
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p1.png?alt=media&token=805b071e-1b68-4879-a516-106d5a1c43a3",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p2.png?alt=media&token=09836ac8-c1f0-45ec-8f73-c829fc8208fe",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p3.png?alt=media&token=ca520b71-8019-4e6c-9efa-9d719015bfb9",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p4.png?alt=media&token=d52f7d6c-af9a-4c79-99c3-16cb3987c641",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p5.png?alt=media&token=25ba7ab0-2707-4ba3-80c7-05ad2fb5dd22",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p9.png?alt=media&token=a2104b03-6385-45ae-9f9f-8137bdff9ac5",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p8.png?alt=media&token=0cb2135e-392b-43b9-a08a-36a9fce2f78a",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p7.png?alt=media&token=cccb6d60-4413-43c7-96b0-4ca415e88d70",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p6.png?alt=media&token=d4ab7c9c-2eeb-4366-bc61-37395f980c0a",
      ],
    },
    {
      id: 2,
      label: "Ecommerce Website",
      pro: [
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p2.png?alt=media&token=09836ac8-c1f0-45ec-8f73-c829fc8208fe",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p3.png?alt=media&token=ca520b71-8019-4e6c-9efa-9d719015bfb9",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p6.png?alt=media&token=d4ab7c9c-2eeb-4366-bc61-37395f980c0a",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p7.png?alt=media&token=cccb6d60-4413-43c7-96b0-4ca415e88d70",
      ],
    },
    {
      id: 3,
      label: "Business Website",
      pro: [
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p1.png?alt=media&token=805b071e-1b68-4879-a516-106d5a1c43a3",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p4.png?alt=media&token=d52f7d6c-af9a-4c79-99c3-16cb3987c641",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p5.png?alt=media&token=25ba7ab0-2707-4ba3-80c7-05ad2fb5dd22",
      ],
    },
    {
      id: 4,
      label: "Application",
      pro: [
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/app1.png?alt=media&token=65760e03-a4b2-4d88-bf80-3825b26f48af",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/app2.png?alt=media&token=5f026203-32fd-49f5-872b-111aa9841fbe",
      ],
    },
    {
      id: 5,
      label: "Education Website",
      pro: [
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p8.png?alt=media&token=0cb2135e-392b-43b9-a08a-36a9fce2f78a",
        "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p9.png?alt=media&token=a2104b03-6385-45ae-9f9f-8137bdff9ac5",
      ],
    },
  ];

  const renderProject = (project) => {
    return (
      <div className="grid md:grid-cols-3 gap-14 mt-[3rem]">
        {project.pro.map((img, i) => (
          <motion.div
            key={i}
            className="p-4 bg-gray-200 rounded overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <img src={img} className="w-full h-auto rounded" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div id="project">
        <HeroSection text="Project" />

        <div className="px-12 mt-[5rem] flex flex-col justify-center w-full">
          <h2 className=" font-bold text-4xl text-center">Our Work</h2>

          <div className="buttons md:gap-16 gap-4 flex justify-center flex-wrap mt-[3rem] p-1 md:p-3">
            {AllProjects.map(({ id, label }) => (
              <button
                key={id}
                className={`px-4 py-2 rounded ${
                  project === id ? "bg-[#2ec4b6] text-white" : "bg-gray-300"
                }`}
                onClick={() => setProject(id)}
              >
                {label}
              </button>
            ))}
          </div>
          {renderProject(AllProjects.find((pro) => pro.id === project))}
        </div>
      </div>
    </>
  );
};

export default Project;
