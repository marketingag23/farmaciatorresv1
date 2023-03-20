"use client";

import { useCart } from "@ft/app/context/cartContext";
import { useMenu } from "@ft/app/context/menuContext";

import { useEffect, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

// interface Producto {
//   rownum: string;
//   codigo: string;
//   idclientes: string;
//   subgrupo35: string;
//   Categoria: string;
//   subgrupo36: string;
//   Subcategoria: string;
//   descripcion: string;
//   stock: number;
//   Antes: number;
//   Ahora: number;
//   Porcentaje: number;
//   VlrMinimo: number;
//   idoferta: number;
//   Cant: number;
//   IdUnidad: number;
//   descripcion_adicional: any;
//   valor_contenido: string;
//   MaximaVenta: number;
//   Nro: number;
// }

export default function Example({ Props }: any) {
  const { validProduct, addToCart, cart }: any = useCart();
  const { handleStor }: any = useMenu();

  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    setInCart(validProduct(Props));
  }, [cart]);

  const hamdleAddCart = (product: any) => {
    if (!inCart) {
      addToCart(product, 1, 1);
    } else {
      handleStor();
    }
  };

  return (
    <>
      <button
        onClick={() => {
          hamdleAddCart(Props);
        }}
        className={classNames(
          !inCart
            ? "bg-bluet text-white transition-colors hover:bg-[#4579FF] focus:ring-[#97B2F8]"
            : "bg-gray-50 text-gray-500 focus:ring-gray-600",
          " font-semibold text-sm p-1 w-full rounded-md md:text-base md:rounded-lg lg:text-lg lg:py-0 lg:h-8             focus:outline-none focus:ring focus:ring-offset"
        )}
      >
        <p className="">{!inCart ? "Comprar" : "ver carrito"}</p>
      </button>
    </>
  );
}
