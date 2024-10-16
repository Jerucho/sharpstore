import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Productos } from "./pages/Productos/Productos";
import { Promociones } from "./pages/Promociones/Promociones";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/promociones" element={<Promociones />} />
    </Routes>
  );
};
