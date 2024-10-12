import { Navbar } from "../../componentes/Navbar/Navbar";
import { Banner } from "../../componentes/Banner/Banner";
import { Grupo } from "../../componentes/Grupo/Grupo";
import { GaleriaPromociones } from "../../componentes/Promociones/GaleriaPromociones";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ margin: "80px 0 0 0" }}>
        <Banner />
        <Grupo />
        <GaleriaPromociones />
      </div>
    </>
  );
};
