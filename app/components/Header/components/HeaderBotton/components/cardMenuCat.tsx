"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { useMenu } from "@ft/app/context/menuContext";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useRouter } from "next/navigation";

import { useFilter } from "@ft/app/context/filterContex";
import { CategoryData } from "../../../models";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CardMenuCat() {
  const router = useRouter();
  const { menu, handleMenu }: any = useMenu();

  const { hadleOptionCodigo }: any = useFilter();

  const [Category, setCategory] = useState<CategoryData>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
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
  }, []);

  const handlePrueba = (id: string, descripcion: string) => {
    handleMenu();
    hadleOptionCodigo(id, descripcion);
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/Filtrado");
  };
  return (
    <Transition.Root show={menu} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={handleMenu}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity  " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden z-50 cursor-[url('/icons/blue/closeMenu.svg'),_pointer]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pt-40 ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto cursor-default relative w-screen max-w-md overflow-y-auto shadow-2xl">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pr-2 sm:-ml-10 sm:pr-4"></div>
                  </Transition.Child>
                  <div className="flex h-full flex-col bg-white">
                    <div className="">
                      <div className="w-full ">
                        <div className="lg:hidden block border border-gray-300 rounded-lg h-min mb-8">
                          <h3 className="bg-gray-200 font-normal text-lg p-2">
                            Categoría
                          </h3>
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
                                            <BiPlus
                                              className="h-5 w-5 "
                                              aria-hidden="true"
                                            />
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
                                                        open
                                                          ? "text-bluet"
                                                          : "",
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
                                                    {option.Subcategorias.map(
                                                      (subcate) => (
                                                        <Disclosure
                                                          as="div"
                                                          key={
                                                            option.IdCategoria
                                                          }
                                                          className="border-b border-gray-200"
                                                        >
                                                          {({ open }) => (
                                                            <Disclosure.Button
                                                              onClick={() => {
                                                                handlePrueba(
                                                                  subcate.IdSubcategoria,
                                                                  subcate.Subcategoria
                                                                );
                                                              }}
                                                              key={
                                                                subcate.IdSubcategoria
                                                              }
                                                              className="w-full flex text-sm ml-12 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 py-2"
                                                            >
                                                              <span
                                                                className={
                                                                  open
                                                                    ? "font-medium text-gray-900 text-left hover:text-bluet"
                                                                    : "font-medium text-gray-900 text-left hover:text-bluet "
                                                                }
                                                              >
                                                                {
                                                                  subcate.Subcategoria
                                                                }
                                                              </span>
                                                            </Disclosure.Button>
                                                          )}
                                                        </Disclosure>
                                                      )
                                                    )}
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
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
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
