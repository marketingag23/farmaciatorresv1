"use client";

import { createContext, useContext, useState } from "react";

export const MenuContext = createContext({});
export const useMenu = () => useContext(MenuContext);

export default function MenuProvaider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stor, setStor] = useState(false);
  const [menu, setMenu] = useState(false);
  const [productMenu, setProductMenu] = useState("");

  const handleStor = () => setStor(!stor);
  const handleMenu = () => setMenu(!menu);

  return (
    <MenuContext.Provider
      value={{
        stor,
        handleStor,
        productMenu,
        setProductMenu,
        menu,
        setMenu,
        handleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
