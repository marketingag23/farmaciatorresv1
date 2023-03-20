"use client";

import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useRouter } from "next/navigation";

import { CategoryData } from "../../models";
// import type { RootState } from "@ft/app/GlobalRedux/store";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "@ft/app/GlobalRedux/feactures/counter/counterSlice";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterCategory() {
  const router = useRouter();
  // const pathname = usePathname();

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

  const handlePrueba = (id: string) => {
    router.push(`/Buscar?categoria=${id}&pag=1`);
  };
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="hidden lg:block border border-gray-300 rounded-lg h-min mb-8">
      <h3 className="bg-gray-200 font-normal text-lg p-2">Categoría</h3>
      {isLoading ? (
        <>Cargando..</>
      ) : (
        Category?.data.map((section) => (
          <Disclosure
            as="div"
            key={section.IdGrupo}
            className="border-b border-gray-200"
          >
            {({ open }) => (
              <>
                <h3 className="flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between pr-3 text-sm text-gray-900 hover:text-bluet">
                    <span
                      className={classNames(
                        open ? "text-bluet" : "",
                        "font-medium  p-3"
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
                        key={option.IdCategoria}
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
                                    key={option.IdCategoria}
                                    className="border-b border-gray-200"
                                  >
                                    {({ open }) => (
                                      <Disclosure.Button
                                        onClick={() => {
                                          handlePrueba(subcate.IdSubcategoria);
                                        }}
                                        key={subcate.IdSubcategoria}
                                        className="w-full flex text-sm ml-12 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 py-2"
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
                                      </Disclosure.Button>
                                    )}
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
