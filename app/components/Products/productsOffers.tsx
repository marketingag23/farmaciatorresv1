import React, { use, Suspense } from "react";
import { ProductLoading } from "@ft/components";
import Product from "@ft/components/Products/product";
import { getPruductDiscount } from "@ft/app/services";

const ProductsOffers = () => {
  const productsDiscount = use(getPruductDiscount());
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div
          className="grid grid-cols-2 gap-4
                sm:grid-cols-3
                xl:grid-cols-5 lg:gap-8"
        >
          {productsDiscount.data.map((item, index: number) => (
            <Suspense
              key={`${item.codigo}${index}`}
              fallback={<ProductLoading />}
            >
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              >
                <Product key={`${item.codigo}${index}`} Data={item} />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsOffers;
