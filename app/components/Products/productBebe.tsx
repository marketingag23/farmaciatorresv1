"use client";

import React, { use, Suspense } from "react";
import { ProductLoading } from "@ft/components";
import Product from "@ft/components/Products/product";
import { getCategory } from "@ft/app/services";
// import { useFilter } from "@ft/app/context/filterContex";

const ProductsOffers = () => {
  const productsDiscount = use(getCategory("0200814", "1"));
  // const { loading }: any = useFilter();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-[1600px]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 lg:gap-4">
          {productsDiscount.data.length < 1 ? (
            <>loading</>
          ) : (
            productsDiscount.data.map((item: any, index: number) => (
              <Suspense
                key={`${item.codigo}${index}`}
                fallback={<ProductLoading />}
              >
                {item.descripcion && (
                  <div
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                    data-aos-duration="700"
                  >
                    <Product key={`${item.codigo}${index}`} Data={item} />
                  </div>
                )}
              </Suspense>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsOffers;
