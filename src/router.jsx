import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Productos } from "./pages/Productos/Productos";
import { Pagar } from "./pages/Pagar/Pagar";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/pagar" element={<Pagar />} />
    </Routes>
  );
};
