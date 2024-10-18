import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { ContenedorCarrito } from "../Carrito/ContenedorCarrito";
export const Navbar = () => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const abrirMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-abierto");
    if (menuAbierto) {
      setCarritoAbierto(false);
      setMenuAbierto(!menuAbierto);
    } else {
      setCarritoAbierto(false);
      setMenuAbierto(!menuAbierto);
    }
  };
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
      <ul id="menu" className="navbar-ul">
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

      <button className="boton-menu" onClick={abrirMenu}>
        <i className="fa-solid fa-bars menu-icono"></i>
      </button>
      {carritoAbierto && <ContenedorCarrito />}
    </nav>
  );
};
