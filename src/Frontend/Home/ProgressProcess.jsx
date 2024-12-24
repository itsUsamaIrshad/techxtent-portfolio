import React, { useContext } from "react";
import { NavbarContext } from "../../Context/NavbarContext";
import { Link } from "react-router-dom";

const ProgressProcess = () => {
  const progessProcess = [
    {
      id: 1,
      title: "Analysis",
      desc: "That's what your imagination is doing. Don't you recognize the sound your feet make when you step on gravel? You can picture it, but you're not actually hearing it, are you? Try your best to visualize these things. ",
    },
    {
      id: 2,
      title: "Design",
      desc: "That is your imagination doing that. You know the sound that your feet make when you walk across gravel don't you? You can imagine it, but you are not hearing it in your ears, are you? Just imagine these things as best as you can",
    },
    {
      id: 3,
      title: "Development",
      desc: "Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make. ",
    },
    {
      id: 4,
      title: "Testing",
      desc: "Try to imagine yourself actually there. Step 3: Assume that there is a point when the path splits, going off to the left and off to the right, a few more steps along. Take a moment or two to reflect on this.",
    },
    {
      id: 5,
      title: "Go-Live",
      desc: "As you stand here where the route divides, consider that. You want to choose one of these routes and stick with it. We'll examine the potential outcomes of each option for your future before you decide.",
    },
  ];

  const { getActiveClass, handleNavigation } = useContext(NavbarContext);

  return (
    <div className=" px-[4rem] mx-auto mt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="min-h-screen relative ">
          <div className="space-y-5 mt-[2rem]  sticky  top-32">
            <h2 className="font-semibold text-2xl">
              Smart Strategies, Exceptional Performance
            </h2>
            <p>
              Our approach ensures optimal productivity and profitability,
              delivering solutions that drive success and growth for your
              business.
            </p>
            <button>
              <Link
                to="/contact"
                className={`bgColor py-4 px-10 rounded-xl text-white mt-[5rem] ${getActiveClass(
                  "/project"
                )}`}
                onClick={() => handleNavigation("/contact")}
              >
                Let Start Project
              </Link>
            </button>
          </div>
        </div>

        {/* Sticky positioning */}
        <div className="relative space-y-10 ">
          {/* Timeline Items */}
          {progessProcess.map((item, index) => (
            <div
              key={index}
              className="space-y-5 flex gap-5 md:gap-10 items-start"
            >
              <div className="relative flex justify-center items-center p-2 md:p-5 md:w-[60px] md:h-[60px] rounded-full bg-[#2ec4b6] text-white">
                <span className="text-xl font-semibold">{item.id}</span>

                {index < 4 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 sm:h-36 xs:h-56  h-72 w-[2px] bg-slate-400"></div>
                )}
              </div>

              <div>
                <h5 className="text-xl font-semibold">{item.title}</h5>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressProcess;
