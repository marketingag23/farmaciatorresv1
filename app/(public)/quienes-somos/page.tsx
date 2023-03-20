import { Container } from "@ft/components";
import { Characteristics, HowToBuy, Welcome } from "./components";

export default async function Home() {
  return (
    <>
      <Container>
        <Welcome />
      </Container>
      <Characteristics />
      <Container>
        <HowToBuy />
      </Container>
    </>
  );
}
