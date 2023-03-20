"use client";

import { useState } from "react";
import Link from "next/link";

import { BsWhatsapp, BsFillTelephoneOutboundFill } from "react-icons/bs";
import Image from "next/image";

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

function WhatsappButtom() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setActive(!active)}
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="fixed inline-block mb-2 z-40 bottom-4 left-4 text-white font-medium 
      text-xs leading-tight uppercase rounded-full  focus:outline-none 
      focus:ring-0 transition duration-150 ease-in-out"
      >
        <Image
          src={"/images/buttom/botomws.svg"}
          alt="boton de ayuda"
          width={60}
          height={60}
        />
      </button>
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=573215196404&text&type=phone_number&app_absent=0"
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className={classNames(
          active
            ? "-translate-y-[4.2rem] duration-1000 opacity-100"
            : "translate-y-0 opacity-0",
          " fixed inline-block p-3 mb-2 bg-green-600 z-[39] bottom-4 left-4 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        )}
      >
        <BsWhatsapp className="w-6 h-6" />
      </Link>

      <Link
        href="tel:+576053851717"
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className={classNames(
          active
            ? "-translate-y-32 duration-1000 opacity-100"
            : "translate-y-0 opacity-0",
          "fixed inline-block p-4 mb-2 bg-pumpkin z-[38] bottom-4 left-4 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        )}
      >
        <BsFillTelephoneOutboundFill className="w-4 h-4" />
      </Link>
    </>
  );
}
export default WhatsappButtom;
