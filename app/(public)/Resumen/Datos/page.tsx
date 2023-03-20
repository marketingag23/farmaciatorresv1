import React from "react";
import { Container } from "@ft/components";
import { ResumenPedido, ProgreessBarr } from "../components";
import { Direccion } from "./components";

export default function DatosUser() {
  return (
    <Container>
      <ProgreessBarr />
      <div className="lg:flex gap-5">
        <div className="lg:w-3/5 ">
          <Direccion />
        </div>
        <div className="lg:w-2/5">
          <ResumenPedido />
        </div>
      </div>
    </Container>
  );
}
