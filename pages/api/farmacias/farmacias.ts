import { NextApiRequest, NextApiResponse } from "next";
import { Locations } from "./data/farmacia.data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      if (req.body.departamento) {
        const departament: string = req.body.departamento;
        const result = Locations.filter(
          (farmacia) => farmacia.Departamento === departament
        );
        if (result.length > 0) {
          res
            .status(200)
            .json({ data: result, success: true, length: result.length });
        } else {
          res.status(200).json({
            mensaje: "No se encontraron farmacias relacionadas",
            success: false,
          });
        }
      } else if (req.body.ciudad) {
        const city: string = req.body.ciudad;
        const result = Locations.filter((farmacia) => farmacia.Ciudad === city);
        if (result.length > 0) {
          res
            .status(200)
            .json({ data: result, success: true, length: result.length });
        } else {
          res.status(200).json({
            mensaje: "No se encontraron farmacias relacionadas",
            success: false,
          });
        }
      } else if (req.body.codigo) {
        const { codigo } = req.body;
        const result = Locations.filter((farmacia) => farmacia.ID === codigo);
        if (result.length > 0) {
          res.status(200).json({ data: result, success: true });
        } else {
          res.status(200).json({
            mensaje: "Farmacia no encontrada",
            success: false,
          });
        }
      } else {
        res.status(404).json({ mensaje: "error de consulta" });
      }
    } else res.status(404).json({ mensaje: "El metodo no es valido" });
  } catch (error) {
    res.status(500).json({ mensaje: "error.message" });
  }
}
