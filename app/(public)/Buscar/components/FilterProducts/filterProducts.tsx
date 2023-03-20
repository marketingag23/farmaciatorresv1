"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductLoading } from "@ft/components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import ProductsSearh from "../Product/product";

// import { Products } from '@ft/app/models';
const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

interface Products {
  success: boolean;
  message: string;
  data: Producto[];
}

interface Producto {
  rownum: string;
  codigo: string;
  idclientes: string;
  subgrupo35: string;
  Categoria: string;
  subgrupo36: string;
  Subcategoria: string;
  descripcion: string;
  stock: number;
  Antes: number;
  Ahora: number;
  Porcentaje: number;
  VlrMinimo: number;
  idoferta: number;
  Cant: number;
  IdUnidad: number;
  descripcion_adicional: any;
  valor_contenido: string;
  MaximaVenta: number;
  Nro: number;
}

export default function FilterProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const IdCategory = searchParams.get("categoria");
  const Pagination = searchParams.get("pag");

  const [Category, setCategory] = useState<Products>();
  const [isLoading, setIsLoading] = useState(false);
  const [productCant, setProductCant] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    // if (props.codigo.length > 0) {
    fetch(`${handleURL()}/api/filterCategory/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        codigo: IdCategory,
        pagina: Pagination,
      }),
      cache: "force-cache",
    })
      .then((response) => response.json())
      .then((Data) => {
        if (Data.success) {
          setCategory(Data);
          setProductCant(Data.data.length - 1);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
  }, [IdCategory, Pagination]);

  const handleNextPage = () => {
    if (Pagination === null || Number(Pagination) <= 1) {
      router.push(`/Buscar?categoria=${IdCategory}&pag=2`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(
        `/Buscar?categoria=${IdCategory}&pag=${Number(Pagination) + 1}&pag=1`
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <Image
        className="sticky top-[9rem] z-10 bg-white py-4 -mt-4"
        src="/images/banners/labios.png"
        width={1280}
        height={119}
        alt="banner labios"
      />
      <div className="mx-auto max-w-2xl lg:max-w-7xl mt-4">
        {productCant !== 0 ? (
          !Category?.success ? (
            <p>No hay resultados</p>
          ) : (
            <>
              <div
                className="grid grid-cols-2 gap-4
                sm:grid-cols-3 xl:grid-cols-4 lg:gap-4"
              >
                {isLoading ? (
                  <>
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
                ) : (
                  Category.data.map((item, index: number) => (
                    <div
                      key={item.codigo}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      data-aos-duration="700"
                    >
                      {!item.Nro ? <ProductsSearh Data={item} /> : <></>}
                    </div>
                  ))
                )}
              </div>
              <nav className="flex justify-between">
                {Pagination === null || Number(Pagination) <= 1 ? (
                  <button
                    className="bg-bluet text-white transition-colors font-normal py-1.5 px-3 rounded-md md:text-base md:rounded-lg 
                  lg:text-lg focus:outline-none flex opacity-50"
                  >
                    <BsArrowLeft className="mt-1 mr-3" />
                    Anterior
                  </button>
                ) : (
                  <button
                    className="bg-bluet text-white transition-colors hover:bg-[#4579FF] font-normal py-1.5 px-3 rounded-md md:text-base md:rounded-lg 
                    lg:text-lg focus:outline-none flex"
                    onClick={() => {
                      router.push(
                        `/Buscar?categoria=${IdCategory}&pag=${
                          Number(Pagination) - 1
                        }`
                      );
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <BsArrowLeft className="mt-1 mr-3" />
                    Anterior
                  </button>
                )}

                <button
                  className="bg-bluet text-white transition-colors hover:bg-[#4579FF] font-normal py-1.5 px-3 rounded-md md:text-base md:rounded-lg 
                                lg:text-lg focus:outline-none flex"
                  onClick={() => handleNextPage()}
                >
                  Siguiente <BsArrowRight className="mt-1 ml-3" />
                </button>
              </nav>
            </>
          )
        ) : (
          <div className="h-96">
            <div
              className="bg-white rounded-xl shadow-2xl p-11 flex"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <span className="text-2xl font-semibold mt-2 mr-9">
                Lo sentimos, no se encontraron más resultados
              </span>
              <button
                className="bg-bluet text-white transition-colors hover:bg-[#4579FF] font-normal py-3 px-3 rounded-md md:text-base md:rounded-lg 
                    lg:text-lg focus:outline-none flex"
                onClick={() => {
                  router.back();
                }}
              >
                <BsArrowLeft className="mt-1 mr-3" />
                Volver Anterior
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
