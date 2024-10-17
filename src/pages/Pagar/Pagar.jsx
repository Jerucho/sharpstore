import { Navbar } from "../../componentes/Navbar/Navbar";
import GuiPago from "../../componentes/Pagar/GuiPago";
import Footer from "../../componentes/Footer/Footer";

export const Pagar = () => {
  return (
    <>
      <Navbar />
      <div>
        <GuiPago />
      </div>
      <Footer />
    </>
  );
};
