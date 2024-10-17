/* eslint-disable react/prop-types */
import "../Grupo/grupo.css";
import { Producto } from "../Producto/Producto";
export const Grupo = ({ productos }) => {
  return (
    <div className="contenedor">
      <section className="mas-vendido">
        <div className="productosgeneral">
          {productos.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Grupo;
