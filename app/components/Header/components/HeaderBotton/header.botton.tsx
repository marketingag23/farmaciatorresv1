"use client";

import { Container } from "@ft/components";
import { useFilter } from "@ft/app/context/filterContex";
import { useRouter } from "next/navigation";
import { CardMenuCat, BottonCategory } from "./components";
import { CategoryData } from "../../models";

const Data = [
  {
    IdGrupo: "01",
    Grupo: "Medicamentos",
    Categorias: [
      {
        IdCategoria: "01001",
        Categoria: "Medicamentos",
      },
      {
        IdCategoria: "01002",
        Categoria: "Genéricos",
      },
      {
        IdCategoria: "01004",
        Categoria: "Regulados",
      },
      {
        IdCategoria: "01007",
        Categoria: "Ortopédicos",
      },
      {
        IdCategoria: "01005",
        Categoria: "Hospitalarios",
      },
    ],
  },
  {
    IdGrupo: "02",
    Grupo: "Salud y belleza",
    Categorias: [
      {
        IdCategoria: "02008",
        Categoria: "Cuidado del bebé",
      },
      {
        IdCategoria: "02003",
        Categoria: "Higiene personal",
      },
      {
        IdCategoria: "02001",
        Categoria: "Cuidado del cabello",
      },
      {
        IdCategoria: "02007",
        Categoria: "Cuidado de la piel",
      },
      {
        IdCategoria: "02002",
        Categoria: "Higiene oral",
      },
      {
        IdCategoria: "02005",
        Categoria: "Protección femenina",
      },
      {
        IdCategoria: "02006",
        Categoria: "Maquillaje",
      },
      {
        IdCategoria: "02004",
        Categoria: "Productos de la afeitada",
      },
    ],
  },
  {
    IdGrupo: "03",
    Grupo: "Botiquín",
    Categorias: [
      {
        IdCategoria: "03005",
        Categoria: "Vitaminas, minerales y suplementos",
      },
      {
        IdCategoria: "03003",
        Categoria: "Alivio del dolor",
      },
      {
        IdCategoria: "03004",
        Categoria: "Gripa, tos",
      },
      {
        IdCategoria: "03001",
        Categoria: "Gastrointestinal",
      },
      {
        IdCategoria: "03007",
        Categoria: "Dermatológicos",
      },
      {
        IdCategoria: "03002",
        Categoria: "Cuidado de la herida",
      },
      {
        IdCategoria: "03006",
        Categoria: "Salud sexual",
      },
      {
        IdCategoria: "03008",
        Categoria: "Ojos y oido",
      },
    ],
  },

  {
    IdGrupo: "04",
    Grupo: "Alimentos y bebidas",
    Categorias: [
      {
        IdCategoria: "04002",
        Categoria: "Bebidas",
      },
      {
        IdCategoria: "04001",
        Categoria: "Alimentos",
      },
    ],
  },
  {
    IdGrupo: "02008",
    Grupo: "Cuidado del bebé",
    Categorias: [
      {
        IdCategoria: "0200809",
        Categoria: "Fórmulas infantiles",
      },
      {
        IdCategoria: "0200813",
        Categoria: "Pañales",
      },
      {
        IdCategoria: "0200812",
        Categoria: "Leches infantiles",
      },
      {
        IdCategoria: "0200803",
        Categoria: "Antipañalitis y vaselina",
      },
      {
        IdCategoria: "0200814",
        Categoria: "Pañitos humedos",
      },
      {
        IdCategoria: "0200815",
        Categoria: "Compotas y cereales",
      },
      {
        IdCategoria: "0200807",
        Categoria: "Cuidado del cabello",
      },
      {
        IdCategoria: "0200810",
        Categoria: "Higiene oral",
      },
      {
        IdCategoria: "0200804",
        Categoria: "Colonia",
      },
      {
        IdCategoria: "0200801",
        Categoria: "Accesorios niños",
      },
      {
        IdCategoria: "0200811",
        Categoria: "Jabón y baño espumoso",
      },
      {
        IdCategoria: "0200806",
        Categoria: "Crema corporal",
      },
      {
        IdCategoria: "0200802",
        Categoria: "Aceite",
      },
      {
        IdCategoria: "0200816",
        Categoria: "Talco",
      },
      {
        IdCategoria: "0200808",
        Categoria: "Estuches",
      },
    ],
  },
  {
    IdGrupo: "07",
    Grupo: "Varios",
    Categorias: [
      {
        IdCategoria: "07001",
        Categoria: "Aseo hogar",
      },
      {
        IdCategoria: "07006",
        Categoria: "Mascotas",
      },
      {
        IdCategoria: "07003",
        Categoria: "Pilas",
      },
      {
        IdCategoria: "07007",
        Categoria: "Accesorios",
      },
      {
        IdCategoria: "07002",
        Categoria: "Lentes",
      },
    ],
  },
];

const HeaderBotttom = ({ props }: { props: CategoryData }) => {
  const router = useRouter();

  const { hadleOptionCodigo }: any = useFilter();

  const handleLinkFilter = (id: string, descripcion: string) => {
    console.log(id);
    router.push("/Filtrado");
    hadleOptionCodigo(id, descripcion);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <CardMenuCat />
      <div className="bg-white hidden lg:block shadow-lg ">
        <Container>
          <div className="mx-auto py-0.5 pb-1 z-20">
            <div className="flex flex-wrap justify-between">
              <div className="w-full  items-end justify-end">
                <BottonCategory props={props.data} />
                <div className="float-right -mt-8 relative">
                  <div className="2xl:gap-6 gap-3 order-3 w-full flex  font-medium text-gray-500 text-sm">
                    {Data.map((option) => (
                      <ul key={option.IdGrupo}>
                        <li className="relative mx-1 px-1 py-1 group rounded-full mb-1 md:mb-0">
                          <p className="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800 cursor-pointer  mt-1">
                            {option.Grupo}
                          </p>
                          {/* px-0 my-6 md:border-2 md:rounded-lg md:px-8 md:py-8 md:border-gray-300 xl:block lg:px-8  */}
                          <ul
                            className="w-60 border-2 border-gray-300 text-left absolute left-0 top-0 mt-8 -ml-10 p-2 
                          rounded-lg shadow-2xl bg-white  hidden group-hover:block"
                          >
                            {option.Categorias.map((category) => (
                              <li
                                key={category.IdCategoria}
                                className="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600  hover:text-bluet "
                              >
                                <button
                                  className="px-2 py-0.5 font-normal whitespace-no-wrap text-gray-600 hover:text-blue-800 cursor-pointer text-left text-sm"
                                  onClick={() =>
                                    handleLinkFilter(
                                      category.IdCategoria,
                                      category.Categoria
                                    )
                                  }
                                >
                                  <span className="">{category.Categoria}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderBotttom;
