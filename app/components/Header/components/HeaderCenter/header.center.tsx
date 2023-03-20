"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@ft/components";
import { useMenu } from "@ft/app/context/menuContext";
// import { useRouter } from "next/navigation";
import { BotonCard, BotonAcont, Search } from "./components";

function HeaderCenter() {
  const { handleMenu }: any = useMenu();
  // const router = useRouter();
  return (
    <>
      <Container>
        <div className="grid grid-cols-12 lg:grid-cols-11 gap-6 py-4 z-50 bg-bluet">
          <button className="col-span-2 lg:hidden" onClick={() => handleMenu()}>
            <Image
              src={"/icons/white/amburger.svg"}
              alt="logo farmacaia torres"
              width={25}
              height={25}
            />
          </button>

          <a
            // onClick={() => {
            //   window.scrollTo({ top: 0, behavior: "smooth" });
            //   router.push("/");
            // }}
            href={"/"}
            className="col-span-7 lg:col-span-4"
          >
            <Image
              className="mt-1 hidden     lg:hidden"
              src={"/images/logos/LogoFarmaciaTorres.svg"}
              alt="logo farmacaia torres"
              width={315}
              height={32}
            />
            <Image
              className=""
              src={"/images/logos/LogoFarmaciaTorresBlanco.svg"}
              alt="logo farmacaia torres"
              width={315}
              height={32}
            />
          </a>
          <Search />

          <div className="col-span-3 lg:col-span-3 grid grid-cols-4 gap-1 lg:gap-8">
            <div className="hidden lg:block lg:col-span-2"></div>
            <div className="col-span-2 lg:col-span-1">
              <BotonAcont />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <BotonCard />
            </div>
          </div>
        </div>
      </Container>
      <hr className="w-full" />
    </>
  );
}

export default HeaderCenter;
