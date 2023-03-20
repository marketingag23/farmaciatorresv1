"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@ft/components";

const HeaderTop = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="truncate font-medium text-gray-500 text-sm">
              <span className="md:hidden">Envíos gratis...</span>
              <Link href="tel:+576053851717" className="hidden md:inline">
                Llama ahora: (605) 3851717
              </Link>
            </p>
          </div>
          <div className="order-3 w-fvull flex-shrink-0 sm:order-2 sm:w-auto">
            <p className="truncate font-medium text-gray-500 text-sm">
              <span className="md:hidden">Ver farmacias</span>
              <span className="hidden md:flex text-sm">
                <Link href={"/farmacias/Atlantico"} className="mr-6">
                  Ver farmacias
                </Link>
                <Image
                  className="mr-2"
                  width={24}
                  height={24}
                  src={"/icons/gray/mdi_truck.svg"}
                  alt="icono envios"
                />
                Envíos gratis por compras superiores a $49.900
              </span>
            </p>
          </div>
        </div>
      </Container>
      <hr className="w-full" />
    </div>
  );
};

export default HeaderTop;
