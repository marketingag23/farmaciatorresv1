export interface Farmacia {
  data: Datum[];
  success: boolean;
  length: number;
}

export interface Datum {
  ID: string;
  Direccion: string;
  Direccion2: string;
  Frame: string;
  latitude: number;
  longitude: number;
  Departamento: string;
  Ciudad: string;
  HorarioLYS: string;
  HorarioD: string;
}
