"use client";

import React from "react";
import { Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";

interface Props {
  children: React.ReactNode;
  perView: number;
  spacing: number;
}

export default function SliderMarck({ children, perView, spacing }: Props) {
  return (
    <div className="lg:my-5 my-2">
      <Swiper
        slidesPerView={perView}
        spaceBetween={spacing}
        effect={"slide"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {children}
      </Swiper>
    </div>
  );
}
