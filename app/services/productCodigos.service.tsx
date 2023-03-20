import { TORRES_URL, FetchApi } from "@ft/config";
import { Products } from "../models";

export async function getPruductsCodigos(): Promise<Products> {
  const res = await FetchApi(`${TORRES_URL}/referencias/codigos`, {
    ciudad: "08001",
    codigos:
      "086393,057367,098258,148122,085002,105249,109952,141699,016037,020161,038013,042750",
  });
  return res.json();
}
