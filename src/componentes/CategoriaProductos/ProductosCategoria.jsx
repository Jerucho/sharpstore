/* eslint-disable react/prop-types */
import { Producto } from "../Producto/Producto";
import "./productoCategoria.css";
export const ProductosCategoria = ({ categoria }) => {
  return (
    <>
      <div className="carrusel">
        {categoria.map((producto, index) => (
          <Producto key={index} producto={producto} />
        ))}
      </div>
    </>
  );
};
