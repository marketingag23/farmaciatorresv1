import { NextApiRequest, NextApiResponse } from "next";
import { TORRES_URL, FetchApi } from "@ft/config";

async function getCategory(
  email: string,
  password: string,
  confirm_password: string,
  nombres: string,
  nit: string,
  celular: string,
  telefono: string,
  fecha_nacimiento: string,
  vidaSana: boolean
) {
  const res = await FetchApi(`${TORRES_URL}/users/signup`, {
    email,
    password,
    confirm_password,
    nombres,
    nit,
    celular,
    telefono,
    acepta_condiciones: "S",
    fecha_nacimiento,
    device: "webdesktop",
    vidaSana,
  });
  return res.json();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const data = await getCategory(
        req.body.email,
        req.body.password,
        req.body.confirm_password,
        req.body.nombres,
        req.body.nit,
        req.body.celular,
        req.body.telefono,
        req.body.fecha_nacimiento,
        req.body.vidaSana
      );
      if (data.success) {
        res.status(200).json(data);
      } else {
        res.status(400).json(data);
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
