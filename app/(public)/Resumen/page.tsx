import React from "react";
import { Container } from "@ft/components";
import { ResumenProducts, ResumenPedido, ProgreessBarr } from "./components";

export default function Resumen() {
  return (
    <Container>
      <ProgreessBarr />
      <div className="lg:flex gap-5">
        <div className="lg:w-3/5 ">
          <ResumenProducts />
        </div>
        <div className="lg:w-2/5">
          <ResumenPedido />
        </div>
      </div>
    </Container>
  );
}
