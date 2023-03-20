"use client";

import Link from "next/link";
import Image from "next/image";

const FotterBottom = () => {
  return (
    <>
      {/*  Images */}
      <div className="grid grid-cols-1 justify-items-center lg:flex lg:justify-between py-4">
        <Image
          className="pb-6 lg:py-0"
          src="/images/footer/industriaycomercio.svg"
          width={190}
          height={50}
          alt="logo industria y comercio"
        />
        <Image
          className="pb-2 lg:py-0"
          src="/images/footer/cards.svg"
          width={190}
          height={30}
          alt="tarjetas que recibimos"
        />
      </div>
      <hr className="w-full" />
      {/* Derechos reservados */}
      <div className="grid grid-cols-1  text-center lg:text-start text-gray-500 lg:flex lg:justify-between py-2 pt-2 lg:pb-0">
        <p>© 2023 Farmacia Torres. Todos los derechos reservados.</p>
        <div className="grid grid-cols-1 text-center lg:text-right py-4 lg:py-0">
          <Link className="pb-1" href="/condiciones-de-uso">
            Condiciones de uso
          </Link>
          <Link className="pb-1" href="#">
            Politicas de Cookies
          </Link>
          <Link className="pb-1" href="/condiciones-de-uso">
            Politicas y términos de uso
          </Link>
          <Link className="pb-4" href="/politica-de-privacidad-habeas-data">
            Politicas de privacidad
          </Link>
        </div>
      </div>
    </>
  );
};
export default FotterBottom;
