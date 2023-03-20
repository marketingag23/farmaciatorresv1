"use client";

import Image from "next/image";
import { useMenu } from "@ft/app/context/menuContext";
import { useCart } from "@ft/app/context/cartContext";

const BotonCard = () => {
  const { handleStor }: any = useMenu();
  const { cartLength }: any = useCart();

  return (
    <>
      <button
        onClick={handleStor}
        className="justify-center group bg-bluet p-0.5 rounded-md inline-flex items-center text-base
                font-medium hover:text-gray-900 focus:outline-none lg:h-[2.6rem] lg:w-[2.6rem]"
      >
        <div className="rounded-full w-5 h-5 bg-pumpkin absolute -mt-4 lg:-mt-8 lg:ml-8 ml-8">
          <span className=" text-white font-semibold">{cartLength}</span>
        </div>
        <Image
          className="w-5 lg:w-7"
          src={"/icons/white/Card.svg"}
          alt="icono carrito"
          width={30}
          height={30}
        />
      </button>
    </>
  );
};

export default BotonCard;
