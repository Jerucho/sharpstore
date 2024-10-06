/* eslint-disable react/prop-types */
export const ProductoCarrito = ({ producto }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // gap: "10px",
        padding: "10px",
        borderBottom: "1px solid grey",
        backgroundColor: "grey",
      }}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100px", height: "100px" }}
      />
      <div>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "2px 10px",
          }}
        >
          Eliminar
        </div>
      </div>
    </div>
  );
};
