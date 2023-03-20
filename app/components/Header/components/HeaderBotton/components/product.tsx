"use client";

import React from "react";
import { ImageFallback } from "@ft/components";
// import { useRouter } from "next/navigation";

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
  IdUnidad?: number;
  descripcion_adicional: any;
  valor_contenido: string;
  MaximaVenta: number;
  Nro: number;
}

export default function Product({ Props }: { Props: Producto }) {
  // const router = useRouter();
  // const hableUrlRedirect = () => {
  //   router.push(
  //     `/producto/${Props.codigo}/${Props.descripcion?.replace(
  //       /\s+|[¿]|[?]|[%]|[/]/g,
  //       "-"
  //     )}`
  //   );
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    // Props.Nro ?
    <a
      key={Props.codigo}
      href={`/producto/${Props.codigo}/${Props.descripcion?.replace(
        /\s+|[¿]|[?]|[%]|[/]/g,
        "-"
      )}`}
      // onClick={hableUrlRedirect}
      className="group relative"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden border-gray-300 border-2 rounded-lg text-center grid grid-cols-3">
        <div className="w-[6rem] border-gray-300 border-r-2 col-span-1">
          <ImageFallback
            className="rounded-t-lg h-[6rem]"
            alt={Props.descripcion}
            key={Props.codigo}
            width={150}
            height={150}
            // objectFit="cover"
            src={`https://www.droguerialaeconomia.com/economia/site/img/1x/${Props.codigo}.jpg`}
            fallbackSrc={"/images/products/imagenoencontrada.svg"}
          />
        </div>
        <div className="col-span-2 text-left p-2">
          <div className="">
            <p className="text-[#091535] text-sm font-semibold mb-2 sm:text-clip">
              ${Props.descripcion}
            </p>
          </div>
          <div className="flex">
            {Props.Antes > Props.Ahora
              ? `<p className="text-gray-500 text-right font-bold line-through
            text-sm mt-0.5
            md:text-base md:mt-1
            lg:text-lg">
                $${Props.Antes}
            </p>`
              : ""}
            <p
              className="text-bluet font-bold ml-2
            sm:text-base
            md:text-lg
            lg:text-2xl
            "
            >
              ${Props.Ahora}
            </p>
          </div>
        </div>
      </div>
    </a>
    // :<></>
  );
}
