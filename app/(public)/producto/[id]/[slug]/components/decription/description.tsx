"use client";

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const Options = [
  { name: "Descripción", value: 1 },
  { name: "Modo de empleo", value: 2 },
  { name: "Composición", value: 3 },
  { name: "Consejos farmacéuticos", value: 4 },
  { name: "Compartir", value: 5 },
];

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

const Description = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <>
      <div className="hidden lg:block border-gray-300 border-2 rounded-lg p-6 mt-8">
        {Options.map((opt) => (
          <button
            className={classNames(
              toggleState === opt.value
                ? "active-tabs text-bluet border-b-2 border-bluet"
                : "text-gray-500",
              "tabs text-sm md:text-base mr-6 pb-4"
            )}
            onClick={() => setToggleState(opt.value)}
            key={opt.value}
          >
            {opt.name}
          </button>
        ))}
        <hr className="w-full h-0.5 mx-auto bg-[#D9D9D9] border-0 -mt-0.5" />
        <div
          className={
            toggleState === 1 ? "content active-content w-full " : "hidden "
          }
        >
          <p className="text-gray-600 mt-4"></p>
        </div>

        <div
          className={
            toggleState === 5 ? "content  active-content w-full " : "hidden"
          }
        >
          <div className="mt-6 flex gap-6">
            <a href="">
              <Image
                className="flex-shrink-0 w-9 h-9"
                width={30}
                height={30}
                alt="botton whatsapp"
                src={"/icons/social/whatsapp.svg"}
              />
            </a>
            <a href="">
              <Image
                className="flex-shrink-0 w-9 h-9"
                width={30}
                height={30}
                alt="botton mail"
                src={"/icons/social/mail.svg"}
              />
            </a>
            <a href="">
              <Image
                className="flex-shrink-0 w-9 h-9"
                width={30}
                height={30}
                alt="botton facebook"
                src={"/icons/social/facebook.svg"}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="w-full ">
          <div className="lg:mx-auto mx-0 w-full lg:max-w-md bg-white">
            <div className="border-t-2 border-gray-300">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between  bg-white px-4 py-2 text-left text-sm ">
                      <span
                        className={classNames(
                          open ? "text-bluet" : "text-gray-800",
                          "font-medium "
                        )}
                      >
                        Descripción
                      </span>
                      <div
                        className={`${
                          open ? "rotate-180 transform" : "mt-2"
                        } h-4 w-4 `}
                      >
                        <svg
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={classNames(
                              open ? "fill-bluet" : "fill-gray-800 "
                            )}
                            d="M1.01154 0.129218C1.16817 -0.0274098 1.41327 
                                                    -0.0416487 1.58598 0.086501L1.63546 0.129218L5.44115 3.93471L9.24684 0.129218C9.40346 -0.0274098 9.64856 -0.0416487 9.82127 
                                                    0.086501L9.87075 0.129218C10.0274 0.285845 10.0416 0.530941 9.91347 0.703654L9.87075 0.753135L5.75311 4.87078C5.59648 5.02741
                                                    5.35138 5.04165 5.17867 4.9135L5.12919 4.87078L1.01154 0.753135C0.839252 0.580845 0.839252 0.301508 1.01154 0.129218Z"
                          />
                        </svg>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 mb-2 text-sm text-gray-500">
                      <p className="text-gray-600 mt-4">
                        DESODORANTE REXONA ANTIBACTERIAL INVISIBLE MEN SPRAY X
                        90G Rexona Protección Antibacterial* + Invisible con
                        tecnología MotionSense™ fue desarrollado especialmente
                        para quienes además de buscar sentirse frescos y
                        protegidos de la transpiración y del mal olor hasta por
                        48 horas, quieren proteger su ropa de las manchas
                        blancas y amarillas. *Testeo in vivo realizado con S.
                        epidermis. Producto cosmético sin acción terapéutica.
                        Beneficios: • Exclusiva tecnología Motionsense™:
                        protección diseñada para mantenerte en movimiento. •
                        Nuestra mejor fórmula anti-manchas: Protege de las
                        manchas blancas, amarillas y de la transpiración. • 48
                        horas de protección contra la transpiración y el mal
                        olor. • Dermatológicamente probado. • 0% alcohol
                        etílico. • No daña la capa de ozono. Registro Sanitario:
                        NSOC28905-16PE
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between  bg-white px-4 py-2 text-left text-sm ">
                      <span
                        className={classNames(
                          open ? "text-bluet" : "text-gray-800",
                          "font-medium "
                        )}
                      >
                        Modo de empleo
                      </span>
                      <div
                        className={`${
                          open ? "rotate-180 transform" : "mt-2"
                        } h-4 w-4 `}
                      >
                        <svg
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={classNames(
                              open ? "fill-bluet" : "fill-gray-800 "
                            )}
                            d="M1.01154 0.129218C1.16817 -0.0274098 1.41327 -0.0416487
                                                     1.58598 0.086501L1.63546 0.129218L5.44115 3.93471L9.24684 0.129218C9.40346 -0.0274098 9.64856 -0.0416487 9.82127 0.086501L9.87075
                                                      0.129218C10.0274 0.285845 10.0416 0.530941 9.91347 0.703654L9.87075 0.753135L5.75311 4.87078C5.59648 5.02741 5.35138 5.04165 
                                                      5.17867 4.9135L5.12919 4.87078L1.01154 0.753135C0.839252 0.580845 0.839252 0.301508 1.01154 0.129218Z"
                          />
                        </svg>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 mb-2 text-sm text-gray-500">
                      <></>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between  bg-white px-4 py-2 text-left text-sm ">
                      <span
                        className={classNames(
                          open ? "text-bluet" : "text-gray-800",
                          "font-medium "
                        )}
                      >
                        Composición
                      </span>
                      <div
                        className={`${
                          open ? "rotate-180 transform" : "mt-2"
                        } h-4 w-4 `}
                      >
                        <svg
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={classNames(
                              open ? "fill-bluet" : "fill-gray-800 "
                            )}
                            d="M1.01154 0.129218C1.16817 -0.0274098 1.41327 -0.0416487 
                                                    1.58598 0.086501L1.63546 0.129218L5.44115 3.93471L9.24684 0.129218C9.40346 -0.0274098 9.64856 -0.0416487 9.82127 0.086501L9.87075
                                                     0.129218C10.0274 0.285845 10.0416 0.530941 9.91347 0.703654L9.87075 0.753135L5.75311 4.87078C5.59648 5.02741 5.35138 5.04165 
                                                     5.17867 4.9135L5.12919 4.87078L1.01154 0.753135C0.839252 0.580845 0.839252 0.301508 1.01154 0.129218Z"
                          />
                        </svg>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 mb-2 text-sm text-gray-500">
                      <></>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between  bg-white px-4 py-2 text-left text-sm ">
                      <span
                        className={classNames(
                          open ? "text-bluet" : "text-gray-800",
                          "font-medium "
                        )}
                      >
                        Consejos farmacéuticos
                      </span>
                      <div
                        className={`${
                          open ? "rotate-180 transform" : "mt-2"
                        } h-4 w-4 `}
                      >
                        <svg
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={classNames(
                              open ? "fill-bluet" : "fill-gray-800 "
                            )}
                            d="M1.01154 0.129218C1.16817 -0.0274098 1.41327 -0.0416487 
                                                    1.58598 0.086501L1.63546 0.129218L5.44115 3.93471L9.24684 0.129218C9.40346 -0.0274098 9.64856 -0.0416487 9.82127 0.086501L9.87075 
                                                    0.129218C10.0274 0.285845 10.0416 0.530941 9.91347 0.703654L9.87075 0.753135L5.75311 4.87078C5.59648 5.02741 5.35138 5.04165 5.17867 
                                                    4.9135L5.12919 4.87078L1.01154 0.753135C0.839252 0.580845 0.839252 0.301508 1.01154 0.129218Z"
                          />
                        </svg>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 mb-2 text-sm text-gray-500">
                      <></>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between  bg-white px-4 py-2 text-left text-sm ">
                      <span
                        className={classNames(
                          open ? "text-bluet" : "text-gray-800",
                          "font-medium "
                        )}
                      >
                        Compartir
                      </span>
                      <div
                        className={`${
                          open ? "rotate-180 transform" : "mt-2"
                        } h-4 w-4 `}
                      >
                        <svg
                          width="15"
                          height="10"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={classNames(
                              open ? "fill-bluet" : "fill-gray-800 "
                            )}
                            d="M1.01154 0.129218C1.16817 -0.0274098 1.41327 -0.0416487 
                                                    1.58598 0.086501L1.63546 0.129218L5.44115 3.93471L9.24684 0.129218C9.40346 -0.0274098 9.64856 -0.0416487 9.82127 0.086501L9.87075
                                                     0.129218C10.0274 0.285845 10.0416 0.530941 9.91347 0.703654L9.87075 0.753135L5.75311 4.87078C5.59648 5.02741 5.35138 5.04165 
                                                     5.17867 4.9135L5.12919 4.87078L1.01154 0.753135C0.839252 0.580845 0.839252 0.301508 1.01154 0.129218Z"
                          />
                        </svg>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 mb-2 text-sm text-gray-500">
                      <div className="mt-6 flex gap-6">
                        <a href="">
                          <Image
                            className="flex-shrink-0 w-9 h-9"
                            width={30}
                            height={30}
                            alt="botton whatsapp"
                            src={"/icons/social/whatsapp.svg"}
                          />
                        </a>
                        <a href="">
                          <Image
                            className="flex-shrink-0 w-9 h-9"
                            width={30}
                            height={30}
                            alt="botton mail"
                            src={"/icons/social/mail.svg"}
                          />
                        </a>
                        <a href="">
                          <Image
                            className="flex-shrink-0 w-9 h-9"
                            width={30}
                            height={30}
                            alt="botton facebook"
                            src={"/icons/social/facebook.svg"}
                          />
                        </a>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
