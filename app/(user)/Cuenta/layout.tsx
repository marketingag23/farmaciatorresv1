"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@ft/components";
import { signOut } from "next-auth/react";

const Data = [
  {
    id: "1",
    title: "Mis compras",
    href: "/Cuenta",
  },
  {
    id: "2",
    title: "Favoritos",
    href: "/Cuenta",
  },
  {
    id: "3",
    title: "Datos personales",
    href: "/Cuenta/DatosPersonales",
  },
  {
    id: "4",
    title: "Mis direcciones",
    href: "/usuario/direccion",
  },
  {
    id: "5",
    title: "Cupones",
    href: "/Cuenta",
  },
  {
    id: "6",
    title: "Puntos de vida sana",
    href: "/Cuenta",
  },
];

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <nav>
        <div className="container flex flex-row">
          <div className="lg:bloc-tabs lg:flex lg:items-start lg:border-grayMain lg:border-2 lg:rounded-l-lg">
            <div className="lg:flex lg:flex-col lg:flex-wrap lg:list-none lg:pl-0 ">
              <div className="hidden lg:block w-80 py-8 pl-4">
                <p className="text-maastricht font-bold text-xl mb-4">
                  Mi cuenta
                </p>
                {Data.map((item) => (
                  <div className="mb-4" key={item.id}>
                    <Link
                      href={item.href}
                      className="text-auroMetal text-base hover:text-bluet"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
                <hr className="w-full" />
                <div className="flex flex-row flex-grow my-2 mx-6 text-auroMetal text-xl ">
                  <Image
                    alt="out"
                    src="/icons/gray/out.svg"
                    width={22}
                    height={22}
                  />
                  <button onClick={() => signOut()} className="ml-3">
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="content-tabs lg:border-grayMain lg:border-y-2 lg:border-r-2 lg:rounded-r-lg w-full lg:p-8 py-5 px-4">
            {children}
          </div>
        </div>
      </nav>
    </Container>
  );
}
