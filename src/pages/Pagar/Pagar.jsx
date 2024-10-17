import { Navbar } from "../../componentes/Navbar/Navbar";
import GuiPago from "../../componentes/Pagar/GuiPago";

export const Pagar = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <GuiPago />
      </div>
    </>
  );
};
