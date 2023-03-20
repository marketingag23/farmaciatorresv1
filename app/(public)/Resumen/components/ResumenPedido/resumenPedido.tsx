"use client";

import React from "react";
import { ComtainerBorder } from "@ft/components";
import Link from "next/link";
import { useCart } from "@ft/app/context/cartContext";

export default function ResumenPedido() {
  const { total }: any = useCart();
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <ComtainerBorder>
      <h2 className="font-bold text-base lg:text-lg text-[#091535] lg:pb-5 pb-3 lg:mb-8">
        Resumen de pedido
      </h2>
      <div className="flex justify-between">
        <span className="font-bold">
          Subtotal
          <span className="font-normal text-sm"> 1 Producto</span>
        </span>
        <span className="font-bold">{formatterPeso.format(total)}</span>
      </div>
      <div className="border border-gray-300 bg-blue-50 rounded-lg my-4">
        <div className="p-4 flex justify-between ">
          <span className="font-bold">Precio de envio</span>
          <span className="font-bold">$2.000</span>
        </div>
      </div>
      <div>
        <h3 className="font-bold">¿Tienes algún descuento?</h3>
        <h3 className="font-light text-gray-400 mt-6">
          Elije un tipo de descuento
        </h3>
        <div className="border border-gray-300 bg-blue-50 rounded-lg my-4">
          <div className="p-4 flex justify-between ">
            <span className="font-light text-sm text-gray-400">
              No hay descuentos disponibles
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="border border-gray-300 rounded-lg my-4 ">
          <h3 className="px-4 mt-4 font-bold">Aplicar un código promocional</h3>
          <div className="p-4 flex justify-between ">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Introduzca su código de descuento"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-bluet rounded-r-lg border border-bluet hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border border-gray-300 bg-blue-50 rounded-lg my-4">
          <div className="p-4 flex justify-between text-lg text-bluet">
            <span className="font-bold">Total a pagar</span>
            <span className="font-bold">{formatterPeso.format(total)}</span>
          </div>
          <div className="px-6 pb-4">
            {total > 0 && (
              <Link
                href={"/Resumen/Datos"}
                className="flex items-center justify-center rounded-md border border-transparent bg-bluet px-6 py-3 text-base 
                                                    font-medium text-white shadow-sm hover:bg-[#4579FF] mt"
              >
                Continuar con la compra
              </Link>
            )}
          </div>
        </div>
      </div>
    </ComtainerBorder>
  );
}
