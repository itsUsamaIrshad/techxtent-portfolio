import React, { useState } from "react";

const Pomflit = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !number) {
      alert("All Feilds are Required");
    }

    const serviceId = "service_y7fi5ib";
    const templateId = "template_7u5sgzm";
    const publickey = "b_ZBE4IVjbeo9f63q";

    const templateForm = {
      from_name: name,
      from_email: email,
      from_number: number,
    };

    setEmail(serviceId, templateId, templateForm, publickey);

    then(() => {
      window.notify("Send Message Successfully", "success");

      setName("");
      setEmail("");
      setNumber("");
    });

    (error) => {
      console.log("error");
    };
  };

  return (
    <>
      <div className=" lg:px-16">
        <div className="bgColor w-full  mt-[4rem] rounded-xl p-5 xs:p-10">
          <div className="relative mx-auto ">
            <h2 className=" text-2xl xs:text-4xl font-semibold text-white text-center z-20 relative">
              We always try to be as close <br />
              to you as possible
            </h2>
            <div>
              <form className="flex flex-col lg:flex-row  xl:justify-around flex-wrap  p-2 mt-[2rem] space-y-5 lg:space-y-0">
                <input
                  type="text"
                  className=" p-3 border-0 outline-0 rounded-lg bg-cyan-700 text-white max-w-full  w-[100%] lg:w-[24%]"
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.name)}
                />
                <input
                  type="email"
                  className=" p-3 border-0 outline-0 rounded-lg bg-cyan-700 text-white max-w-full  w-[100%] lg:w-[24%]"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.email)}
                />
                <input
                  type="tel"
                  className=" p-3 border-0 outline-0 rounded-lg bg-cyan-700 text-white max-w-full  w-[100%] lg:w-[24%]"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.number)}
                />
                <button className=" p-3 border-0 outline-0 rounded-lg bg-white max-w-[100%]  w-[100%] lg:w-[24%] ">
                  Submit
                </button>
              </form>
            </div>
            <div className=" flex justify-between flex-wrap ">
              <img
                src="/pomflit1.png"
                alt=""
                height={80}
                width={80}
                className=" absolute top-[-3rem] right-0 animate-spin-slow"
              />
              <img
                src="/pomflit2.png"
                alt=""
                height={80}
                width={80}
                className="z-20  rotate-180 absolute right-0 bottom-[1rem] animate-spin-slow"
              />
              <img
                src="/pomflit3.png"
                alt=""
                height={80}
                width={80}
                className="  absolute  top-[-1rem] rotate-90 left-[2rem] h-auto  animate-spin-slow "
              />
              <img src="/pomflit1.png" alt="" className="animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pomflit;
