"use client";

import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

// import type { RootState } from "@ft/app/GlobalRedux/store";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "@ft/app/GlobalRedux/feactures/counter/counterSlice";
import { SliderMarck } from "../Sliders";

const Data = [
  {
    id: "1",
    src: "/images/marks/bayer.svg",
    href: "#",
  },
  {
    id: "2",
    src: "/images/marks/bioderma.svg",
    href: "#",
  },
  {
    id: "3",
    src: "/images/marks/eucerin.svg",
    href: "#",
  },
  {
    id: "4",
    src: "/images/marks/headshoulders.svg",
    href: "#",
  },
  {
    id: "5",
    src: "/images/marks/neutrogena.svg",
    href: "#",
  },
  {
    id: "6",
    src: "/images/marks/pedialyte.svg",
    href: "#",
  },
  {
    id: "7",
    src: "/images/marks/nivea.svg",
    href: "#",
  },
  {
    id: "8",
    src: "/images/marks/dolex.svg",
    href: "#",
  },
  {
    id: "9",
    src: "/images/marks/advil.svg",
    href: "#",
  },
  {
    id: "10",
    src: "/images/marks/pequenin.svg",
    href: "#",
  },
  {
    id: "11",
    src: "/images/marks/huggies.svg",
    href: "#",
  },
  {
    id: "12",
    src: "/images/marks/durex.svg",
    href: "#",
  },
  {
    id: "13",
    src: "/images/marks/today.svg",
    href: "#",
  },
  {
    id: "14",
    src: "/images/marks/enfragrow.svg",
    href: "#",
  },
  {
    id: "15",
    src: "/images/marks/nan.svg",
    href: "#",
  },
  {
    id: "16",
    src: "/images/marks/nestogeno.svg",
    href: "#",
  },
  {
    id: "17",
    src: "/images/marks/alpina.svg",
    href: "#",
  },
  {
    id: "18",
    src: "/images/marks/cocacola.svg",
    href: "#",
  },
  {
    id: "19",
    src: "/images/marks/moster.svg",
    href: "#",
  },
];

function Marks() {
  return (
    <>
      <div className="hidden xl:block">
        <div className="container w-full"></div>
        <SliderMarck perView={10} spacing={24}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
                className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md w-28"
              >
                <div className="w-28 h-28">
                  <Image
                    className="rounded-full p-1"
                    alt={item.id}
                    src={item.src}
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>

      <div className="hidden lg:block xl:hidden">
        <div className="container w-full"></div>
        <SliderMarck perView={8} spacing={24}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
                className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md w-28"
              >
                <div className="w-28 h-28">
                  <Image
                    className="rounded-full p-1"
                    alt={item.id}
                    src={item.src}
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>

      <div className="hidden xl:hidden lg:hidden md:block">
        <div className="container w-full"></div>
        <SliderMarck perView={6} spacing={15}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
                className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md w-20s"
              >
                <div className="w-20 h-20">
                  <Image
                    className="rounded-full p-1"
                    alt={item.id}
                    src={item.src}
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>

      <div className="xl:hidden lg:hidden md:hidden block">
        <div className="container w-full"></div>
        <SliderMarck perView={4} spacing={15}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
                className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md w-16"
              >
                <div className="w-16 h-16">
                  <Image
                    className="rounded-full p-1"
                    alt={item.id}
                    src={item.src}
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>
    </>
  );
}

export default Marks;
