"use client";

import React, { useEffect, useState, Fragment } from "react";
import { ComtainerBorder } from "@ft/components";
import { toast } from "react-hot-toast";
import { Dialog, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaTrash, FaEdit } from "react-icons/fa";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

type Address = {
  email: string;
  auth_token: string;
  nombre_direccion: string;
  direccion: string;
  ciudad: string;
};
function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}
export default function ResumenProducts() {
  const { data: session }: any = useSession();
  const router = useRouter();
  // const [addres, setAddres]: any = useState()
  const [selectAdress, setSelectAdress]: any = useState("");
  const [addAddres, setAddAddres] = useState<Address>();
  const [viewAddAddres, setViewAddAddres] = useState(false);
  const [credentials, setcredentials] = useState({
    name_adress: "",
    adress: "",
  });

  const handleChangeAddres = (Direccion: any) => {
    setSelectAdress(Direccion);
  };

  const [UserData, setUserData] = useState({
    user: {
      data: {
        nit: "",
        email: "",
        nombres: "",
        auth_token: "",
        necesita_actualizar: false,
        convenio: "",
        puntos: [],
        historialPuntos: {
          totalPuntos: [],
        },
      },
    },
  });

  const [addAddresList, setAddAddresList] = useState({
    success: false,
    data: [
      {
        nombre_direccion: "",
        direccion: "",
        ciudad: "",
      },
    ],
  });

  const [deleteAddress, setDeleteAddress] = useState<string>("");

  useEffect(() => {
    if (session !== undefined) {
      setUserData(session);
    }
  });

  function closeModal() {
    setViewAddAddres(false);
  }

  function openModal() {
    setViewAddAddres(true);
  }

  useEffect(() => {
    // if (props.codigo.length > 0) {
    fetch(`${handleURL()}/api/dirreciones/addDirecion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache: "force-cache",
      body: JSON.stringify({
        email: addAddres?.email,
        auth_token: addAddres?.auth_token,
        nombre_direccion: addAddres?.nombre_direccion,
        direccion: addAddres?.direccion,
        ciudad: addAddres?.ciudad,
      }),
    }).then((response) => response.json());
  }, [addAddres]);

  useEffect(() => {
    // if (props.codigo.length > 0) {
    if (deleteAddress.length > 0) {
      fetch(`${handleURL()}/api/dirreciones/deleteDireccion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        cache: "force-cache",
        body: JSON.stringify({
          email: addAddres?.email,
          auth_token: addAddres?.auth_token,
          nombre_direccion: deleteAddress,
        }),
      }).then((response) => response.json());
    }
  }, [deleteAddress]);

  useEffect(() => {
    if (UserData.user.data.email !== "") {
      fetch(`${handleURL()}/api/dirreciones/viewDireccions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        cache: "force-cache",
        body: JSON.stringify({
          email: UserData.user.data.email,
          auth_token: UserData.user.data.auth_token,
        }),
      })
        .then((response) => response.json())
        .then((Data) => {
          if (Data) {
            setAddAddresList(Data);
          }
        });
    }
  }, [UserData]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (credentials.adress.length >= 4 && credentials.name_adress.length >= 4) {
      setAddAddres({
        email: UserData.user.data.email,
        auth_token: UserData.user.data.auth_token,
        nombre_direccion: credentials.name_adress,
        direccion: credentials.adress,
        ciudad: "08001",
      });
      setViewAddAddres(false);
      toast.success("Nueva dirreción agregada");
      router.refresh();
    } else {
      toast.error("El nombre y la dirección deben tener mínimo 4 letras");
    }
  };

  const handleChangeInput = (e: any) => {
    setcredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ComtainerBorder>
      <h3 className="font-bold text-base lg:text-lg text-[#091535] lg:pb-5 pb-3">
        Dirección de entrega
      </h3>
      <div>
        <div className="">
          {addAddresList.success ? (
            <div className="relative flex-1 px-4 sm:px-4 overflow-y-auto h-80">
              {addAddresList.data.map(
                (a) =>
                  a.nombre_direccion !== "undefined" && (
                    <button
                      onClick={() => handleChangeAddres(a)}
                      key={a.nombre_direccion}
                      className={classNames(
                        selectAdress.nombre_direccion === a.nombre_direccion
                          ? "border-bluet bg-blue-100"
                          : "border-gray-300 bg-blue-50",
                        "w-full flex border   rounded-lg my-4 p-4 text-left"
                      )}
                    >
                      <div className="w-4/6">
                        <div className="justify-between flex text-lg text-bluet font-bold">
                          <h3 className="">{a.nombre_direccion}</h3>
                          <span>
                            {a.ciudad === "08001" ? "Barranquilla" : ""}
                          </span>
                        </div>
                        <h1>Dirección: {a.direccion}</h1>
                      </div>

                      <div className="w-1/3 flex gap-4 justify-end mt-2">
                        <button
                          onClick={() => setDeleteAddress(a.nombre_direccion)}
                          className="p-1.5 text-xl bg-red-500  rounded-lg text-white hover:opacity-50"
                        >
                          <FaTrash />
                        </button>
                        <button className="p-1.5 text-xl bg-bluet  rounded-lg text-white hover:opacity-50">
                          <FaEdit />
                        </button>
                        <div />
                      </div>
                    </button>
                  )
              )}
            </div>
          ) : (
            <>Ho hay resultados</>
          )}
        </div>
        <button
          type="button"
          onClick={openModal}
          className="flex items-center justify-center rounded-md border border-transparent bg-bluet px-6 py-3 text-base 
                                                    font-medium text-white shadow-sm hover:bg-[#4579FF] mt-5"
        >
          Añador nueva dirección
        </button>

        <Transition appear show={viewAddAddres} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm cursor-[url('/icons/blue/closeMenu.svg'),_pointer]" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Agregar nueva dirección
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        className="space-y-5 mt-6 text-black"
                        action=""
                        onSubmit={handleSubmit}
                      >
                        {/* Nombre y apellido */}
                        <div className="flex">
                          <div className="w-1/2">
                            <label
                              htmlFor="text"
                              className="block mb-2 text-xs font-semibold text-gray-700"
                            >
                              nombre de dirección
                            </label>
                            <div className="mt-1">
                              <input
                                onChange={handleChangeInput}
                                id="name_adress"
                                name="name_adress"
                                type="text"
                                autoComplete="name_adress"
                                required
                                placeholder="Ingresa nombre de dirección"
                                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                          <div className="ml-6 w-1/2">
                            <label
                              htmlFor="text"
                              className="block mb-2 text-xs font-semibold text-gray-700"
                            >
                              Dirección
                            </label>
                            <div className="mt-1">
                              <input
                                onChange={handleChangeInput}
                                id="adress"
                                name="adress"
                                type="text"
                                autoComplete="adress"
                                required
                                placeholder="Ingresa tu dirección"
                                className="px-3 py-2 border w-full border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none
                                                        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-5">
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                                                    text-white bg-bluet hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Guardar Dirección
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:opacity-50 focus:outline-none"
                            onClick={closeModal}
                          >
                            Cancelar
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="mt-4"></div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </ComtainerBorder>
  );
}
