"use client";

import Link from "next/link";
import React from "react";
import ImageWithFallback from "@ft/components/ImageWithFallback/imageFallback";

import ButtonProduct from "@ft/app/(public)/Buscar/components/Product/buttonProduct";

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

const getImageProduct = (codigo: string) => {
  return `https://www.droguerialaeconomia.com/economia/site/img/1x/${codigo}.jpg`;
};

const ProductsSearh = ({ Data }: { Data: Producto }) => {
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden border-gray-300 border-2 rounded-lg text-center">
        <Link
          scroll={true}
          href={`/producto/${Data.codigo}/${Data.descripcion.replace(
            /\s+|[¿]|[?]|[%]|[/]/g,
            "-"
          )}`}
        >
          <ImageWithFallback
            className="h-60 w-60 rounded-t-lg hover:scale-95 transition-transform"
            alt={Data.descripcion}
            key={Data.codigo}
            width={300}
            height={300}
            src={getImageProduct(Data.codigo)}
            fallbackSrc={"/images/products/imagenoencontrada.svg"}
          />
        </Link>
        {Data.Antes > Data.Ahora ?? (
          <div
            className="p-1 rounded-r-md text-white font-medium bg-pumpkin absolute top-4 
                md:rounded-r-lg md:p-1.5"
          >
            -{Data.Porcentaje}%
          </div>
        )}

        <hr className="w-full h-0.5 mx-auto bg-gray-300 border-0 " />
        <div className="mx-4 mb-3">
          <div className="block h-14 mt-3 mb-4">
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
export default ProductsSearh;
