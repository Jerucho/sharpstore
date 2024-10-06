import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="" alt="logo tiendaasf" />
      </div>
      <ul>
        <li>
          <Link to="/">Inicio </Link>
        </li>
        <li>
          <Link to="/productos">Productos </Link>
        </li>
        <li>
          <Link to="promociones">Promociones </Link>
        </li>
        <li>
          <Link to="categorias">Categorias </Link>
        </li>
        <li>
          <Link to="carrito">
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
