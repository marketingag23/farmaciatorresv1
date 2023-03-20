"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Image from "next/image";

export default function SliderPrimary() {
  return (
    <div className="slider__home rounded-xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide className="shadow-md ">
          <Image
            alt="banner"
            width={1246}
            height={695}
            src={"/images/banners/bannerSemana.png"}
            className=""
            role="presentation"
          />
        </SwiperSlide>
        <SwiperSlide className="shadow-md ">
          <Image
            alt="banner"
            width={1246}
            height={695}
            src={"/images/banners/bannerOllParr.png"}
            className=""
            role="presentation"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
