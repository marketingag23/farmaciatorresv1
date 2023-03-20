"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
  FaRegQuestionCircle,
} from "react-icons/fa";

const FotterBottom = () => {
  return (
    <>
      <div className="lg:flex lg:gap-9 lg:pb-4">
        <div className="grid grid-cols-1">
          <h3 className="font-bold text-base lg:text-lg text-[#091535] lg:pb-5 pb-3 ">
            Centro de ayuda y contacto
          </h3>

          <label className="inline-flex items-center text-[#637381] lg:pb-5 pb-3">
            <FaRegQuestionCircle />
            <span className="ml-1">¿Tienes alguna duda?</span>
          </label>

          <div className="lg:pb-5 pb-3">
            <Link
              href={"/ayuda"}
              className="bg-[#0F51FA] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded "
            >
              Te ayudamos aqui
            </Link>
          </div>
          <div className="text-[#637381] lg:pb-4 pb-6">
            Consulta tus dudas sobre medicamentos con nuestros farmaceuticos
            aqui
          </div>
        </div>
        <div className="lg:invisible visible">
          <hr className="w-full" />
        </div>
        <div className="flex flex-col gap-y-2.5  lg:py-0 py-5 ">
          <h3 className="font-bold text-[#091535] lg:pb-6 text-base lg:text-lg">
            Conócenos
          </h3>
          <Link className="text-[#637381]" href="/quienes-somos">
            ¿Qué es farmacia Torres?
          </Link>
          <Link
            className="text-[#637381]"
            href="https://www.magneto365.com/co/empresas/eticos?country=Colombia"
          >
            Trabaja con nosotros
          </Link>
        </div>

        <div className="lg:invisible visible">
          <hr className="w-full" />
        </div>

        <div className="flex flex-col lg:py-0 py-5">
          <div className="font-bold text-[#091535] text-lg lg:text-xl lg:pb-9">
            Siguenos en
          </div>

          <div className="flex justify-start pb-2 pt-4 lg:pt-0 lg:pb-14 gap-4">
            <Link href="https://es-la.facebook.com/FarmaciatorresWeb/">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-[#0F51FA] focus:outline-none">
                <FaFacebookF className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
            <Link href="https://www.instagram.com/farmaciatorres/">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-[#0F51FA] focus:outline-none">
                <FaInstagramSquare className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
            <Link href="https://www.youtube.com/@farmaciatorres6804">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-[#0F51FA] focus:outline-none">
                <FaYoutube className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
            <Link href="https://www.tiktok.com/@farmaciatorres_">
              <button className="inline-block text-center text-white transition bg-white rounded-full shadow ripple hover:shadow-lg hover:bg-[#0F51FA] focus:outline-none">
                <FaTiktok className="w-9 h-9 p-2 hover:text-white text-black" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
};
export default FotterBottom;
