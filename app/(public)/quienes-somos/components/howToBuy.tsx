"use client";

import Image from "next/image";

const Data = [
  {
    id: "1",
    src: "/icons/blue/Pill.svg",
    title: "Busca tus productos de salud y belleza",
    label: "Utiliza el buscador o navega por las diferentes categorías",
  },

  {
    id: "2",
    src: "/icons/blue/Cart.svg",
    title: "Ahorra en tu cesta",
    label:
      "Nuestro algoritmo busca entre más de 1.000 farmacias la mejor opción para que tu compra sea más económica",
  },

  {
    id: "3",
    src: "/icons/blue/Bag.svg",
    title: "Realiza tu compra",
    label: "Introduce tu dirección y confirma el pago de forma segura",
  },

  {
    id: "4",
    src: "/icons/blue/CarBlue.svg",
    title: "Recibe tu pedido",
    label:
      "Recogemos tu pedido en la farmacia y lo entregamos donde tú quieras",
  },
];

const HowToBuy = () => {
  return (
    <div className="pt-6 md:pt-4 mb-10">
      <div className="md:border-grayMain md:bg-grayMain border-0 md:border-2 md:rounded-lg py-2 md:py-16 md:px-14 ">
        <h2 className=" text-xl px-6 md:text-3xl lg:text-2xl font-bold text-bluet pb-7 text-center md:pb-0 lg:pb-2">
          ¿Cómo comprar en Farmacia Torres?
        </h2>
        <div className="grid grid-cols-1 space-y-5 md:space-y-0 ">
          {Data.map((item) => (
            <div
              key={item.id}
              className="grid grid-flow-col justify-start md:pt-5 lg:pt-10"
            >
              <Image
                alt={item.id}
                className="w-10 h-10 lg:w-14 lg:h-14"
                src={item.src}
                width={80}
                height={78}
              />
              <div className="pl-2 md:pl-5 mx-auto md:pt-2">
                <h4 className="font-semibold text-base lg:text-lg">
                  {item.title}
                </h4>
                <p className="text-auroMetal text-xs lg:text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
