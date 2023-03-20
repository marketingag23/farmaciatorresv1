import { Container, TitleLink, ContainerBlack } from "@ft/components";
import Image from "next/image";
import {
  SliderHome,
  Marks,
  Marksdest,
  ProductDestacados,
  ProductBebe,
  Important,
  Offer,
  WhyBoy,
} from "./components";

export default function Home() {
  return (
    <>
      <Container>
        <SliderHome />
        <ContainerBlack>
          <TitleLink
            title={"Marcas destacadas"}
            url={"/destacados"}
            textLink={"Ver todas"}
          />
          <Marksdest />
        </ContainerBlack>
        <ContainerBlack>
          <TitleLink title={"Productos destacados"} url={"/destacados"} />
          <div className="flex lg:mb-8 gap-0 lg:gap-8">
            <Image
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="700"
              className="w-2/4"
              src={"/images/banners/asepxia.png"}
              alt={"Asepxia"}
              width={512}
              height={119}
            />
            <Image
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="700"
              className="w-2/4"
              src={"/images/banners/drops.png"}
              alt={"Asepxia"}
              width={512}
              height={119}
            />
          </div>
          <ProductDestacados />
        </ContainerBlack>
        <ContainerBlack>
          <TitleLink title={"Bebés y maternidad"} url={"/ofertas"} />
          <div className="flex mb-8 lg:gap-8 gap-0">
            <Image
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="700"
              className="w-2/4"
              src={"/images/banners/cocaclola.png"}
              alt={"Asepxia"}
              width={512}
              height={119}
            />
            <Image
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="700"
              className="w-2/4"
              src={"/images/banners/vapiru.png"}
              alt={"Asepxia"}
              width={512}
              height={119}
            />
          </div>
          <ProductBebe />
        </ContainerBlack>

        <div className="container mx-auto md:my-5 px-5 py-0.5 lg:rounded-full rounded-2xl bg-white shadow-sm">
          <Marks />
        </div>
        <ContainerBlack>
          <Important />
        </ContainerBlack>

        <ContainerBlack>
          <TitleLink
            title={"Las mejores ofertas de salud y belleza"}
            url={"/ofertas"}
            textLink={"Ver todas"}
          />
          <Offer />
        </ContainerBlack>
      </Container>
      <WhyBoy />
    </>
  );
}
