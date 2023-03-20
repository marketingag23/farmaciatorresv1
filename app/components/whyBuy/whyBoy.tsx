"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@ft/components";

const Cards = [
  {
    id: 1,
    src: "/icons/white/hand.svg",
    title: "Acumula puntos por tus compras y ahorra",
    href: "#",
  },

  {
    id: 2,
    src: "/icons/white/avatarCircle.svg",
    title: "Crea tu cuenta y compra en pocos clics.",
    href: "#",
  },

  {
    id: 3,
    src: "/icons/white/discount.svg",
    title: "Descuentos en tus marcas favoritas.",
    href: "#",
  },
];

export default function WhyBuy() {
  return (
    <div className="bg-[#EDF2FF] w-full hidden sm:block">
      <Container>
        <div className=" ">
          <h1 className="text-bluet text-xl lg:text-lg font-bold flex justify-center py-10 lg:py-6 pt-6 ">
            ¿Por qué comprar con Farmacia Torres?
          </h1>
          <div className="container ">
            <div className="grid grid-cols-1 gap-4 md:gap-4  md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
              {Cards.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="focus:outline-none focus:ring  focus:ring-offset focus:ring-[#97B2F8] rounded-lg"
                  data-aos="fade-right"
                  data-aos-delay={index * 700}
                  data-aos-duration="700"
                >
                  <div className="bg-bluet hover:bg-[#4579FF] transition-colors flex flex-row p-7 lg:p-11  gap-x-3 rounded-lg">
                    <Image
                      alt={item.title}
                      src={item.src}
                      width={45}
                      height={44}
                    />
                    <div className="pt-2 flex flex-row">
                      <p className="text-base text-white font-semibold">
                        {item.title}
                      </p>
                    </div>
                    <Image
                      alt="arrow"
                      src="/icons/white/arrow.svg"
                      width={20}
                      height={11}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <br />
          <br />
        </div>
      </Container>
    </div>
  );
}
