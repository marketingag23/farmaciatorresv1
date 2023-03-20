export interface CategoryData {
  success: boolean;
  message: string;
  data: Datum[];
}

export interface Datum {
  IdGrupo: string;
  Grupo: string;
  Categorias: Categoria[];
}

export interface Categoria {
  IdCategoria: string;
  Categoria: string;
  Subcategorias: Subcategoria[];
}

export interface Subcategoria {
  IdSubcategoria: string;
  Subcategoria: string;
}
