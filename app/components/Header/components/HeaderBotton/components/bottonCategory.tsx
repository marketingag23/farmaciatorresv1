/* This example requires Tailwind CSS v2.0+ */

"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import ProductoMenu from "./categorySubPAnel";

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BottonCategory({ props }: any) {
  const [subCategory, setSutcategory] = useState([]);
  const [subCatCodigo, setSubCatCodigo] = useState("");
  const [subCatTitle, setSubCatTitle] = useState("");
  const [titleCategory, setTitlecategory] = useState("");

  const handleSubCategory = (category: any, title: any) => {
    setSutcategory(category);
    setTitlecategory(title);
  };

  return (
    <>
      <Popover className="relative ">
        {({ open }) => (
          <>
            <div className="ml-auto  ">
              <Popover.Button
                className={classNames(
                  open ? "bg-blue-400" : "",
                  "text-white gap-3 group bg-bluet p-0.5 rounded-md inline-flex items-center text-base font-medium focus:outline-none py-[0.2rem] pl-5 pr-3"
                )}
              >
                <Image
                  className="w-6 lg:w-5"
                  src={"/icons/white/menu.svg"}
                  alt="icono busqueda"
                  width={40}
                  height={40}
                />
                <p className="text-sm">Categorías</p>
                <Image
                  className={classNames(
                    open ? "-scale-y-100" : "",
                    "lg:w-6 duration-500"
                  )}
                  src={"/icons/white/flecha.svg"}
                  alt="icono busqueda"
                  width={40}
                  height={40}
                />
              </Popover.Button>
            </div>
            <Popover.Overlay
              className="z-20 overflow-y-hidden cursor-[url('/icons/blue/closeMenu.svg'),_pointer] lg:mt-[8.4rem] h-screen fixed
              inset-0 bg-gray-700 bg-opacity-50 backdrop-blur-sm transition-opacity"
            />
            {open && (
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-40 transform top-11">
                  <div
                    className=" lg:left-5 left-[80%] border-t-2 border-l-2 border-gray-300  z-50 w-3 h-3 bg-white
                                absolute -top-[0.4rem] rotate-45 skew-x-12 skew-y-12"
                  ></div>
                  <div className="inset-0 flex" aria-hidden="true">
                    <div className="bg-white w-1/2" />
                    <div className="bg-gray-50 w-1/2" />
                  </div>

                  <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5  rounded-lg h-[19rem] ">
                    <nav
                      className={classNames(
                        subCategory.length !== 0 ? "" : "rounded-r-lg",
                        "overflow-y-auto grid col-span-1gap-y-10 bg-white sm:grid-cols-1 sm:gap-x-8 rounded-l-lg border-2 border-gray-300"
                      )}
                      aria-labelledby="solutions-heading"
                    >
                      <div className="">
                        <ul role="list" className="text-sm">
                          {props.map((option: any) => (
                            <li
                              key={option.IdGrupo}
                              className="flow-root text-sm"
                            >
                              <button
                                onDoubleClick={() => {
                                  setSutcategory([]);
                                  setSubCatCodigo("");
                                  setSubCatTitle("");
                                }}
                                onMouseEnter={() =>
                                  handleSubCategory(
                                    option.Categorias,
                                    option.Grupo
                                  )
                                }
                                className={classNames(
                                  titleCategory === option.Grupo
                                    ? "text-bluet bg-[#EFF4FF]"
                                    : "",
                                  "justify-between p-3 flex items-center rounded-md text-base font-medium text-gray-900 w-full hover:text-bluet hover:bg-[#EFF4FF]"
                                )}
                              >
                                <span className="flex text-sm">
                                  {option.Grupo}
                                </span>
                                <svg
                                  className="-rotate-90 ml-2"
                                  width="12"
                                  height="4"
                                  viewBox="0 0 15 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    className="fill-slate-500"
                                    d="M1.08498 1.20572C1.08498 1.13512 1.12662 1.04686 1.18907 0.9939C1.33479 0.870336 1.56378 0.870336 1.7095 0.976248L7.28851 5.42456C7.3926 5.51282 
                                                                7.57995 5.51282 7.70486 5.42456L13.2839 0.976249C13.4296 0.852685 13.6586 0.870336 13.8043 0.993901C13.95 1.11746 13.9292
                                                                1.31164 13.7835 1.4352L8.20447 5.88351C7.80894 6.1836 7.18443
                                                                6.1836 6.80972 5.88351L1.20989 1.4352C1.12662 1.36459 1.08498 1.29398 1.08498 1.20572Z"
                                  />
                                  <path
                                    className="fill-slate-500"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2.15466 0.555824L7.49668 4.81518L12.8217 
                                                                0.569372C13.2751 0.193374 13.9224 0.295214 14.2753 0.594475C14.7291 0.97925 14.6098 1.53339 14.2545 1.83461L14.24 
                                                                1.8469L8.64879 6.3046C8.0078 6.79091 6.99159 6.80521 6.35339 6.29502C6.35303 6.29474 6.35374 6.29531 6.35339 6.29502L0.738596 
                                                                1.83483C0.564259 1.687 0.418833 1.48002 0.418833 1.20572C0.418833 0.987009 0.529232 0.754566 0.71803 0.594474C1.11892
                                                                0.254537 1.74283 0.256496 2.14303 0.547365L2.15466 0.555824ZM6.80972 5.88351C7.18443 6.1836 7.80894 6.1836 8.20447 
                                                                5.88351L13.7835 1.4352C13.9292 1.31164 13.95 1.11746 13.8043 0.993901C13.6586 0.870336 13.4296 0.852685 13.2839
                                                                0.976249L7.70486 5.42456C7.57995 5.51282 7.3926 5.51282 7.28851 5.42456L1.7095 0.976248C1.56378 0.870336 1.33479 
                                                                0.870336 1.18907 0.9939C1.12662 1.04686 1.08498 1.13512 1.08498 1.20572C1.08498 1.29398 1.12662 1.36459 1.20989
                                                                1.4352L6.80972 5.88351Z"
                                  />
                                </svg>
                              </button>
                              <hr className="w-full border-gray-300" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>

                    <div
                      className={classNames(
                        subCategory.length !== 0
                          ? subCatCodigo === ""
                            ? "rounded-r-lg border-y-2 border-r-2 border-gray-300"
                            : ""
                          : "hidden",
                        " overflow-y-scroll col-span-1 bg-white border-y-2 border-gray-300"
                      )}
                    >
                      <div className="p-3 w-56">
                        <ul role="list" className="">
                          <li className="font-semibold mb-2 text-sm">
                            <h3>{titleCategory || ""}</h3>
                          </li>
                          {subCategory.length !== 0 ? (
                            subCategory.map((a: any) => (
                              <li
                                key={a.Subcategorias[0].IdSubcategoria}
                                className="flow-root"
                              >
                                <button
                                  onMouseEnter={() => {
                                    setSubCatCodigo(
                                      a.Subcategorias[0].IdSubcategoria
                                    );
                                    setSubCatTitle(
                                      a.Subcategorias[0].Subcategoria
                                    );
                                  }}
                                  className={classNames(
                                    subCatTitle ===
                                      a.Subcategorias[0].Subcategoria
                                      ? "text-bluet bg-[#EFF4FF]"
                                      : "",
                                    "w-full p-2.5 flex items-center rounded-md text-base font-medium text-gray-900 hover:text-bluet hover:bg-[#EFF4FF]"
                                  )}
                                >
                                  <span className="text-left text-sm">
                                    {a.Subcategorias[0].Subcategoria}
                                  </span>
                                </button>
                              </li>
                            ))
                          ) : (
                            <></>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div
                      className={classNames(
                        subCatCodigo !== "" ? "" : "hidden",
                        "col-span-3 bg-white  rounded-r-lg border-y-2 border-r-2 border-gray-300 pr-2"
                      )}
                    >
                      <ProductoMenu
                        props={{ codigo: subCatCodigo, title: subCatTitle }}
                      />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            )}
          </>
        )}
      </Popover>
    </>
  );
}
