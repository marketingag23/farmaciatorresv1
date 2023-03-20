"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const handleURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://farmaciatorresv1.vercel.app"
    : "http://localhost:3000";

export default function Viewadress() {
  const { data: session }: any = useSession();
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

  useEffect(() => {
    if (session !== undefined) {
      setUserData(session);
    }
  });
  // UserData.user.data.nombres !== undefined

  const [addAddres, setAddAddres] = useState({
    success: false,
    data: [
      {
        nombre_direccion: "",
        direccion: "",
        ciudad: "",
      },
    ],
  });

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
            setAddAddres(Data);
          }
        });
    }
  }, [UserData]);

  return (
    <>
      {addAddres.success ? (
        addAddres.data.map(
          (a) =>
            a.nombre_direccion !== "undefined" && (
              <div
                key={a.nombre_direccion}
                className="w-full flex border border-gray-300 bg-blue-50 rounded-lg my-4 p-6"
              >
                <div className="w-1/3">
                  <h1>Nombre: {a.nombre_direccion}</h1>
                  <h1>Dirección: {a.direccion}</h1>
                </div>
                <div className="w-1/3">
                  <h1>Ciudad:</h1>
                  <h4> {a.ciudad === "08001" ? "Barranquilla" : ""}</h4>
                </div>
                <div className="w-1/3">
                  <div />
                </div>
              </div>
            )
        )
      ) : (
        <>{addAddres.success}</>
      )}
    </>
  );
}
