import React from "react";
import { ComtainerBorder, Container } from "@ft/components";
import { Title, From } from "./components";

export default function Register() {
  return (
    <Container>
      <ComtainerBorder>
        <div className="p-5 lg:p-0">
          <Title />
          <div className="grid gap-10 lg:grid-cols-2 grid-cols-1">
            <From classNames="col-span-1" />
          </div>
        </div>
      </ComtainerBorder>
    </Container>
  );
}
