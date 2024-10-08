import { ProductoCarrito } from "./ProductoCarrito";

export const ContenedorCarrito = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        right: "0",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        width: "500px",
        height: "400px",
        overflowY: "scroll",
        scrollbarWidth: "thin",
        scrollbarColor: "white",
        gap: "1px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <ProductoCarrito
        producto={{
          nombre: "Producto 1",
          precio: 100,
          imagen: "https://via.placeholder.com/150",
        }}
      />
      <ProductoCarrito
        producto={{
          nombre: "Producto 1",
          precio: 100,
          imagen: "https://via.placeholder.com/150",
        }}
      />
      <ProductoCarrito
        producto={{
          nombre: "Producto 1",
          precio: 100,
          imagen: "https://via.placeholder.com/150",
        }}
      />
      <ProductoCarrito
        producto={{
          nombre: "Producto 1",
          precio: 100,
          imagen: "https://via.placeholder.com/150",
        }}
      />
      <ProductoCarrito
        producto={{
          nombre: "Producto 1",
          precio: 100,
          imagen: "https://via.placeholder.com/150",
        }}
      />
      <ProductoCarrito
        producto={{
          nombre: "Producto 1",
          precio: 100,
          imagen: "https://via.placeholder.com/150",
        }}
      />
    </div>
  );
};
