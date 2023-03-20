import React from "react";
import { Container } from "@ft/components";
import { FilterCategory, FilterProducts } from "./components";

export default function Filter() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="col-span-1">
          <FilterCategory />
        </div>
        <div className="col-span-4">
          <FilterProducts />
        </div>
      </div>
    </Container>
  );
}
