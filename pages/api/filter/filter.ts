import { NextApiRequest, NextApiResponse } from "next";
import { TORRES_URL, FetchApi } from "@ft/config";

async function getDescri(descripcions: String) {
  const res = await FetchApi(`${TORRES_URL}/referencias/descripcion`, {
    ciudad: "08001",
    descripcion: descripcions,
    pagina: "1",
    items: "24",
  });
  return res.json();
}

async function getCategory(codigo: String, pagina?: String) {
  const res = await FetchApi(
    `${TORRES_URL}/referencias/catsubcat/08001/${codigo}/${pagina || "1"}/100`
  );
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      if (req.body.descripcion !== "") {
        const data = await getDescri(req.body.descripcion);
        res.status(200).json(data.data);
      } else if (req.body.codigo) {
        const data = await getCategory(req.body.codigo, req.body.pagina);
        res.status(200).json(data.data);
      } else {
        res.status(400).json({
          mensaje: "opcion invalida",
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
