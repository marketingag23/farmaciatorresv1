"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// interface DataUSer {
//   nit: string;
//   email: string;
//   nombres: string;
//   auth_token: string;
//   necesita_actualizar: boolean;
//   convenio: string;
//   puntos: Puntos;
//   historialPuntos: HistorialPuntos;
// }

// interface HistorialPuntos {
//   totalPuntos: Puntos[];
// }

// interface Puntos {}

export default function Datos() {
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

  // console.log(session.user.data.email)
  return (
    <>
      <h2 className="text-maastricht font-bold text-base md:text-lg mb-4">
        Datos personales
      </h2>
      <div className="pb-8 border-b-2 md:border-grayMain md:border-2 gap-2 lg:gap-0 md:rounded-lg md:px-5 md:py-10">
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-none md:mr-5 md:ml-4 my-2 ">
              <h5 className="text-sm mb-1 md:mb-0 md:text-base font-semibold text-left">
                Nombres y apellidos
              </h5>
            </div>
            <p
              className="md:block w-full p-2 md:w-full md:h-73 md:pl-8 md:mb-5 text-lg md:text-base text-graySecondary
          bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out md:m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              {UserData.user.data.nombres !== undefined
                ? UserData.user.data.nombres
                : ""}
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-none md:ml-9 md:mr-5 md:my-2 my-3 mt-5 ">
              <h5 className="text-sm md:text-base font-semibold ">
                Correo electronico
              </h5>
            </div>
            <p
              className="md:block w-full p-2 md:w-full md:h-73 md:pl-8 md:mb-5 text-lg md:text-base text-graySecondary
          bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out md:m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              {UserData.user.data.email !== undefined
                ? UserData.user.data.email
                : ""}
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-maastricht font-bold text-base md:text-lg my-4">
        Contraseña
      </h2>
      <div className="pb-8 border-b-2 md:border-grayMain md:border-2 md:rounded-lg md:px-5 md:py-10">
        <div
          className="flex items-center justify-center rounded-md border border-transparent bg-bluet px-6 py-3 text-base 
                                                    font-medium text-white shadow-sm hover:bg-[#4579FF]"
        >
          Cambiar Contraseña
        </div>
      </div>
      <h2 className="text-maastricht font-bold text-base  md:text-lg my-4">
        Datos personales
      </h2>
      <div className="md:border-grayMain md:border-2 md:rounded-lg md:px-5 md:py-10">
        <div
          className="flex items-center justify-center rounded-md border border-transparent bg-bluet px-6 py-3 text-base 
                                                    font-medium text-white shadow-sm hover:bg-[#4579FF]"
        >
          Actualizar datos
        </div>
      </div>
    </>
  );
}
