import { Navbar } from "../../componentes/Navbar/Navbar";
import CompoPromo from "../../componentes/PromoComp/CompoPromo";
import { TarjetaProductoReversible } from "../../componentes/TarjetaProductoReversible/TarjetaProductoReversible";

export const Promociones = () => {
  return (
    <>
      <Navbar />
      <CompoPromo />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <TarjetaProductoReversible
          producto={{
            nombre: "Producto 1",
            precio: 100,
            imagen: "https://via.placeholder.com/150",
          }}
        />
      </div>
    </>
  );
};
