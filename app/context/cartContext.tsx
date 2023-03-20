"use client";

import { ImageFallback } from "@ft/components";
import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import { toast } from "react-hot-toast";
// import Product from "../components/Header/components/HeaderBotton/components/product";
// import { useMenu } from "@ft/app/context/menuContext";

export const CardContext = createContext({});

export const useCart = () => useContext(CardContext);
type Product = {
  Ahora: number;
  Antes: number;
  Cant: number;
  Categoria: string;
  IdUnidad: number;
  MaximaVenta: number;
  qty: number;
  Porcentaje: number;
  Subcategoria: string;
  VlrMinimo: number;
  codigo: string;
  descripcion: string;
  descripcion_adicional: string;
  idclientes: string;
  idoferta: number;
  proveedor: string;
  rownum: string;
  stock: 3;
  subgrupo35: string;
  subgrupo36: string;
  valor_contenido: string;
  subtotal: number;
};

export default function MenuProvaider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { handleStor }: any = useMenu();
  const [cart, setCart] = useState<Product[]>([]);
  const [cartLength, setCartLength] = useState(cart.length);
  const [total, setTotal] = useState<number>(0);
  const cookieCart = getCookie("cookies__cart");

  const addToCart = (item: Product, qty: number, stock: number) => {
    if (qty === 0) {
      toast.error("No se puede agregar un producto vacio");
      return;
    }

    if (cart.some((el) => el.codigo === item.codigo)) {
      const index = cart.findIndex((el) => el.codigo === item.codigo);
      const product = cart[index];

      if (product.qty + qty <= stock) {
        product.qty += qty;
      } else {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 border-2 border-red-500`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <ImageFallback
                    className="h-10 w-10 object-cover object-center "
                    alt={product.descripcion}
                    key={product.codigo}
                    width={300}
                    height={300}
                    // objectFit="cover"
                    src={`https://www.droguerialaeconomia.com/economia/site/img/1x/${product.codigo}.jpg`}
                    fallbackSrc={"/images/products/imagenoencontrada.svg"}
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    No hay suficiente stock, quedan {stock - product.qty}{" "}
                    disponibles
                  </p>
                  <p className="mt-3 text-sm text-gray-500">
                    {product.descripcion}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        return;
      }
      const newCart = [...cart];
      newCart.splice(index, 1, product);
      setCart([...newCart]);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 border border-gray-300`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <ImageFallback
                  className="h-10 w-10 object-cover object-center "
                  alt={product.descripcion}
                  key={product.codigo}
                  width={300}
                  height={300}
                  // objectFit="cover"
                  src={`hhttps://www.droguerialaeconomia.com/economia/site/img/1x/${product.codigo}.jpg`}
                  fallbackSrc={"/images/products/imagenoencontrada.svg"}
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Se actualizo carrito {product.qty} {product.descripcion}
                </p>
                {/* <p className="mt-3 text-sm text-gray-500">
                    {product.descripcion}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      const product = { ...item, qty };
      setCart([...cart, product]);

      if (product.Ahora < product.Antes) {
        product.subtotal = product.Ahora * qty;
      } else {
        product.subtotal = product.Antes * qty;
      }
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5  border border-gray-300`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <ImageFallback
                  className="h-10 w-10 object-cover object-center "
                  alt={product.descripcion}
                  key={product.codigo}
                  width={300}
                  height={300}
                  // objectFit="cover"
                  src={`https://www.droguerialaeconomia.com/economia/site/img/1x/${product.codigo}.jpg`}
                  fallbackSrc={"/images/products/imagenoencontrada.svg"}
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Se agregaron <span className="font-bold">{qty}</span>{" "}
                  {product.descripcion} al carrito
                </p>
                {/* <p className="mt-3 text-sm text-gray-500">
                    {product.descripcion}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  const deleteCartByCodigo = (codigo: string) => {
    const newCart = [...cart];
    const index = newCart.findIndex((el) => el.codigo === codigo);
    newCart.splice(index, 1);
    setCart([...newCart]);
  };

  const updateProduct = (item: Product, qty: number, stock: number) => {
    if (qty === 0) {
      deleteCartByCodigo(item.codigo);
      return;
    }

    if (cart.some((el) => el.codigo === item.codigo)) {
      const index = cart.findIndex((el) => el.codigo === item.codigo);
      const product = cart[index];

      if (product.qty === qty) {
        return;
      }

      if (product.qty <= stock) {
        product.qty = qty;
      }
      const newCart = [...cart];
      newCart.splice(index, 1, product);

      if (product.Ahora < product.Antes) {
        product.subtotal = product.Ahora * qty;
      } else {
        product.subtotal = product.Antes * qty;
      }

      setCart([...newCart]);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 border border-gray-300`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <ImageFallback
                  className="h-10 w-10 object-cover object-center "
                  alt={product.descripcion}
                  key={product.codigo}
                  width={300}
                  height={300}
                  // objectFit="cover"
                  src={`https://www.droguerialaeconomia.com/economia/site/img/1x/${product.codigo}.jpg`}
                  fallbackSrc={"/images/products/imagenoencontrada.svg"}
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Carrito actualizado{" "}
                  <span className="font-bold">x {product.qty}</span>{" "}
                  {product.descripcion}
                </p>
                {/* <p className="mt-3 text-sm text-gray-500">
                    {product.descripcion}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  const deleteCart = () => {
    setCart([]);
  };

  const validProduct = (item: Product) => {
    if (cart.some((el) => el.codigo === item.codigo)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (cookieCart) {
      setCart(JSON.parse(String(cookieCart)));
    }
  }, [cookieCart]);

  useEffect(() => {
    if (cart.length > 0) {
      setCookie("cookies__cart", cart, { maxAge: 60 * 10 });
    }

    setCartLength(cart.length);

    const subotal = cart.map(function (el) {
      return el.subtotal;
    });

    const Total = subotal.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0);

    setTotal(Total);
  }, [cart]);

  return (
    <CardContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteCart,
        deleteCartByCodigo,
        validProduct,
        updateProduct,
        cartLength,
        total,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
