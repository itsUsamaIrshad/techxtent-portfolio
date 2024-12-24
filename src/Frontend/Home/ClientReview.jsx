import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";

const ReviewData = [
  {
    id: 1,
    title: "John D.",
    country: "USA",
    desc: "Working with VB Infotech was a game-changer for our business. Their team provided top-notch support and guidance from start to finish. They were always available to address any concerns, and the final product exceeded our expectations. Highly recommend for any tech solution needs.",
  },
  {
    id: 2,
    title: "Sara T.",
    country: "Canada",
    desc: "I had the pleasure of partnering with VB Infotech for our mobile app development. Their team was incredibly responsive, understanding our vision and delivering a high-quality product on time. They went above and beyond to ensure everything worked seamlessly. I will definitely work with them again.",
  },
  {
    id: 3,
    title: "Michael K.",
    country: "Australia",
    desc: "VB Infotech made our transition to a fully functional e-commerce platform smooth and hassle-free. Their developers are highly skilled, and they were committed to ensuring that every detail was perfect. The team was great at communicating, making it easy to collaborate throughout the project.",
  },
  {
    id: 4,
    title: "Amira S.",
    country: "UAE",
    desc: "As a startup, finding the right software development partner was crucial. VB Infotech not only delivered outstanding results but also guided us in the right direction with their expertise. Their creativity and dedication to our project were truly impressive. I’m looking forward to working together on future projects.",
  },
  {
    id: 5,
    title: "David P.",
    country: "Germany",
    desc: "VB Infotech exceeded our expectations on our custom software project. From the initial consultation to the final deployment, they were professional and meticulous in every step. They delivered a solution that was not only functional but also scalable and user-friendly. A top-tier software development company.",
  },
];

const ClientReview = () => {
  return (
    <>
      <div className="px-2 lg:px-10 mt-[5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_44%] w-full gap-28 ">
          <div className=" space-y-8 mt-5">
            <h2 className="font-bold text-5xl">
              Why clients love working with us
            </h2>

            <p className=" text-lg lg:text-xl">
              All the years that we have been in the business, we have strived
              endlessly to offer nothing less than the best to our clients. No
              doubt, most of our clients come from word of mouth recommendations
              and referrals.
            </p>
          </div>
          <div className="card">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="swiper-wrapper">
                {ReviewData.map((card) => (
                  <div key={card.id}>
                    {" "}
                    {/* Fixed key */}
                    <SwiperSlide className="p-5 shadow-card">
                      <div>
                        <div className="card">
                          <div className="space-y-6">
                            <p>
                              <FaQuoteLeft className="text-5xl txtColor" />
                            </p>
                            <div className="space-y-6">
                              <span className="text-3xl font-semibold">
                                {card.title}
                              </span>
                              <h3>{card.name}</h3>
                              <h4>{card.desc}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReview;
