import React, { useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../Context/NavbarContext";

const SwiperData = () => {
  const data = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p1.png?alt=media&token=805b071e-1b68-4879-a516-106d5a1c43a3",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p2.png?alt=media&token=09836ac8-c1f0-45ec-8f73-c829fc8208fe",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p3.png?alt=media&token=ca520b71-8019-4e6c-9efa-9d719015bfb9",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p4.png?alt=media&token=d52f7d6c-af9a-4c79-99c3-16cb3987c641",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/p5.png?alt=media&token=25ba7ab0-2707-4ba3-80c7-05ad2fb5dd22",
    },
  ];

  const { handleNavigation, getActiveClass } = useContext(NavbarContext);

  return (
    <div className=" px-[1.5rem] ">
      <div className="p-[3rem] rounded-3xl  bg-black ">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // When window width is >= 640px
            40: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          {data.map((img, index) => (
            <SwiperSlide key={index}>
              <>
                <div className="mx-w-[300px] hover:scale-90 transition-all duration-200">
                  <img src={img.img} className="mx-auto rounded-3xl" />
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" flex justify-center mt-[5rem]">
          <Link
            to="/project"
            className={`p-3 sm:p-5 bg-white  rounded-md ${getActiveClass(
              "/project"
            )}`}
            onClick={() => handleNavigation("/project")}
          >
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwiperData;
