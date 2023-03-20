"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Container, Breadcrumbs } from "@ft/components";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { FarmaciaModel, Farmacia } from "./model";

const Map = dynamic(() => import("./components/map"), {
  loading: () => (
    <div className="h-96 w-full bg-gray-300 animate-pulse rounded-2xl"></div>
  ),
  ssr: false,
});

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

export default function Dpartamentofilter({
  params,
}: {
  params: { id: number };
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [toDos, setToDos] = useState<FarmaciaModel>();
  const [relacinados, setRelacinados] = useState<Farmacia>();

  useEffect(() => {
    const Id = params.id;
    setIsLoading(true);
    fetch(`${handleURL()}/api/farmacias/farmacias`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      body: JSON.stringify({
        codigo: Id,
      }),
    })
      .then((response) => response.json())
      .then((Data) => {
        if (Data.data !== "") {
          setToDos(Data);
          fetch(`${handleURL()}/api/farmacias/farmacias`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "force-cache",
            body: JSON.stringify({
              ciudad: Data.data[0].Ciudad,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.data !== "") {
                setRelacinados(data);
              }
            });
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
  }, []);
  return isLoading ? (
    <div className="mb-8 hidden lg:block group relative border-grayMain border-2 rounded-lg w-full h-auto grid-center justify-items-center">
      <div className="grid justify-items-center px-auto py-52 animate-bounce duration-1000">
        <Image
          className="mb-3"
          src="/images/logos/Logotype.svg"
          alt="logo club vida sana"
          width={100}
          height={100}
        />
      </div>
    </div>
  ) : toDos?.success === true ? (
    <>
      <Container>
        <div className="mb-8">
          {toDos.data[0].latitude !== 0 ? (
            <Map
              latitude={toDos.data[0].latitude}
              longitude={toDos.data[0].longitude}
            />
          ) : (
            <div className="h-40 lg:h-96 w-full bg-gray-300 animate-pulse rounded-2xl"></div>
          )}
          <div className="mt-4 lg:mt-0 rounded-2xl w-full bg-white lg:w-96 lg:absolute z-10 lg:shadow-2xl top-44 lg:right-28 2xl:right-96">
            <div className="text-white bg-pumpkin p-4 md:rounded-t-2xl text-center font-bold">
              {toDos.data[0].Direccion}
            </div>
            <div className="flex px-4 py-1 pt-6 justify-between">
              <span className="font-semibold">Dirección</span>
              <span>{toDos.data[0].Direccion2}</span>
            </div>
            <div className="flex px-4 py-1 justify-between">
              <span className="font-semibold">Lunes a sábado:</span>
              <span>{toDos.data[0].HorarioD}</span>
            </div>
            <div className="flex px-4 py-1 pb-3 justify-between">
              <span className="font-semibold">Domingos y festivos:</span>
              <span>{toDos.data[0].HorarioLYS}</span>
            </div>
            <a href="tel:+576053851717" className="">
              <div
                className="flex bg-pumpkin p-2 lg:m-3 w-full lg:w-[22.5rem] rounded-md   
                        hover:opacity-90 text-center text-white justify-center hover:scale-95 duration-150"
              >
                <FaPhoneAlt className="mr-2 mt-1 flex" />
                Llamar Ahora
              </div>
            </a>
            <a
              href={`https://maps.google.com/?q=${toDos.data[0].latitude},${toDos.data[0].longitude}`}
              className=""
              target={"_blank"}
              rel="noreferrer"
            >
              <div
                className="flex p-2 lg:m-3 mt-4 w-full lg:w-[22.5rem] rounded-md 
                        hover:opacity-90 text-center text-white justify-center hover:scale-95 duration-150
                        bg-bluet"
              >
                <SiGooglemaps className="mr-2 mt-1 flex" />
                Google Maps
              </div>
            </a>
          </div>

          <div className="p-2"></div>

          <Breadcrumbs
            Categoria={toDos.data[0].Departamento}
            UrlCategoria={`/farmacias/${toDos.data[0].Departamento}`}
            Subcategoria={toDos.data[0].Ciudad}
            UrlSubcategoria={`/farmacias/${toDos.data[0].Departamento}/${toDos.data[0].Ciudad}`}
            descripcion={toDos.data[0].Direccion}
            Urldescripcion={""}
          />

          <h3 className="font-semibold text-lg my-6">
            Otros puntos de venta relacionados
          </h3>
          <div className="mb-10 grid gap-4 grid-cols-1 lg:grid-cols-3">
            {relacinados?.data.map((farmacia) => (
              <Link
                key={farmacia.ID}
                href={`/farmacia/detalle/${farmacia.ID}`}
                className="z-10"
              >
                {/* <Link key={farmacia.ID} href={"/"} className="z-10"> */}
                <div className="border-[#D9D9D9] border-2 rounded-lg font-semibold p-5 w-401px drop-shadow-md ">
                  <div className="grid grid-flow-col auto-cols-max">
                    <Image
                      alt="logo"
                      src="/images/logos/Logotype.svg"
                      width={50}
                      height={50}
                    />
                    <p className="py-3 pl-4 truncate w-72 md:w-64 lg:w-80 text-xs pr-3">
                      ${farmacia.Direccion}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  ) : (
    <div className="relative py-16 px-4 w-full min-h-min bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-bluet font-bold tracking-wide">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize">
            Esta farmacia no existe
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            ¡Arrepentido! No hemos podido encontrar la farmacia que buscas.
            Comprueba la URL en la barra de direcciones e inténtalo de nuevo.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href="#link"
            className="px-5 py-2.5 rounded border border-transparent bg-bluet text-center text-base text-white font-medium hover:opacity-50"
          >
            Volver a la página de inicio
          </a>
          <a
            href="#link"
            className="px-5 py-2.5 rounded border-2 border-bluet bg-transparent text-center text-base text-bluet font-medium hover:opacity-50"
          >
            Contactar con el soporte técnico
          </a>
        </div>
      </div>
    </div>
  );
}
