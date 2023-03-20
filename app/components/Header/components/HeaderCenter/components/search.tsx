"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useFilter } from "@ft/app/context/filterContex";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ImageFallback } from "@ft/components";
import { useRouter } from "next/navigation";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

const getImageProduct = (codigo: string) => {
  return `https://www.droguerialaeconomia.com/economia/site/img/1x/${codigo}.jpg`;
};

const AutocompleteItem = ({ codigo, descripcion }: any) => {
  return (
    <a
      href={`/producto/${codigo}/resultado`}
      className="hover:bg-blue-100 flex gap-4 p-4 border-b-2 border-gray-200 mr-4"
    >
      <ImageFallback
        className="w-16 h-16 object-contain"
        alt={descripcion}
        key={codigo}
        width={64}
        height={64}
        // layout="fill"
        // objectFit="cover"
        src={getImageProduct(codigo)}
        fallbackSrc={"/images/products/imagenoencontrada.svg"}
      />
      <div className="w-[16.5rem]">
        <h3 className="text-sm font-semibold mt-3">{descripcion}</h3>
      </div>
    </a>
  );
};
interface RootObject {
  activeItemId?: boolean;
  query: string;
  completion?: boolean;
  collections: Collection[];
  isOpen: boolean;
  status: string;
  context: Context;
}

interface Context {}

interface Collection {
  source: Source;
  items: Item[];
}

interface Item {
  rownum?: string;
  codigo?: string;
  idclientes?: string;
  subgrupo35?: string;
  Categoria?: string;
  subgrupo36?: string;
  Subcategoria?: string;
  descripcion?: string;
  stock?: number;
  Antes?: number;
  Ahora?: number;
  Porcentaje?: number;
  VlrMinimo?: number;
  idoferta?: number;
  Cant?: number;
  IdUnidad?: number;
  descripcion_adicional?: string;
  valor_contenido?: string;
  MaximaVenta?: number;
  __autocomplete_id: number;
  Nro?: number;
}

interface Source {
  sourceId: string;
}

export default function Search(props: any) {
  const router = useRouter();
  const { hadleOptionDescription }: any = useFilter();
  const [loagin, setLoagin] = useState(false);
  const [autocompleteState, setAutocompleteState] = useState<RootObject>();
  const autocomplete: any = useMemo(
    () =>
      createAutocomplete({
        stallThreshold: 10,
        placeholder: "Busca tu oferta",
        openOnFocus: false,
        onStateChange: ({ state }: any) => setAutocompleteState(state),

        getSources: () => [
          {
            sourceId: "offers-next-api",
            getItems: ({ query }) => {
              if (query) {
                setLoagin(true);
                return fetch(`${handleURL()}/api/search/search`, {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  cache: "force-cache",
                  body: JSON.stringify({
                    descripcion: query,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    setLoagin(false);
                    return data;
                  });
              }
              return null;
            },
          },
        ],
        ...props,
      }),
    [props]
  );

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const formProps: any = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });
  const inputProps: any = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  const handleSearchSummit = () => {
    router.push("/Filtrado");
    hadleOptionDescription(inputProps.value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form
      ref={formRef}
      className="order-last lg:order-none col-span-12 lg:col-span-4"
      {...formProps}
    >
      <div className="">
        <div className="relative w-full">
          <input
            onChange={(e) => console.log(e.target.value)}
            type="search"
            id="search-dropdown"
            className="focus:outline-none block p-2.5 w-full z-20 text-sm text-gray-900 bg-[#EFF4FF] rounded-lg
                            placeholder-shown:text-ellipsis pr-13 border-l-2 border border-gray-300"
            placeholder="Busca entre miles de productos y marcas "
            required
            {...inputProps}
          />
          <button
            onClick={() => handleSearchSummit()}
            type="submit"
            className="absolute top-0 right-0 lg:px-6 px-2 text-sm font-medium text-white bg-[#637381] 
                  rounded-r-lg border border-[#637381] hover:bg-blue-800 focus:ring-4 focus:outline-none
                focus:ring-blue-300"
          >
            {loagin ? (
              <AiOutlineLoading3Quarters className="w-7 h-7 m-1.5 animate-spin" />
            ) : (
              <Image
                src={"/icons/white/SearchBotton.svg"}
                alt="icono busqueda"
                width={40}
                height={40}
              />
            )}
          </button>
        </div>
      </div>
      {autocompleteState?.isOpen ? (
        <div className="absolute p-2 bg-white border border-gray-100 rounded-lg shadow-lg z-10 min-w-min">
          <div
            className="top-14 overflow-hidden max-h-80 overflow-y-auto"
            ref={panelRef}
            {...autocomplete.getPanelProps()}
          >
            {autocompleteState.collections[0].items.length > 1 ? (
              autocompleteState.collections.map((collection) => {
                const { items }: any = collection;
                return (
                  <section key={`section-${collection.items}`}>
                    {items.length > 0 && (
                      <div {...autocomplete.getListProps()}>
                        {items.map(
                          (item: any) =>
                            item.codigo && (
                              <AutocompleteItem key={item.codigo} {...item} />
                            )
                        )}
                      </div>
                    )}
                  </section>
                );
              })
            ) : (
              <p>No hay resultados</p>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </form>
  );
}
