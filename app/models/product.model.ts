export interface Products {
  success: boolean;
  message: string;
  data: Datum[];
}

export interface Datum {
  Prioridad: number;
  pos: string;
  codigo: string;
  idclientes: string;
  subgrupo35: string;
  Categoria: string;
  subgrupo36: string;
  Subcategoria: string;
  descripcion: string;
  stock: number;
  Antes: number;
  Ahora: number;
  Porcentaje: number;
  VlrMinimo: number;
  idoferta: string;
  Cant: number;
  IdUnidad: string;
  descripcion_adicional?: any;
  valor_contenido: string;
  MaximaVenta: number;
  proveedor: string;
  Nro: number;
}
