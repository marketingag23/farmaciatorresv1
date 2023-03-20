/* This example requires Tailwind CSS v2.0+ */

"use client";

import { useState, Fragment } from "react";

import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import Link from "next/link";

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BottonAcont() {
  const { data: session }: any = useSession();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const hadleSubmit = async (e: any) => {
    e.preventDefault();
    const result: any = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
      // callbackUrl: "/",
    });

    if (result.ok) {
      //   setTimeout(function(){
      //     toast.success(`Hola, ${session.user.data.nombres}`);
      // }, 3000);
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div className="ml-auto">
            <Popover.Button
              // onClick={handleOpenModal}
              className={classNames(
                open ? "bg-blue-400" : "",
                " group bg-bluet p-0.5 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
              )}
            >
              <Image
                className="w-6 lg:w-9"
                src={"/icons/white/UserRounded.svg"}
                alt="icono usuario"
                width={40}
                height={40}
              />
            </Popover.Button>
          </div>
          <Popover.Overlay
            className="z-20 overflow-y-hidden cursor-[url('/icons/blue/closeMenu.svg'),_pointer] lg:mt-[8.4rem] mt-[9.7rem] h-screen fixed
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
              {!session?.user ? (
                <Popover.Panel
                  static
                  className="absolute z-30 lg:left-6 -left-[4.5rem] transform -translate-x-1/2 mt-3 px-2 
                  w-64 max-w-xs sm:px-0 lg:top-10 top-11 "
                >
                  <div
                    className=" lg:left-[46%] left-[80%] border-t-2 border-l-2 border-gray-300  z-50 w-4 h-4 bg-white absolute
                                -top-[0.5rem] rotate-45 skew-x-12 skew-y-12"
                  ></div>

                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="border-gray-300 rounded-lg border-2 shadow-md relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6">
                      <form
                        className="space-y-5"
                        onSubmit={hadleSubmit}
                        action=""
                      >
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-xs font-semibold text-gray-700"
                          >
                            Correo electrónico
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              onChange={handleChange}
                              required
                              placeholder="Ingresa tu correo"
                              className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="password"
                            className="block  mb-2 font-semibold text-xs text-gray-700"
                          >
                            Contraseña
                          </label>
                          <div className="mt-1">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              onChange={handleChange}
                              required
                              placeholder="Ingresa tu contraseña"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-300 
                                                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="text-xs text-center">
                          <a
                            href="#"
                            className="font-medium text-pumpkin underline"
                          >
                            ¿Olvidaste tu contraseña?
                          </a>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                                                    text-white bg-bluet hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Iniciar sesión
                          </button>
                        </div>
                      </form>
                      <div className="text-center text-xs">
                        <a
                          href="/Registrarse"
                          className="font-semibold text-bluet underline"
                        >
                          Crear una cuenta
                        </a>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              ) : (
                <Popover.Panel
                  static
                  className="absolute z-30 lg:left-6 -left-[4.5rem] transform -translate-x-1/2 mt-3 px-2 w-64 max-w-xs sm:px-0 
                  lg:top-16 top-11 "
                >
                  <div
                    className=" lg:left-[46%] left-[80%] border-t-2 border-l-2 border-gray-300  z-50 w-4 h-4 bg-white absolute
                                -top-[0.5rem] rotate-45 skew-x-12 skew-y-12"
                  ></div>

                  <div
                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden 
                  border-b-2 border-gray-400"
                  >
                    <div
                      className="border-gray-300 rounded-lg border-2 shadow-md relative grid
                    bg-white w-full text-left text-sm font-semibold text-gray-500 "
                    >
                      <Link
                        className="px-3 py-3 border-b-2 hover:text-bluet"
                        href={"/Cuenta"}
                      >
                        Favoritos
                      </Link>
                      <Link
                        className="px-3 py-3 border-b-2 hover:text-bluet"
                        href={"/Cuenta/DatosPersonales"}
                      >
                        Datos personales
                      </Link>
                      <Link
                        className="px-3 py-3 border-b-2 hover:text-bluet"
                        href={"/Cuenta"}
                      >
                        Mis direcciones
                      </Link>
                      <Link
                        className="px-3 py-3 border-b-2 hover:text-bluet"
                        href={"/Cuenta"}
                      >
                        Cupones
                      </Link>
                      <Link
                        className="px-3 py-3 border-b-2 hover:text-bluet"
                        href={"/Cuenta"}
                      >
                        Puntos de vida sana
                      </Link>
                      <button
                        type="submit"
                        className="px-1 py-2 text-sm font-semibold text-gray-500 bg-slate-300 flex "
                        onClick={() => signOut()}
                      >
                        <Image
                          className="mr-3"
                          width={22}
                          height={22}
                          src={"/icons/gray/signOut.svg"}
                          alt="sign out"
                        />
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              )}
            </Transition>
          )}
        </>
      )}
    </Popover> // <Popover className="relative">
  );
}
