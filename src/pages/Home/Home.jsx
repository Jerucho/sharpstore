import { Navbar } from "../../componentes/Navbar/Navbar";
import { Banner } from "../../componentes/Banner/Banner";
import { Grupo } from "../../componentes/Grupo/Grupo";
import { GaleriaPromociones } from "../../componentes/Promociones/GaleriaPromociones";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Grupo />
      <GaleriaPromociones />
    </>
  );
};
