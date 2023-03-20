import { TORRES_URL, FetchApi } from "@ft/config";
import { Products } from "../models";

export async function getPruductDiscount(): Promise<Products> {
  const res = await FetchApi(`${TORRES_URL}/ofertas`, {
    ciudad: "08001",
    items: 10,
  });
  return res.json();
}

export async function getCategory(codigo: String, pagina?: String) {
  const res = await FetchApi(
    `${TORRES_URL}/referencias/catsubcat/08001/${codigo}/${pagina || "1"}/12`
  );
  return res.json();
}
