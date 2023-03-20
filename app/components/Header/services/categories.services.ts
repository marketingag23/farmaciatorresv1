import { TORRES_URL, FetchApi } from "@ft/config";
import { CategoryData } from "../models";

export async function getCategory(): Promise<CategoryData> {
  const res = await FetchApi(`${TORRES_URL}/categorias/08001`, {});
  return res.json();
}
