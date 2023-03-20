/* This example requires Tailwind CSS v2.0+ */
// import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'

"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  Categoria?: string;
  UrlCategoria?: string;
  Subcategoria?: string;
  UrlSubcategoria?: string;
  descripcion?: string;
  Urldescripcion?: string;
}

const Breadcrumbs = (props: Props) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4 truncate">
        <li data-aos="zoom-in" data-aos-delay="250" data-aos-duration="700">
          <div>
            <a href="/" className="text-gray-400 hover:text-bluet">
              <svg
                className="flex-shrink-0 h-5 w-5"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-gray-400 hover:fill-bluet"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.09929 6.51928C1.66663 7.30972 1.66663
                                 8.26323 1.66663 10.1703V11.4378C1.66663 14.6885 1.66663 16.3139 2.64294 17.3238C3.61925 18.3337 5.1906 18.3337 8.33329 18.3337H11.6666C14.8093
                                  18.3337 16.3807 18.3337 17.357 17.3238C18.3333 16.3139 18.3333 14.6885 18.3333 11.4378V10.1703C18.3333 8.26323 18.3333 7.30972 17.9006
                                   6.51928C17.468 5.72883 16.6775 5.23825 15.0966 4.2571L13.4299 3.22272C11.7588 2.18557 10.9232 1.66699 9.99996 1.66699C9.07668 1.66699 
                                   8.24112 2.18557 6.56999 3.22272L4.90332 4.2571C3.32241 5.23825 2.53196 5.72883 2.09929 6.51928ZM9.37496 15.0003C9.37496 15.3455 9.65478
                                    15.6253 9.99996 15.6253C10.3451 15.6253 10.625 15.3455 10.625 15.0003V12.5003C10.625 12.1551 10.3451 11.8753 9.99996 11.8753C9.65478
                                     11.8753 9.37496 12.1551 9.37496 12.5003V15.0003Z"
                />
              </svg>
              <span className="sr-only">Farmacia Torres</span>
            </a>
          </div>
        </li>
        {props.Categoria && (
          <li data-aos="zoom-in" data-aos-delay="450" data-aos-duration="700">
            <div className="flex items-center">
              <Image
                className="flex-shrink-0 h-5 w-5"
                width={20}
                height={20}
                alt="icono stoke"
                src={"/icons/gray/stroke.svg"}
              />

              <Link
                href={`${props.UrlCategoria}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-bluet"
              >
                {props.Categoria}
              </Link>
            </div>
          </li>
        )}
        {props.Subcategoria && (
          <li data-aos="zoom-in" data-aos-delay="650" data-aos-duration="700">
            <div className="flex items-center">
              <Image
                className="flex-shrink-0 h-5 w-5"
                width={20}
                height={20}
                alt="icono stoke"
                src={"/icons/gray/stroke.svg"}
              />

              <Link
                href={`${props.UrlSubcategoria}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-bluet"
              >
                {props.Subcategoria}
              </Link>
            </div>
          </li>
        )}
        {props.descripcion && (
          <li data-aos="zoom-in" data-aos-delay="850" data-aos-duration="700">
            <div className="flex items-center">
              <Image
                className="flex-shrink-0 h-5 w-5"
                width={20}
                height={20}
                alt="icono stoke"
                src={"/icons/gray/stroke.svg"}
              />

              <Link
                href={`${props.Urldescripcion}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-bluet"
              >
                {props.descripcion}
              </Link>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
