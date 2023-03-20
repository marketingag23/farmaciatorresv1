"use client";

import { Fragment, Suspense } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { useMenu } from "@ft/app/context/menuContext";
import { useCart } from "@ft/app/context/cartContext";
import { ImageFallback } from "@ft/components";
import ButtonQty from "@ft/app/(public)/producto/[id]/[slug]/components/ButtonQty/buttonQty";
import Link from "next/link";

export default function CardMenu() {
  const { stor, handleStor }: any = useMenu();

  const { cart, deleteCart, total }: any = useCart();

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Transition.Root show={stor} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={handleStor}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-gray-700 bg-opacity-50 backdrop-blur-sm transition-opacity  " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden z-50  cursor-[url('/icons/blue/closeMenu.svg'),_pointer]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto cursor-default relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="lg:hidden rounded-md focus:outline-none"
                        onClick={() => handleStor()}
                      >
                        <span className="sr-only">Close panel</span>
                        <Image
                          src={"/icons/white/closeMenu.svg"}
                          width={20}
                          height={20}
                          alt={"boton clore"}
                        />
                        {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col  bg-white shadow-xl">
                    <div className="relative flex-1 px-4 sm:px-6 overflow-y-auto">
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((product: any) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Suspense>
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
                                        width={200}
                                        height={200}
                                        // objectFit="cover"
                                        src={`https://www.droguerialaeconomia.com/economia/site/img/1x/${product.codigo}.jpg`}
                                        fallbackSrc={
                                          "/images/products/imagenoencontrada.svg"
                                        }
                                      />
                                    </Link>
                                  </Suspense>
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
                                            {formatterPeso.format(
                                              product.Antes
                                            )}
                                          </p>
                                          <p className="text-pumpkin font-bold ml-2 text-base">
                                            {formatterPeso.format(
                                              product.Ahora
                                            )}
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
                                    <span className="text-pumpkin">
                                      {product.qty}
                                    </span>{" "}
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
                    <button
                      className="hover:text-red-500 py-2"
                      onClick={() => deleteCart()}
                    >
                      Vaciar carrito
                    </button>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formatterPeso.format(total)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Valor del domicilio: $2.000
                      </p>
                      <div className="mt-6">
                        <a
                          href={"/Resumen"}
                          className="flex items-center justify-center rounded-md border border-transparent bg-bluet px-6 py-3 text-base 
                                                    font-medium text-white shadow-sm hover:bg-[#4579FF]"
                        >
                          Finalizar compra
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          o
                          <button
                            type="button"
                            className="ml-1 font-medium text-bluet hover:text-[#4579FF]"
                            onClick={() => handleStor()}
                          >
                            Seguir comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
