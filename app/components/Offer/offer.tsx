"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SliderOffer } from "../Sliders";

const Cards = [
  {
    id: "1",
    src: "/images/offers/offers.svg",
    title: "-60%*",
    category: "Cosmética facial",
  },

  {
    id: "2",
    src: "/images/offers/offers1.svg",
    title: "-50%*",
    category: "Tratamiento anticaida",
  },

  {
    id: "3",
    src: "/images/offers/offers2.svg",
    title: "-30%*",
    category: "Alimentación infantil",
  },

  {
    id: "4",
    src: "/images/offers/offers3.svg",
    title: "-65%*",
    category: "Cremas solares",
  },
];

const Offers = () => {
  return (
    <div className="grid grid-cols-1 gap-0 md:gap-8 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 mb-10  ">
      {Cards.map((item, index) => (
        <div
          key={item.id}
          className=" hidden lg:block border-gray-300 border rounded-lg"
          data-aos="zoom-in"
          data-aos-delay={index * 150}
          data-aos-duration="1000"
        >
          <Image
            alt={`${item.category} ${item.title}`}
            width={150}
            height={150}
            src={item.src}
            className="w-full"
          />
          <div className=" pt-2 text-center">
            <p className="text-bluet text-2xl font-bold">{item.title}</p>
            <p className="text-[#091535] text-base font-semibold">
              {item.category}
            </p>
          </div>
          <div className="px-4 py-2">
            <button
              className="bg-bluet px text-white font-bold py-1.5 w-full rounded-lg focus:outline-none focus:ring 
                            focus:ring-offset focus:ring-[#97B2F8] hover:bg-[#4579FF]  transition-colors"
            >
              Ver ofertas
            </button>
          </div>
        </div>
      ))}
      <div className="lg:hidden">
        <SliderOffer perView={2.2} spacing={5}>
          {Cards.map((item) => (
            <SwiperSlide
              key={item.id}
              className="keen-slider__slide border-gray-300 border-2 rounded-lg"
            >
              <Image
                alt={item.id}
                width={290}
                height={230}
                src={item.src}
                className="w-full"
              />
              <div className="pl-4 pr-80 pt-4">
                <p className="text-bluet text-2xl lg:text-5xl font-bold">
                  {item.title}
                </p>
                <p className="text-[#091535] text-base lg:text-xl font-semibold">
                  {item.category}
                </p>
              </div>
              <div className="px-2 py-2">
                <button
                  className="bg-bluet text-white font-bold py-2 w-full rounded-lg focus:outline-none focus:ring 
                            focus:ring-offset focus:ring-[#97B2F8] hover:bg-[#4579FF]  transition-colors"
                >
                  Ver ofertas
                </button>
              </div>
            </SwiperSlide>
          ))}
        </SliderOffer>
      </div>
    </div>
  );
};
export default Offers;
