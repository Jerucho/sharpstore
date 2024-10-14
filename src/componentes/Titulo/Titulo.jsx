/* eslint-disable react/prop-types */
import "./titulo.css";

export const Titulo = ({ texto }) => {
  return (
    <h2>
      <div className="linea"></div>
      {texto}
    </h2>
  );
};
