"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFilter } from "@ft/app/context/filterContex";
import Product from "./product";

interface Producto {
  success: boolean;
  message: string;
  data: Datum[];
}

interface Datum {
  rownum: string;
  codigo: string;
  idclientes: string;
  subgrupo35: string;
  Categoria: string;
  subgrupo36: string;
  Subcategoria: string;
  descripcion: string;
  stock: number;
  Antes: number;
  Ahora: number;
  Porcentaje: number;
  VlrMinimo: number;
  idoferta: number;
  Cant: number;
  IdUnidad?: number;
  descripcion_adicional: any;
  valor_contenido: string;
  MaximaVenta: number;
  Nro: number;
}

type SubcategoriaProps = {
  codigo: String;
  title: String;
};

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

const Product404 = () => {
  return (
    <div className="min-h-full flex flex-col bg-white col-span-2 mt-3">
      <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="text-center">
            <p className="text-sm font-semibold text-bluet uppercase tracking-wide">
              Error 404
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Lo sentimos
            </h1>
            <p className="mt-2 text-base text-gray-500">
              No hemos encontrado ningún resultado para su búsqueda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuspenseProduc = () => {
  return (
    <>
      <div className="group relative w-[21.75rem]">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden border-gray-200 border-2 rounded-lg text-center grid grid-cols-3">
          <div className="w-[6rem] border-gray-200 border-r-2 col-span-1">
            <div className="h-[6rem] bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="col-span-2 text-left p-2">
            <div className="pb-2 lg:py-0 w-48 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="mt-1 pb-2 lg:py-0 w-28 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="flex">
              <div className="mt-4 pb-2 lg:py-0 w-36 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden border-gray-200 border-2 rounded-lg text-center grid grid-cols-3">
          <div className="w-[6rem] border-gray-200 border-r-2 col-span-1">
            <div className="h-[6rem] bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="col-span-2 text-left p-2">
            <div className="pb-2 lg:py-0 w-48 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="mt-1 pb-2 lg:py-0 w-28 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="flex">
              <div className="mt-4 pb-2 lg:py-0 w-36 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden border-gray-200 border-2 rounded-lg text-center grid grid-cols-3">
          <div className="w-[6rem] border-gray-200 border-r-2 col-span-1">
            <div className="h-[6rem] bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="col-span-2 text-left p-2">
            <div className="pb-2 lg:py-0 w-48 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="mt-1 pb-2 lg:py-0 w-28 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="flex">
              <div className="mt-4 pb-2 lg:py-0 w-36 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden border-gray-200 border-2 rounded-lg text-center grid grid-cols-3">
          <div className="w-[6rem] border-gray-200 border-r-2 col-span-1">
            <div className="h-[6rem] bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="col-span-2 text-left p-2">
            <div className="pb-2 lg:py-0 w-48 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="mt-1 pb-2 lg:py-0 w-28 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="flex">
              <div className="mt-4 pb-2 lg:py-0 w-36 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductoMenu = ({ props }: { props: SubcategoriaProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [toDos, setToDos] = useState<Producto>();
  const { hadleOptionCodigo }: any = useFilter();

  useEffect(() => {
    const Codigo = props.codigo;
    setIsLoading(true);
    // if (props.codigo.length > 0) {
    fetch(`${handleURL()}/api/filterCategory/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache: "force-cache",
      body: JSON.stringify({
        codigo: Codigo,
      }),
    })
      .then((response) => response.json())
      .then((Data: Producto) => {
        if (Data) {
          setToDos(Data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
  }, [props.codigo]);

  const handleSearchSummit = (codigo: any, descricion: any) => {
    router.push("/Filtrado");
    hadleOptionCodigo(codigo, descricion);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return props.codigo !== "" ? (
    <div className="lg:px-3 overflow-y-auto lg:overflow-y-scroll h-[18.5rem] pr-4">
      <h3 className="font-semibold m-3 flex text-sm">
        <p className="hidden lg:block">Productos destacados</p>
        <button
          onClick={() => handleSearchSummit(props.codigo, props.title)}
          className="mx-4 text-bluet flex "
        >
          {props.title}
          <span className="ml-2 flex">
            Ver todos
            <Image
              className="-rotate-90 ml-2"
              src={"/icons/blue/flecha.svg"}
              alt="icono busqueda"
              width={15}
              height={15}
            />
          </span>
        </button>
      </h3>
      <hr className="w-full border-gray-300 pb-4" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        {isLoading
          ? SuspenseProduc()
          : toDos?.success
          ? toDos?.data.map((fproduct, index) =>
              !isLoading
                ? !fproduct.Nro && (
                    <>
                      <div
                        className="hidden"
                        key={Number(fproduct.codigo) * index + index}
                      />
                      <Product Props={fproduct} />
                    </>
                  )
                : SuspenseProduc()
            )
          : Product404()}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductoMenu;
