"use client";

import Image from "next/image";
import Link from "next/link";
import { Popover } from "@headlessui/react";

const Opctions = [
  {
    category: "Atlantico",
    slug: "Atlantico",
    subCategory: [
      { title: "Barranquilla", slug: "Barranquilla" },
      { title: "Baranoa", slug: "Baranoa" },
      { title: "Galapa", slug: "Galapa" },
      { title: "Juan de Acosta", slug: "Juan-de-Acosta" },
      { title: "Malambo", slug: "Malambo" },
      { title: "Puerto Colombia", slug: "Puerto-Colombia" },
      { title: "Sabanagrande", slug: "Sabanagrande" },
      { title: "Santo Tomas", slug: "Santo-Tomas" },
      { title: "Soledad", slug: "Soledad" },
      { title: "Usiacuri", slug: "Usiacuri" },
    ],
  },
  {
    category: "Bolívar",
    slug: "Bolivar",
    subCategory: [
      { title: "Cartagena", slug: "Cartagena" },
      { title: "Turbaco", slug: "Turbaco" },
    ],
  },
  {
    category: "Magdalena",
    slug: "Magdalena",
    subCategory: [{ title: "Salamina", slug: "Salamina" }],
  },
];

const ImageWithText = () => {
  return (
    <>
      <div className="relative z-[19]">
        <Image
          alt="banner"
          src="/images/banners/BannerLocation.svg"
          className="w-full py-5 hidden md:block"
          width={255}
          height={1246}
        />
        <Image
          alt="banner movil"
          src="/images/banners/BannerMovilLocation.svg"
          className="w-full py-5 block  md:hidden"
          width={330}
          height={240}
        />
        <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="hidden md:block md:text-6xl lg:text-7xl font-bold ">
            Atlantico
          </h1>
          <h4 className="text-white block md:hidden text-center w-52 font-bold lg:hidden text-2xl">
            Puntos de venta
          </h4>
          <div
            className="flex justify-center flex-col text-center text-xl gap-3 
                    md:flex-row md:justify-between md:text-base  md:gap-0 pt-5"
          >
            {Opctions.map((opt) => (
              <Popover key={opt.slug} className="relative">
                <Popover.Button>{opt.category}</Popover.Button>
                <Popover.Panel className="absolute z-10 bg-slate-800 max-w-md w-44 -left-12 rounded-lg">
                  <div className="grid grid-cols-1 ">
                    {opt.subCategory.map((sub) => (
                      <Link
                        key={sub.slug}
                        className="hover:text-bluet"
                        href={`/farmacias/${opt.slug}/${sub.slug}`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageWithText;
