"use client";

import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { useFilter } from "@ft/app/context/filterContex";
import { SliderMarck } from "../Sliders";

const Data = [
  {
    id: "1",
    src: "/images/marksdest/pequenin.png",
    href: "#",
    name: "Pañales",
    codigo: "0200813",
  },
  {
    id: "2",
    src: "/images/marksdest/enfragrpuw.png",
    href: "#",
    name: "Fórmulas infantiles",
    codigo: "0200809",
  },
  {
    id: "3",
    src: "/images/marksdest/cicatricure.png",
    href: "#",
    name: "Cuidado de la piel",
    codigo: "02007",
  },
  {
    id: "4",
    src: "/images/marksdest/dove.png",
    href: "#",
    name: "Cuidado del cabello",
    codigo: "0200807",
  },
  {
    id: "5",
    src: "/images/marksdest/umbrella.png",
    href: "#",
    name: "Protección solar",
    codigo: "0200807",
  },
  {
    id: "6",
    src: "/images/marksdest/bebidas.png",
    href: "#",
    name: "Bebidas",
    codigo: "04002",
  },
  {
    id: "7",
    src: "/images/marksdest/resftriados.png",
    href: "#",
    name: "Resfriado",
    codigo: "03004",
  },
  {
    id: "8",
    src: "/images/marksdest/vitac.png",
    href: "#",
    name: "Vitaminas",
    codigo: "0300506",
  },
  {
    id: "9",
    src: "/images/marksdest/dolex.png",
    href: "#",
    name: "Alivio del dolor",
    codigo: "03002",
  },
  {
    id: "10",
    src: "/images/marksdest/today.png",
    href: "#",
    name: "Salud sexual",
    codigo: "03006",
  },
];

function Marks() {
  const router = useRouter();

  const { hadleOptionCodigo }: any = useFilter();

  const handleLinkFilter = (id: string, descripcion: string) => {
    router.push("/Filtrado");
    hadleOptionCodigo(id, descripcion);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="hidden xl:block">
        <SliderMarck perView={10} spacing={24}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <button
                onClick={() => handleLinkFilter(item.codigo, item.name)}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              >
                <div
                  className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md "
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
                <h4 className="text-center text-sm mt-2">{item.name}</h4>
              </button>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>

      <div className="hidden lg:block xl:hidden">
        <SliderMarck perView={8} spacing={24}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <button
                onClick={() => handleLinkFilter(item.codigo, item.name)}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              >
                <div
                  className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md "
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
                <h4 className="text-center text-sm mt-2">{item.name}</h4>
              </button>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>

      <div className="hidden xl:hidden lg:hidden md:block">
        <SliderMarck perView={6} spacing={15}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <button
                onClick={() => handleLinkFilter(item.codigo, item.name)}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
                className="overflow-hidden w-20"
              >
                <div
                  className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md "
                >
                  <div className="w-20 h-20">
                    <Image
                      className="rounded-full p-1"
                      alt={item.id}
                      src={item.src}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <h4 className="text-center text-xs lg:text-sm mt-2 truncate">
                  {item.name}
                </h4>
              </button>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>

      <div className="xl:hidden lg:hidden md:hidden block">
        <SliderMarck perView={4} spacing={15}>
          {Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <button
                onClick={() => handleLinkFilter(item.codigo, item.name)}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
                className="overflow-hidden w-16"
              >
                <div
                  className="rounded-full focus:outline-none border-gray-300 border
              transition ease-in-out delay-150 duration-700 hover:scale-110 hover:shadow-md "
                >
                  <div className="w-16 h-16">
                    <Image
                      className="rounded-full p-1"
                      alt={item.id}
                      src={item.src}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <h4 className="text-center text-xs lg:text-sm mt-2 truncate">
                  {item.name}
                </h4>
              </button>
            </SwiperSlide>
          ))}
        </SliderMarck>
      </div>
    </>
  );
}

export default Marks;
