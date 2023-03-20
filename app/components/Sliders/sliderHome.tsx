"use client";

import Image from "next/image";
import SliderPrimary from "./sliderPrimary";

const SliderHome = () => {
  return (
    <div className="z-0 grid grid-cols-10 gap-2 lg:gap-3 lg:-mb-6">
      <div
        className="col-span-10 lg:col-span-6"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <SliderPrimary />
      </div>
      <div className="col-span-10 lg:col-span-4 grid gap-2 lg:gap-0 grid-cols-2 lg:grid-cols-1 lg:mb-0">
        <Image
          className="shadow-md"
          data-aos="zoom-in"
          data-aos-delay="80"
          data-aos-duration="1000"
          width={570}
          height={213}
          alt=""
          src={"/hidrateysuaviza.png"}
        />

        <Image
          className="shadow-md lg:-mt-7"
          data-aos="zoom-in"
          data-aos-delay="120"
          data-aos-duration="1000"
          width={570}
          height={213}
          alt=""
          src={"/Rectangle.png"}
        />
      </div>
    </div>
  );
};

export default SliderHome;
