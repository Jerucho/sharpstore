import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { ContenedorCarrito } from "../Carrito/ContenedorCarrito";
export const Navbar = () => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  return (
    <nav
      style={{
        position: "fixed",
      }}
    >
      <div>
        <h1>
          <Link className="logo" to={"/"}>
            NEW
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Inicio </Link>
        </li>
        <li>
          <Link to="/productos">Productos </Link>
        </li>
        <li>
          <Link to="/promociones">Promociones </Link>
        </li>
        <li>
          <Link to="/categorias">Categorias </Link>
        </li>
        <li>
          <div
            className="carrito"
            onClick={() => {
              setCarritoAbierto(!carritoAbierto);
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </div>
        </li>
      </ul>
      {carritoAbierto && <ContenedorCarrito />}
    </nav>
  );
};
