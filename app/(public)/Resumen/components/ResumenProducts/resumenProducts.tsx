"use client";

import React from "react";
import { useCart } from "@ft/app/context/cartContext";
import { ComtainerBorder, ImageFallback } from "@ft/components";
import ButtonQty from "@ft/app/(public)/producto/[id]/[slug]/components/ButtonQty/buttonQty";
import Link from "next/link";

export default function ResumenProducts() {
  const { cart, total }: any = useCart();

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <ComtainerBorder>
      <span className="text-xs text-bluet font-normal p-1.5 border border-bluet w-full rounded-lg">
        Consigue los gastos de <span className="font-bold">envió gratis</span>{" "}
        por compras superiores a <span className="font-bold">$99.990.</span>{" "}
        Añade más productos.
      </span>
      <div className="mt-4 ">
        {total > 0 ? (
          <div className="relative flex-1 px-4 sm:px-6 overflow-y-auto h-[37rem]">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart.map((product: any) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Link
                          href={`/producto/${
                            product.codigo
                          }/${product.descripcion.replace(
                            /\s+|[¿]|[?]|[%]|[/]/g,
                            "-"
                          )}`}
                        >
                          <ImageFallback
                            className="h-full w-full object-cover object-center"
                            alt={product.descripcion}
                            key={product.codigo}
                            width={500}
                            height={500}
                            // objectFit="cover"
                            src={`https://www.droguerialaeconomia.com/economia/site/img/1x/${product.codigo}.jpg`}
                            fallbackSrc={
                              "/images/products/imagenoencontrada.svg"
                            }
                          />
                        </Link>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col w-full">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900 hover:text-bluet">
                            <Link
                              href={`/producto/${
                                product.codigo
                              }/${product.descripcion.replace(
                                /\s+|[¿]|[?]|[%]|[/]/g,
                                "-"
                              )}`}
                              className="text-xs w-f"
                            >
                              {product.descripcion}
                            </Link>
                          </div>
                          <div className="flex text-left left">
                            {product.Antes > product.Ahora ? (
                              <>
                                <p
                                  className="text-gray-500 text-right font-bold line-through
                                                          mt-0.5  md:mr-2 md:mt-1 text-sm lg:mr-1"
                                >
                                  {formatterPeso.format(product.Antes)}
                                </p>
                                <p className="text-pumpkin font-bold ml-2 text-base">
                                  {formatterPeso.format(product.Ahora)}
                                </p>
                              </>
                            ) : (
                              <p className="text-pumpkin font-bold text-sm">
                                {formatterPeso.format(product.Ahora)}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="">
                          Cantidad: x{" "}
                          <span className="text-pumpkin">{product.qty}</span>{" "}
                          Subtotal{" "}
                          <span className="font-semibold">
                            <span className="text-pumpkin">
                              {formatterPeso.format(product.subtotal)}
                            </span>
                          </span>
                        </p>
                        <div className="flex flex-1 items-end justify-between text-sm h-24">
                          <ButtonQty
                            stock={product.stock}
                            product={product}
                            card={true}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h3 className="font-semibold p-3 text-center">
              No hay productos en tu carrito
            </h3>

            <Link
              href={"/Buscar?categoria=0100101&pag=1"}
              className="flex items-center justify-center rounded-md border border-transparent bg-bluet px-6 py-3 text-base 
                            font-medium text-white shadow-sm hover:bg-[#4579FF] mt"
            >
              Volver a tienda
            </Link>
          </>
        )}
      </div>
    </ComtainerBorder>
  );
}
