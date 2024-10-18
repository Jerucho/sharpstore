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
      <ul className="navbar-ul">
        <li>
          <Link to="/">Inicio </Link>
        </li>
        <li>
          <Link to="/productos">Productos </Link>
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
        <li>
          <Link to="/pagar" id="ir_pagar">
            Comprar
          </Link>
        </li>
      </ul>
      {carritoAbierto && <ContenedorCarrito />}
    </nav>
  );
};
