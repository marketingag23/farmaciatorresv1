"use client";

import Image from "next/image";

const Welcome = () => {
  return (
    <div className="border-0 lg:border-grayMain lg:border-2 rounded-lg">
      <div className="px-0 py-0 lg:px-52 lg:py-13 lg:w-full text-center">
        <Image
          alt="logo"
          className="pb-10 lg:pb-14"
          src="/images/logos/Logo.svg"
          width={1254}
          height={85}
        />
        <h1 className="text-xl pb-5 lg:text-2xl text-bluet font-semibold lg:pb-5">
          ¡Bienvenido a Farmacia Torres!
        </h1>
        <p className="text-center text-xs lg:text-sm text-black">
          Somos una cadena de droguerías líder en el suministro de medicamentos,
          productos de higiene personal, cuidado del bebé y cosméticos entre
          otros, que tiene como compromiso principal la salud y el bienestar de
          nuestros clientes.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
