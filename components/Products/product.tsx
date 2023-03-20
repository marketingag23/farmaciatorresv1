"use client";

import Link from "next/link";
import React from "react";
import { Datum } from "@ft/app/models";
import ButtonProduct from "@ft/components/Products/buttonProduct";
import ImageWithFallback from "../ImageWithFallback/imageFallback";

const getImageProduct = (codigo: string) => {
  return `https://www.droguerialaeconomia.com/economia/site/img/1x/${codigo}.jpg`;
};

const Products = ({ Data }: { Data: Datum }) => {
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden border-gray-300 border rounded-lg text-center">
        <Link
          className="overflow-hidden"
          scroll={true}
          href={`/producto/${Data.codigo}/${Data.descripcion.replace(
            /\s+|[¿]|[?]|[%]|[/]/g,
            "-"
          )}`}
        >
          <div className="h-40 lg:h-[10.1rem] lg:w-auto relative w-full flex justify-center items-center ">
            <ImageWithFallback
              className="rounded-t-lg hover:scale-95 transition-transform lg:h-[10.1rem] w-auto block mx-auto"
              alt={Data.descripcion}
              key={Data.codigo}
              width={1000}
              height={1000}
              // objectFit="cover"
              src={getImageProduct(Data.codigo)}
              fallbackSrc={"/images/products/imagenoencontrada.svg"}
            />
          </div>
        </Link>
        {Data.Antes > Data.Ahora ?? (
          <div
            className="p-1 rounded-r-md text-white font-medium bg-pumpkin absolute top-4 
                md:rounded-r-lg md:p-1.5"
          >
            -{Data.Porcentaje}%
          </div>
        )}
        {/* <div
          className="text-bluet p-0.5 font-medium bg-[#EFF4FF] absolute top-4 left-16  rounded-md flex border-2 border-bluet
                md:p-1.5 md:rounded-lg"
        >
          <Image
            className="mr-1 md:mr-2 "
            alt="Subtract"
            src={"/icons/products/Subtract.svg"}
            width={25}
            height={25}
          />
          {Data.codigo}
        </div> */}
        <hr className="w-full h-0.5 mx-auto bg-gray-100 border-0 " />
        <div className="mx-4 mb-3">
          <div className="h-11 lg:h-14 overflow-hidden md:h-auto md:overflow-visible ">
            <Link
              href={`/producto/${Data.codigo}/${Data.descripcion.replace(
                /\s+|[¿]|[?]|[%]|[/]/g,
                "-"
              )}`}
              className="text-[#091535] text-xs lg:text-sm font-semibold mb-2 text-clip hover:text-bluet"
            >
              {Data.descripcion.charAt(0).toUpperCase() +
                Data.descripcion.slice(1)}
            </Link>
          </div>
          {Data.Antes > Data.Ahora ? (
            <div className="flex mb-2 mt-8">
              <>
                <p
                  className="text-gray-500 text-right font-bold line-through
                        text-sm mt-0.5
                        md:w-5/12 md:text-base md:mr-2 md:mt-1
                        lg:text-sm lg:mr-1"
                >
                  {formatterPeso.format(Data.Antes)}
                </p>
                <p
                  className="text-bluet md:text-left font-bold ml-2
                        sm:text-base md:text-lg lg:text-lg"
                >
                  {formatterPeso.format(Data.Ahora)}
                </p>
              </>
            </div>
          ) : (
            <div className="flex mb-2 mt-4 text-center w-full justify-center">
              <p
                className="text-bluet  font-bold
                        sm:text-base md:text-lg lg:text-xl"
              >
                {formatterPeso.format(Data.Ahora)}
              </p>
            </div>
          )}
          <ButtonProduct Props={Data} />
          {/* <ButtonProduct Props={Data} /> */}
        </div>
      </div>
    </div>
  );
};
export default Products;
