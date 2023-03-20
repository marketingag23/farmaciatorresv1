"use client";

import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { useFilter } from "@ft/app/context/filterContex";
import { CategoryData } from "../../models";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";
function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

function generarNumeroAleatorio() {
  const min = 1;
  const max = 999;
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  return numeroAleatorio;
}

export default function FilterCategory() {
  const { hadleOptionCodigo }: any = useFilter();
  // console.log(breashure)

  const [Category, setCategory] = useState<CategoryData>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // if (props.codigo.length > 0) {
    fetch(`${handleURL()}/api/CatetAndSub/cateAndSub`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache: "force-cache",
    })
      .then((response) => response.json())
      .then((Data) => {
        if (Data) {
          setCategory(Data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
    // }
  }, []);

  const handleLinkFilter = (id: string, descripcion: string) => {
    hadleOptionCodigo(id, descripcion);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="hidden lg:block border border-gray-300 rounded-lg h-min mb-8"
      // data-aos="zoom-in"
      // data-aos-delay="450"
      // data-aos-duration="700"
    >
      <h3 className="bg-gray-200 font-normal text-lg p-2">Categoría</h3>
      {isLoading ? (
        <>Cargando..</>
      ) : (
        Category?.data.map((section) => (
          <Disclosure
            as="div"
            key={`${section.IdGrupo}${generarNumeroAleatorio()}`}
            className="border-b border-gray-200"
          >
            {({ open }) => (
              <>
                <h3 className="flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between pr-3 text-sm text-gray-900 hover:text-bluet">
                    <span
                      className={classNames(
                        open ? "text-bluet" : "",
                        "font-medium  p-3 text-left"
                      )}
                    >
                      {section.Grupo}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <BiMinus
                          className="h-5 w-5 text-bluet"
                          aria-hidden="true"
                        />
                      ) : (
                        <BiPlus className="h-5 w-5 " aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="text-left">
                  <div className="space-y-4">
                    {section.Categorias.map((option) => (
                      <Disclosure
                        as="div"
                        key={`${option.IdCategoria}${generarNumeroAleatorio()}`}
                        className="border-b border-gray-200"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between pr-3 pl-6 text-sm text-gray-900 hover:text-bluet -mt-3">
                                <span
                                  className={classNames(
                                    open ? "text-bluet" : "",
                                    "font-medium text-left  p-3 mr-4"
                                  )}
                                >
                                  {option.Categoria}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <BiMinus
                                      className="h-5 w-5 text-bluet"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BiPlus
                                      className="h-5 w-5 "
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pr-4">
                              <div className="overflow-y-auto overflow-x-hidden max-h-60">
                                {option.Subcategorias.map((subcate) => (
                                  <Disclosure
                                    as="div"
                                    key={`${
                                      option.IdCategoria
                                    }${generarNumeroAleatorio()}`}
                                    className="border-b border-gray-200"
                                  >
                                    <button
                                      key={`${
                                        option.IdCategoria
                                      }${generarNumeroAleatorio()}`}
                                      className="w-full flex text-sm ml-12 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 py-2"
                                      onClick={() =>
                                        handleLinkFilter(
                                          subcate.IdSubcategoria,
                                          subcate.Subcategoria
                                        )
                                      }
                                    >
                                      <span
                                        className={
                                          open
                                            ? "font-medium text-gray-900 text-left hover:text-bluet"
                                            : "font-medium text-gray-900 text-left hover:text-bluet "
                                        }
                                      >
                                        {subcate.Subcategoria}
                                      </span>
                                    </button>
                                  </Disclosure>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))
      )}
    </div>
  );
}
