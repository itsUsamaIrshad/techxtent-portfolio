import Heading from "../Components/Heading/Heading";

const services = [
  {
    name: "app-development",
    title: "App Development",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/service1.png?alt=media&token=9f547b28-caee-4786-9621-533c0234b167",
    description:
      "In today’s digital age, App Development is essential for businesses looking to remain competitive and adapt to changing dynamics.",
  },
  {
    name: "web-development",
    title: "Web Development",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/service2.png?alt=media&token=1d807b88-dd4c-42d6-881c-64f7c2e19566",
    description:
      "In today’s digital age, Web Development is essential for businesses looking to remain competitive and adapt to changing dynamics.",
  },
  {
    name: "digital-marketing",
    title: "Digital Marketing",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/service3.png?alt=media&token=fcafb76f-6d89-4a02-a86d-88cfbca7c870",
    description:
      "In today’s digital age, Digital Marketing helps businesses connect with their audience effectively.",
  },
  {
    name: "ecommerce-website",
    title: "Ecommerce Website",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/service4.png?alt=media&token=d40f417c-0bb3-4e58-8d03-f5e338bef2ba",
    description:
      "In today’s digital age, Ecommerce Websites empower businesses to sell products online effortlessly.",
  },
  {
    name: "cms",
    title: "CMS",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/service5.png?alt=media&token=440a6d3d-ddbe-4521-9767-daa386c17488",
    description:
      "In today’s digital age, CMS solutions simplify content management for organizations of all sizes.",
  },
  {
    name: "shopify-store",
    title: "Shopify Store",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/medical-5f283.appspot.com/o/service6.png?alt=media&token=5a332f02-7fb7-411b-af68-8b279d17278e",
    description:
      "In today’s digital age, Shopify Stores provide a seamless platform for e-commerce businesses.",
  },
];

const ServicesSection = () => {
  return (
    <div className=" relative">
      <Heading text="Service We Offer" />

      <div className="min-h-[100vh] mt-[8rem] p-[2rem] md:p-[5rem] bgColor">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-36 mt-[10rem]">
          {services.map((service) => (
            <div
              key={service.name}
              className="change rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl group max-w-[300px] p-5"
            >
              <div className="h-[100px] flex justify-center">
                <div className="bg-white h-[160px] w-[160px] rounded-full transform -translate-y-[5rem] border-4 border-b-slate-300">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="max-w-[150px] block mx-auto group-hover:scale-110 duration-300 drop-shadow-md"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-3 txtColor">
                {service.title}
              </h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-[1rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
