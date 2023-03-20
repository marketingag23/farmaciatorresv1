import { NextApiRequest, NextApiResponse } from "next";
import { TORRES_URL, FetchApi } from "@ft/config";

async function getAddAdress(email: string, auth_token: string) {
  const res = await FetchApi(`${TORRES_URL}/users/getaddress`, {
    email,
    auth_token,
  });
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const data = await getAddAdress(req.body.email, req.body.auth_token);
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
