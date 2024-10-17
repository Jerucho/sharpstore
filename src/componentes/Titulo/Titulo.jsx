/* eslint-disable react/prop-types */
import "./titulo.css";

export const Titulo = ({ texto }) => {
  return (
    <h2 className="h2-titulo">
      <div className="linea"></div>
      {texto}
    </h2>
  );
};
