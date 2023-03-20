import { NextApiRequest, NextApiResponse } from "next";
import { Locations } from "./data/farmacia.data";

function getDistanciaMetros(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const rad = (x: number) => (x * Math.PI) / 180;
  const R = 6378.137; // Radio de la tierra en km
  const dLat = rad(lat2 - lat1);
  const dLong = rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // aquí obtienes la distancia en metros por la conversion 1Km =1000m
  const d = R * c * 1000;
  return d;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const coordenadas = [
        { distanciaMetros: 0, codigo: "0000", Direccion: "" },
      ];
      const arrCooder: number[] = [];

      if (req.body.latitude && req.body.longitude) {
        const Latitude = Number(req.body.latitude);
        const Longitude = Number(req.body.longitude);

        Locations.map((a) => {
          const Distancia = getDistanciaMetros(
            Latitude,
            Longitude,
            a.latitude,
            a.longitude
          );
          coordenadas.push({
            distanciaMetros: Distancia,
            codigo: a.ID,
            Direccion: a.Direccion,
          });
          return arrCooder.push(Distancia);
        });

        const min = Math.min(...arrCooder);
        const Data = coordenadas.filter((a) => a.distanciaMetros === min);

        res.status(200).json(Data);
      } else {
        res.status(404).json({ mensaje: "error de consulta" });
      }
    } else res.status(404).json({ mensaje: "El metodo no es valido" });
  } catch (error) {
    res.status(500).json({ mensaje: "error.message" });
  }
}
