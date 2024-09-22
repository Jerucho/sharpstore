import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Productos } from "./pages/Productos";
import { Promociones } from "./pages/Promociones";
import { Categorias } from "./pages/Categorias";
import { Producto } from "./pages/Producto";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:id_producto" element={<Producto />} />
      <Route path="/promociones" element={<Promociones />} />
      <Route path="/categorias" element={<Categorias />} />
    </Routes>
  );
};
