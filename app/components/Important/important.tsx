"use client";

import React from "react";
import Image from "next/image";

const Data = [
  {
    id: "1",
    src: "/icons/blue/shopping.svg",
    title: " productos",
    bold: "+10.000",
  },

  {
    id: "2",
    src: "/icons/blue/hands.svg",
    title: "Acumula puntos y ahorra",
  },

  {
    id: "3",
    src: "/icons/blue/car.svg",
    title: "Envíos gratis",
  },
];

const Important = () => {
  return (
    <div className=" lg:block lg:rounded-lg">
      <div className="grid justify-items-center grid-cols-1 gap-2 md:gap-6 md:grid-cols-1 lg:grid-cols-3 ">
        {Data.map((item, index) => (
          <div
            key={item.id}
            className="border-gray-300 border rounded-lg w-full lg:border-none "
            data-aos="fade-right"
            data-aos-delay={index * 250}
            data-aos-duration="700"
          >
            <div key={item.id} className="flex flex-row mx-4 my-5 ">
              <Image
                alt={item.id}
                src={item.src}
                width={48}
                height={48}
                className="w-12 h-12 md:w-16 md:h-auto"
              />
              <p className="text-[#091535] ml-6 text-base md:text-base font-semibold pt-5">
                <span className="font-bold">{item.bold} </span>
                <span className="font-semibold">{item.title}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Important;
