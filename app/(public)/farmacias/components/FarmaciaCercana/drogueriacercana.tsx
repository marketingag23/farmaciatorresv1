"use client";

import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";
import { FaCrosshairs, FaWindowClose } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

const Tudrogueriamascercana = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [Detail, setDetail] = useState({
    codigo: "",
    Direccion: "",
  });
  const [distancia, setDistancia] = useState(0);
  const [locate, setLocate] = useState({
    currenLocation: { latitude: 0, longitude: 0 },
    zoom: 13,
  });

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const currenLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocate({ ...locate, currenLocation });
      },
      function () {
        toast.error("Lo sentimos, no se pudo obtener la Geolocalización");
      }
    );
  }, []);

  useEffect(() => {
    if (locate.currenLocation.latitude !== 0) {
      fetch(`${handleURL()}/api/farmacias/calculardistancia`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "force-cache",
        body: JSON.stringify({
          latitude: locate.currenLocation.latitude,
          longitude: locate.currenLocation.longitude,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data[0].codigo) {
            setDetail(data[0]);
            setDistancia(data[0].distanciaMetros);
          }
        });
    }
  }, [locate]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <button
                    type="button"
                    className="absolute top-2 right-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-bluet focus:outline-none hover:text-red-500"
                    onClick={closeModal}
                  >
                    <FaWindowClose className="text-lg" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 mt-4 lg:mt-0 text-gray-900 "
                  >
                    Farmacia Torres más cerca de ti.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {distancia > 0 ? (
                        <>
                          Se encontró 1 Farmacia Torres a{" "}
                          {Math.round(distancia)} Metros
                        </>
                      ) : (
                        <>
                          Compártenos tu ubicación actual para recomendarte el
                          punto de venta más cercano.
                        </>
                      )}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="mb-4">
                      <Link
                        href={`/farmacia/detalle/${Detail.codigo}`}
                        className="z-10"
                      >
                        <div className="border-[#D9D9D9] border-2 rounded-lg font-semibold p-5 w-401px drop-shadow-md ">
                          <div className="grid grid-flow-col auto-cols-max">
                            <Image
                              alt="logo"
                              src="/images/logos/Logotype.svg"
                              width={50}
                              height={50}
                            />
                            <p className="py-3 pl-4 pr-20 lg:pr-10 truncate w-72 md:w-64 lg:w-80 text-xs">
                              {Detail.Direccion}
                            </p>
                          </div>
                        </div>
                      </Link>

                      {/* {parse(Detail)} */}
                    </div>
                    {locate.currenLocation.latitude === 0 &&
                    locate.currenLocation.longitude === 0 ? (
                      <button
                        type="button"
                        className="cursor-not-allowed w-full inline-flex justify-center rounded-md border border-transparent bg-bluet px-4 py-2 text-sm font-medium text-white opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        <FaCrosshairs className="text-lg mr-3" /> Buscar
                        Farmacia Torres más cercana
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Tudrogueriamascercana;
