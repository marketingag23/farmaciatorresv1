"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Breadcrumbs } from "@ft/components";
import { Datum } from "@ft/app/models";
import Link from "next/link";
import Description from "../decription/description";
import ButtonQty from "../ButtonQty/buttonQty";

const ProductDetail = ({ props }: { props: Datum }) => {
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCursorPosition({ x, y });
  };
  return (
    <Container>
      {props.Nro !== 0 ? (
        <div className="">
          <Breadcrumbs
            Categoria={props.Categoria}
            UrlCategoria={"/"}
            Subcategoria={props.Subcategoria}
            UrlSubcategoria={"/"}
            descripcion={props.descripcion}
            Urldescripcion={"/"}
          />
          <Image
            className="my-4"
            alt="git carnaval"
            width={1580}
            height={63}
            src={"/images/gif/carnaval.gif"}
            data-aos="zoom-ou"
            data-aos-duration="1500"
            data-aos-delay="200"
          />

          <div
            className="border-gray-300 lg:border-2 rounded-lg bg-white "
            data-aos="zoom-ou"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="grid grid-cols-12 lg:gap-9 mt-5">
              {/* Imagen porducto */}
              <div
                className="col-span-12 lg:col-span-5 lg:pl-6"
                data-aos="zoom-in"
                data-aos-delay="650"
                data-aos-duration="700"
              >
                <div className="overflow-hidden lg:w-[30rem] lg:h-[22.5rem] w-full">
                  <div className="relative " onMouseMove={handleMouseMove}>
                    <Image
                      className="w-full transform hover:scale-150 cursor-crosshair duration-100 "
                      width={1280}
                      height={1280}
                      src={`https://www.droguerialaeconomia.com/economia/site/img/1x/${props.codigo}.jpg`}
                      alt={props.descripcion}
                      style={{
                        transformOrigin: `${cursorPosition.x}px ${cursorPosition.y}px`,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Envio 24 hotas y # */}
              <div className="col-span-12 lg:col-span-7 lg:mr-8 px-3">
                {/* <h4 className="font-normal mb-8">
                Invisible con tecnología MotionSense™
              </h4> */}
                <h3
                  className="text-[#091535] text-3xl font-bold mb-5 lg:mt-10"
                  data-aos="zoom-in"
                  data-aos-delay="550"
                  data-aos-duration="700"
                >
                  {props.descripcion.charAt(0).toUpperCase() +
                    props.descripcion.slice(1)}
                </h3>

                <span
                  className="font-light text-gray-500"
                  data-aos="zoom-in"
                  data-aos-delay="750"
                  data-aos-duration="700"
                >
                  {props.descripcion_adicional !== null &&
                    props.descripcion_adicional}
                </span>
                <div
                  className="flex lg:my-4 mb-2 py-4 justify-start"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="700"
                >
                  {props.Antes > props.Ahora ? (
                    <>
                      <p className="text-left font-bold mt-0.5 md:w-5/12  md:mr-2 md:mt-1 text-4xl lg:mr-1">
                        <span className="text-gray-500 line-through">
                          {formatterPeso.format(props.Antes)}
                        </span>
                        <span className="text-pumpkin font-bold ml-2 text-5xl">
                          {formatterPeso.format(props.Ahora)}
                        </span>
                      </p>
                    </>
                  ) : (
                    <p className="text-pumpkin font-bold text-5xl">
                      {formatterPeso.format(props.Ahora)}
                    </p>
                  )}
                </div>
                <div className="flex">
                  {props.Porcentaje !== 0 && (
                    <div
                      className="p-1 mr-4 rounded-md text-white font-medium bg-pumpkin top-4  
                                    md:rounded-r-lg md:p-2"
                      data-aos="zoom-in"
                      data-aos-delay="1100"
                      data-aos-duration="700"
                    >
                      -{props.Porcentaje}%
                    </div>
                  )}
                  <div
                    className="text-bluet p-0.5 font-medium bg-[#EFF4FF]  top-4 left-16  rounded-md flex border-2 border-bluet
                                    md:p-1.5 md:rounded-lg"
                    data-aos="zoom-in"
                    data-aos-delay="1300"
                    data-aos-duration="700"
                  >
                    <Image
                      className="mr-1 md:mr-2 "
                      alt="Subtract"
                      src={"/icons/products/Subtract.svg"}
                      width={25}
                      height={25}
                    />
                    + puntos vida sana
                  </div>
                </div>

                {/* precio y pago */}
                <div className="col-span-8 lg:col-span-5 lg:pr-6 ">
                  <div className="flex text-center justify-center lg:mt-3 ">
                    <div className="lg:w-3/5 lg:mt-12 mt-6 w-full">
                      <ButtonQty
                        stock={props.stock}
                        product={props}
                        card={false}
                      />
                    </div>
                  </div>
                  <div className="flex text-center justify-center mt-3">
                    <Image
                      className="w-5 mr-2 cursor-pointer"
                      src={"/icons/gray/me-gusta.svg"}
                      alt="icono busqueda"
                      width={30}
                      height={30}
                    />
                    <span className="text-gray-500">
                      Añadir a mis favoritos
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-12 grid grid-cols-4 gap-4 p-4 border-t border-gray-300">
                <div className="col-span-8 lg:col-span-1 flex text-gray-600 font-semibold">
                  <Image
                    className="w-9 lg:w-13 mr-2"
                    src={"/icons/gray/producto_de_confianza.svg"}
                    alt="Productos de confianza"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2 lg:mt-3">Productos de confianza</span>
                </div>
                <div className="col-span-8 lg:col-span-1 flex text-gray-600 font-semibold">
                  <Image
                    className="w-9 lg:w-13 mr-2"
                    src={"/icons/gray/acumula_puntos.svg"}
                    alt="Acumula puntos en todas tus compras"
                    width={50}
                    height={50}
                  />
                  <span>Acumula puntos en todas tus compras</span>
                </div>
                <div className="col-span-8 lg:col-span-1 flex text-gray-600 font-semibold">
                  <Image
                    className="w-9 lg:w-13 mr-2"
                    src={"/icons/gray/paga_seguro.svg"}
                    alt="Pago seguro"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2 lg:mt-3">Pago 100% seguro</span>
                </div>
                <div className="col-span-8 lg:col-span-1 flex text-gray-600 font-semibold">
                  <Image
                    className="w-9 lg:w-13 mr-2"
                    src={"/icons/gray/envio_gratis.svg"}
                    alt="envio gratis"
                    width={50}
                    height={50}
                  />
                  <span>Envío gratis por compras superiores a $49.900</span>
                </div>
              </div>
            </div>
          </div>
          <Description />
        </div>
      ) : (
        <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
          <section className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              <a href="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-20 w-auto"
                  src="/images/logos/Logotype.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="py-12">
              <div className="text-center">
                <p className="text-sm font-semibold text-bluet uppercase tracking-wide">
                  404 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Producto no encontrado
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Lo sentimos, no pudimos encontrar el producto que estás
                  buscando.
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="text-base font-medium text-bluet hover:text-blue-500"
                  >
                    Volver al home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Contactar con Soporte
              </a>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-green-600"
              >
                Whatsapp
              </a>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-bluet"
              >
                Facebook
              </a>
            </nav>
          </section>
        </div>
      )}
    </Container>
  );
};

export default ProductDetail;
