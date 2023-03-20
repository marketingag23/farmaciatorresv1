import { NextApiRequest, NextApiResponse } from "next";
import { TORRES_URL, FetchApi } from "@ft/config";

async function getDeleteAdress(
  email: string,
  auth_token: string,
  nombre_direccion: string
) {
  const res = await FetchApi(`${TORRES_URL}/users/deleteaddress`, {
    userInfo: {
      email,
      auth_token,
    },
    myAddress: {
      nombre_direccion,
    },
  });
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const data = await getDeleteAdress(
        req.body.email,
        req.body.auth_token,
        req.body.nombre_direccion
      );
      res.status(200).json(data);
    } else res.status(404).json({ mensaje: "El metodo no es valido" });
  } catch (error) {
    res.status(200).json({
      mensaje: "No se encontraron resultados",
      success: false,
    });
    res.status(500).json({ mensaje: "error.message" });
  }
}
