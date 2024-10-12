import "./producto.css";

/* eslint-disable react/prop-types */
export const Producto = ({ producto }) => {
  return (
    <div className="producto">
      <img
        className="producto-img"
        src={producto.imagen}
        alt={producto.nombre}
      />
      <h2 className="producto-h2">{producto.nombre}</h2>
      <p className="producto-desc">{producto.descripcion}</p>
      <p className="producto-precio">{producto.precio}</p>
      <button className="producto-btn">Agregar al carrito</button>
    </div>
  );
};
