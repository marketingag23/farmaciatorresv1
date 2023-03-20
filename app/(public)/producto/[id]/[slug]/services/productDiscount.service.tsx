import { TORRES_URL, FetchApi } from "@ft/config";
import { Products } from "@ft/app/models";

export async function getPruductDiscount(codigo: string): Promise<Products> {
  const res = await FetchApi(`${TORRES_URL}/referencias/codigos`, {
    ciudad: "08001",
    codigos: codigo,
  });
  return res.json();
}
