import { Container } from "@ft/components";
import {
  FotterBottom,
  FotterCenter,
  FotterTop,
  ScrollTop,
  WhatsappButtom,
} from "./components";

export const Footerft = () => {
  return (
    <footer>
      <Container>
        <FotterTop />
        <FotterCenter />
        <FotterBottom />
        <ScrollTop />
        <WhatsappButtom />
      </Container>
    </footer>
  );
};

export default Footerft;
