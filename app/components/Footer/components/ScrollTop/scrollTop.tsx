"use client";

import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from "react-icons/fa";
import ScrollScss from "./footer.module.scss";

export default function scrollTop() {
  return (
    <ScrollToTop
      smooth
      className={ScrollScss.transition}
      component={
        <div className="inline-block text-center text-white bg-[#8CA6EA] rounded-full shadow ripple hover:shadow-lg focus:outline-none">
          <FaAngleUp className="w-9 h-9 p-2 text-bluet" />
        </div>
      }
    />
  );
}
