"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const FilterContext = createContext({});
export const useFilter = () => useContext(FilterContext);

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

export default function MenuProvaider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [codigoFilter, setCodigoFilter] = useState({
    codigo: "0100101",
    name: "Medicamentos",
  });
  const [BuscarFilter, setBuscarFilter] = useState("");
  const [descuentos, setDescuentos] = useState(false);

  const [breashure, setBreashure] = useState({
    codigo: codigoFilter.name,
    descricion: BuscarFilter,
    descuento: descuentos,
  });

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log("ENTRE");
    setLoading(true);
    setBreashure({
      codigo: codigoFilter.name,
      descricion: BuscarFilter,
      descuento: descuentos,
    });
    fetch(`${handleURL()}/api/filter/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache: "force-cache",
      body: JSON.stringify({
        descripcion: BuscarFilter,
        codigo: codigoFilter.codigo,
      }),
    })
      .then((response) => response.json())
      .then((Data) => {
        if (Data) {
          setResult(Data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, [codigoFilter, BuscarFilter]);

  const hadleOptionCodigo = (codigo: string, name: string) => {
    setCodigoFilter({ codigo, name });
    setBuscarFilter("");
    setDescuentos(false);
  };

  const hadleOptionDescription = (description: string) => {
    setCodigoFilter({ codigo: "", name: "" });
    setBuscarFilter(description);
    setDescuentos(false);
  };

  const hadleOptionDescuentos = () => {
    setCodigoFilter({ codigo: "", name: "" });
    setBuscarFilter("");
    setDescuentos(true);
  };

  return (
    <FilterContext.Provider
      value={{
        hadleOptionCodigo,
        hadleOptionDescription,
        hadleOptionDescuentos,
        result,
        breashure,
        loading,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
