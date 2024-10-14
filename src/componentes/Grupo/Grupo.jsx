import "../Grupo/grupo.css";
import { Producto } from "../Producto/Producto";
import { Titulo } from "../Titulo/Titulo";
export const Grupo = () => {
  return (
    <div className="contenedor">
      <section className="mas-vendido">
        <Titulo texto="Más vendidos" />
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
