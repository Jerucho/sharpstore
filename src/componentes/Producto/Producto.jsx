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
      <div className="producto-info">
        <h2 className="producto-h2">{producto.nombre}</h2>
        <p className="producto-precio">S/{producto.precio}</p>
        <div className="producto-acciones">
          <input type="number" name="" id="input-cantidad" />
          <button className="producto-btn">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
