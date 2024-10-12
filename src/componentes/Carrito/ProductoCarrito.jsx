/* eslint-disable react/prop-types */
export const ProductoCarrito = ({ producto }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid grey",
        // backgroundColor: "grey",
      }}
    >
      <div
        style={{
          color: "black",
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />

        <div>
          <h3>{producto.nombre}</h3>
          <p>S/{producto.precio}</p>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "2px 10px",
            cursor: "pointer",
          }}
        >
          Eliminar
        </div>
      </div>
    </div>
  );
};
