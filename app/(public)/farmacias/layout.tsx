import { Container } from "@ft/components";
import { ImageWithText, Drogueriacercana } from "./components";
// import Tudrogueriamascercana from './drogueriacercana'
export default function FarmaciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Drogueriacercana />
      <Container>
        <nav>
          <ImageWithText />
        </nav>
        {children}
      </Container>
    </>
  );
}
