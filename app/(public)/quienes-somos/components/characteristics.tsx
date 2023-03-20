"use client";

import Image from "next/image";

const Data = [
  {
    id: "1",
    src: "/icons/white/Money.svg",
    label: "Precios competitivos",
  },

  {
    id: "2",
    src: "/icons/white/VectorA.svg",
    label: "Oportuna y amable atención",
  },

  {
    id: "3",
    src: "/icons/white/Shop.svg",
    label: "Surtido extenso de productos",
  },

  {
    id: "4",
    src: "/icons/white/VectorB.svg",
    label: "Prácticas confiables",
  },

  {
    id: "5",
    src: "/icons/white/Icons.svg",
    label: "Un gran número de sucursales",
  },
];

const Characteristics = () => {
  return (
    <div className="container pt-5 lg:px-8 md:mx-auto md:px-6">
      <div className="mx-auto container bg-bluet md:rounded-lg px-2 md:px-3 lg:px-36">
        <h1 className="hidden md:block md:text-2xl text-white font-bold text-center pt-0 md:py-12">
          Nuestro comprsomiso es apoyar la economía de nuestros clientes para
          poder brindarles:
        </h1>
        <div
          className="
               
                md:space-y-0 md:container md:grid md:grid-cols-2 md:pb-20 md:gap-y-14 md:py-4 md:mx-8 
                lg:grid lg:grid-cols-3 lg:space-y-4
                space-y-4
                grid-cols-1 py-8  "
        >
          {Data.map((item) => (
            <div
              key={item.id}
              className="
                        flex flex-row w-full space-x-4
                        items-start md:space-x-0  
                        lg:flex-col 
                        lg:items-center"
            >
              <div
                className="
                            ml-2 
                            md:mx-0 md:h-auto 
                            lg:h-16"
              >
                <Image
                  className="
                                    w-9 h-9 
                                    md:w-10 md:h-10 md:mr-2
                                    lg:w-14 lg:h-14"
                  alt={item.id}
                  src={item.src}
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-white my-auto md:text-sm text-sm lg:text-sm lg:font-semibold pt-2 lg:pt-0">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
