"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Aos({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 50,
      once: true,
    });
  }, []);
  return <>{children}</>;
}
export default Aos;
