"use client";

import React from "react";
import Image from "next/image";
import { useFilter } from "@ft/app/context/filterContex";
import { ProductLoading } from "@ft/components";
import ProductsSearh from "../Product/product";
// import { Products } from '@ft/app/models';

export default function FilterProducts() {
  function generarNumeroAleatorio() {
    const min = 1;
    const max = 999;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroAleatorio;
  }

  const { loading, result }: any = useFilter();
  return (
    <div className="">
      <Image
        data-aos="zoom-in"
        data-aos-delay="650"
        data-aos-duration="700"
        className="sticky top-[7rem] z-10 py-4 -mt-4 pb-4 bg-[#f8f8f8]"
        src="/images/banners/labios.png"
        width={1280}
        height={119}
        alt="banner labios"
      />
      <div className="mx-auto max-w-2xl lg:max-w-7xl mt-4">
        {result.length > 1 ? (
          <div
            className="grid grid-cols-2 gap-4
                sm:grid-cols-3 xl:grid-cols-5 lg:gap-4"
          >
            {!loading ? (
              result.map((item: any) => (
                <div
                  key={`${item.codigo}${generarNumeroAleatorio()}`}
                  data-aos="zoom-in"
                  data-aos-duration="700"
                >
                  {!item.Nro ? <ProductsSearh Data={item} /> : <></>}
                </div>
              ))
            ) : (
              <>
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <div className="mb-4" />
              </>
            )}
          </div>
        ) : (
          <div className="h-96">
            <div
              className="bg-white rounded-xl shadow-2xl p-11 flex"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <span className="text-2xl font-semibold mt-2 mr-9">
                Lo sentimos, no se encontraron resultados
              </span>
              <button
                className="bg-bluet text-white transition-colors hover:bg-[#4579FF] font-normal py-3 px-3 rounded-md md:text-base md:rounded-lg 
                    lg:text-lg focus:outline-none flex"
              >
                Limpiar filtro
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
