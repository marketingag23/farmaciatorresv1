"use client";

import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
// import { toast } from "react-hot-toast"
import { Datum } from "@ft/app/models";
import { useCart } from "@ft/app/context/cartContext";
import { FaTrash } from "react-icons/fa";

interface Props {
  stock: number;
  product: Datum;
  card: boolean;
}
function range(start: number, end: number) {
  const ans = [];
  for (let i = start; i <= end; i += 1) {
    ans.push({ name: i });
  }
  return ans;
}
function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}

const ButtonQty = (props: Props) => {
  const {
    addToCart,
    validProduct,
    cart,
    updateProduct,
    deleteCartByCodigo,
  }: any = useCart();
  const [validProducts, setValidProducts] = useState(false);
  const [selectedd, setSelectedd] = useState(1);
  const Qty = range(1, props.stock);

  useEffect(() => {
    setValidProducts(validProduct(props.product));
  }, [cart]);

  return (
    <>
      <div
        className={classNames(
          props.card ? "gap-1  h-8" : "gap-4",
          "flex w-full"
        )}
      >
        <div className="w-1/4">
          <Listbox value={selectedd} onChange={setSelectedd}>
            <div className="relative">
              <Listbox.Button
                className={classNames(
                  props.card ? " py-1 " : "py-2",
                  "relative w-full cursor-default rounded-lg bg-whitetext-center sm:text-sm border-gray-300 border-2  pl-3 pr-10"
                )}
              >
                <span className="block truncate">{selectedd}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <Image
                    className="flex-shrink-0 h-5 w-5"
                    width={20}
                    height={20}
                    alt="icono stoke"
                    src={"/icons/gray/selectar.svg"}
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-40 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {Qty.map((a, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-4 pr-4 ${
                          active ? "text-bluet " : "text-gray-900"
                        }`
                      }
                      value={a.name}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {a.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {!validProducts ? (
          <button
            onClick={() => addToCart(props.product, selectedd, props.stock)}
            className="w-9/12 justify-center group bg-bluet p-0.5 rounded-md inline-flex items-center text-base font-medium
                    hover:text-gray-900 focus:outline-none max-h-32"
          >
            <Image
              className="w-5 mr-2"
              src={"/icons/white/Card.svg"}
              alt="icono busqueda"
              width={30}
              height={30}
            />
            <span className="text-white font-normal">Añadir a mi carrito</span>
          </button>
        ) : (
          // deleteCartByCodigo
          <>
            <button
              onClick={() => deleteCartByCodigo(props.product.codigo)}
              className={classNames(
                props.card ? "p-1.5 text-xs" : "p-3",
                "bg-red-500  rounded-lg text-white"
              )}
            >
              <FaTrash />
            </button>

            <button
              onClick={() =>
                updateProduct(props.product, selectedd, props.stock)
              }
              className={classNames(
                props.card ? "max-h-8  text-xs" : " max-h-32  text-base",
                "w-9/12 justify-center group bg-bluet p-0.5 rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none"
              )}
            >
              <Image
                className="w-5 mr-2"
                src={"/icons/white/Card.svg"}
                alt="icono busqueda"
                width={30}
                height={30}
              />
              <span className="text-white font-normal">Actualizar carrito</span>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ButtonQty;
