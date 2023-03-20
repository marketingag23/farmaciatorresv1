"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@ft/components";
import { Farmacia } from "../models";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

const SuspenseProduc = () => {
  return (
    <div
      className=" hidden md:block group relative border-grayMain border-2 rounded-lg w-full h-auto grid-center 
    justify-items-center"
    >
      <div className="grid justify-items-center px-auto py-52">
        <Image
          className="mb-3"
          src="/images/logos/Logotype.svg"
          alt="logo club vida sana"
          width={150}
          height={150}
        />
        <svg
          className=" h-12 w-12 animate-spin"
          width="66"
          height="66"
          viewBox="0 0 64 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.274 10.196L49.325 15.2628C45.3172 11.1592 40.0436 8.60522 34.4027 8.0361C28.7619 7.46699 23.1028 8.91793 
            18.3897 12.1417C13.6766 15.3655 10.2011 20.1626 8.55539 25.7158C6.90968 31.269 7.19559 37.2345 9.36438 
            42.5961C11.5332 47.9576 15.4507 52.3834 20.4494 55.1193C25.4481 57.8552 31.2188 58.732 36.7781 57.6002C42.3375 
            56.4685 47.3415 53.3982 50.9377 48.9126C54.5339 44.4269 56.4996 38.8035 56.5 33.0003H63.5C63.5 40.4615 60.973 
            47.6919 56.3497 53.4594C51.7264 59.227 45.2928 63.1749 38.1451 64.6304C30.9974 66.086 23.5779 64.9591 17.1508 
            61.4419C10.7237 57.9247 5.68654 52.2347 2.89771 45.3414C0.108886 38.4481 -0.259102 30.7781 1.85645 23.6382C3.97201 
            16.4982 8.44021 10.3302 14.4997 6.18503C20.5592 2.03985 27.8352 0.17399 35.0878 0.905363C42.3403 1.63674 49.1209 
            4.9201 54.274 10.196V10.196Z"
            fill="#0F51FA"
          />
        </svg>
      </div>
    </div>
  );
};

export default function Dpartamentofilter({
  params,
}: {
  params: { departamento: string };
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [toDos, setToDos] = useState<Farmacia>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${handleURL()}/api/farmacias/farmacias`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      body: JSON.stringify({
        departamento: params.departamento,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data !== "") {
          setToDos(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
  }, [params.departamento]);

  return isLoading ? (
    SuspenseProduc()
  ) : toDos?.success === true ? (
    <>
      <Breadcrumbs Categoria={params.departamento} UrlCategoria={"/"} />

      <div className="mb-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {toDos?.data.map((farmacia) => (
          <Link
            key={farmacia.ID}
            href={`/farmacia/detalle/${farmacia.ID}`}
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
                <p className="py-3 pl-4 truncate w-72 md:w-64 lg:w-80 text-xs pr-3">
                  ${farmacia.Direccion}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <div className="relative py-16 px-4 w-full min-h-min bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-bluet font-bold tracking-wide">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize">
            Este departamento no existe
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            ¡Arrepentido! No hemos podido encontrar las farmacias que buscas.
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
