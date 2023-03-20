import { NextApiRequest, NextApiResponse } from "next";
import { TORRES_URL, FetchApi } from "@ft/config";

async function getCategory(descripcions: String) {
  const res = await FetchApi(`${TORRES_URL}/referencias/descripcion`, {
    ciudad: "08001",
    descripcion: descripcions,
    pagina: "1",
    items: "5",
  });
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      if (req.body.descripcion) {
        const data = await getCategory(req.body.descripcion);
        res.status(200).json(data.data);
      } else {
        res.status(400).json({
          mensaje: "Debe ingresar una descripcion",
          success: false,
        });
      }
    } else res.status(404).json({ mensaje: "El metodo no es valido" });
  } catch (error) {
    res.status(200).json({
      mensaje: "No se encontraron productos relacionadas",
      success: false,
    });
    res.status(500).json({ mensaje: "error.message" });
  }
}
