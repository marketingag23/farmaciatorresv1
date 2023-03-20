"use client";

import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

const FotterBottom = () => {
  return (
    <>
      {/* Newslestter */}
      <h3 className="font-bold text-lg  text-[#091535] py-4">
        Suscríbete a nuestro Newsletter
      </h3>
      <form>
        <div className="grid grid-cols-1 pb-4">
          <div className="relative w-full lg:w-64">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Digite su correo electronico"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-bluet rounded-r-lg border border-bluet hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <AiOutlineMail className="text-xl" />
            </button>
          </div>
          <p className="py-4 text-gray-500 pb-4">
            Entérate primero de nuestras exclusivas ofertas y promociones.
            ¡Suscríbete!
          </p>
          <div className="flex ">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-500">
                He leido la
                <span className="font-semibold">
                  <Link href="/politica-de-privacidad-habeas-data">
                    {" "}
                    politica y privacidad
                  </Link>
                </span>{" "}
                y acepto los <span> </span>
                <span className="underline font-semibold">
                  <Link href="/condiciones-de-uso">
                    {" "}
                    términos y condiciones
                  </Link>
                </span>
              </span>
            </label>
          </div>
        </div>
      </form>
      <p className="py-2 text-gray-500 pb-4">
        Te informamos de que Farmacia Torres tratará el correo electrónico
        facilitado para remitirte comunicaciones comerciales o promociones en
        base a tu perfil de usuario, en caso de otorgar tu consentimiento. Más
        información aquí
      </p>
      <hr className="w-full" />
    </>
  );
};
export default FotterBottom;
