import "./TarjetaProductoReversible.css";

/* eslint-disable react/prop-types */
export const TarjetaProductoReversible = ({ producto }) => {
  return (
    <div className="tarjeta-reversible">
      <div className="tarjeta-reversible-imagen">
        <img
          className="tarjeta-reversible-imagen-img"
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>
      <div className="tarjeta-reversible-info">
        <h2 className="tarjeta-reversible-info-h2">{producto.nombre}</h2>
        <p className="tarjeta-reversible-info-precio">S/{producto.precio}</p>
        <div className="tarjeta-reversible-info-acciones">
          <button className="tarjeta-reversible-info-acciones-btn">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
