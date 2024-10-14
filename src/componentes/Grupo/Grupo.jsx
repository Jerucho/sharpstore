import "../Grupo/grupo.css";
import { Producto } from "../Producto/Producto";
export const Grupo = () => {
  return (
    <div className="contenedor">
      <section className="mas-vendido">
        <h2>Lo más vendido</h2>
        <div className="productosgeneral">
          <Producto
            producto={{
              nombre: "Producto 1",
              precio: 100,
              imagen: "https://via.placeholder.com/150",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Grupo;
