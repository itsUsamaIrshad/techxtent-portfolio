import React, { useState } from "react";
import "../../App.css";
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HeroSection from "../Components/HeroSection/HeroSection";
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [service, setService] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !city || !message) {
      alert("All Feilds are Required");
    }
  };

  return (
    <>
      <div id="contact">
        <HeroSection text="Contact" />

        <div className="card py-5 px-2 mt-[5rem] ">
          <div className="grid lg:grid-cols-[60%_auto] shadowContact p-5 md:p-10 gap-6  ">
            <div>
              <div className=" space-y-7">
                <h2 className=" text-4xl">Let’s we discuss your Project!</h2>
                <p>
                  If you don’t mind, please fill our form and let us know about
                  your project to discuss further. You can expect our response
                  in one business day.
                </p>

                <form className=" space-y-4">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      className="h-[48px] w-full px-[15px] text-black bg-transparent border-[1px] border-gray-400 border-solid outline-0 focus:border-cyan-500 rounded-md"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="text"
                      className="h-[48px] w-full px-[15px] text-black bg-transparent border-[1px] border-gray-400 border-solid outline-0 focus:border-cyan-500 rounded-md"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      className="h-[48px] px-[15px] text-black bg-transparent border-[1px] border-gray-400border-solid outline-0 focus:border-cyan-500 rounded-md"
                      placeholder="Your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                      type="text"
                      className="h-[48px] px-[15px] text-black bg-transparent border-[1px] border-gray-400 border-solid outline-0 focus:border-cyan-500 rounded-md"
                      placeholder="Your City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <select
                    name="service"
                    id="service"
                    className="h-[48px] w-full px-[15px] text-black bg-transparent border-[1px] border-gray-400 border-solid outline-0 focus:border-cyan-500 rounded-md "
                  >
                    <option value="">Select Service</option>
                    <option value="">Web Development</option>
                    <option value="">App Development</option>
                    <option value="">Shopify Store</option>
                    <option value="">Wordpresss Website</option>
                  </select>
                  <textarea
                    name="desc"
                    id="desc"
                    cols={30}
                    rows={6}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className=" w-full py-3 px-[15px] text-black bg-transparent border-[1px] border-gray-400 border-solid outline-0 focus:border-cyan-500 rounded-md "
                  ></textarea>
                </form>
              </div>
            </div>
            <div>
              <h1 className=" text-2xl mb-5">
                You can come freely to our Location!
              </h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0550853936984!2d73.11262087435135!3d31.412608352460477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268725b330195%3A0x41252daea86b04b7!2sKohinoor%20Plaza%20I!5e0!3m2!1sen!2s!4v1732827392838!5m2!1sen!2s"
                className="  lg:w-[35vw]
                lg:h-[76vh] h-[100vh] w-[80vw]"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="p-2 grid md:grid-cols-3  mt-[4rem]">
          <div className="flex flex-col gap-2">
            <div className=" p-2 bgColor flex  rounded-full mx-auto w-[60px] h-[60px]">
              <IoIosCall className=" text-white mx-auto text-4xl" />
            </div>
            <div>Phone Number</div>
            <div>+92 3016613599</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" p-2 bgColor flex  rounded-full mx-auto w-[60px] h-[60px]">
              <MdEmail className=" text-white mx-auto text-4xl" />
            </div>
            <div>Email</div>
            <div>TechXtent@gmail.com</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" p-2 bgColor flex  rounded-full mx-auto w-[60px] h-[60px]">
              <FaMapMarkerAlt className=" text-white mx-auto text-4xl" />
            </div>
            <div>Address</div>
            <div>Kohinoor Plaza 2th Floor, Kohinoor City, Faisalabad</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
