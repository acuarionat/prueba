import React from "react";
import "./Tarjeta.css";
import Texto from "./Texto.jsx";
import Botones from "./Botones.jsx";

const Tarjeta = () => {
  return (
      <div className="Tarjeta">
        <Texto />
        <Botones />
      </div>
  );
};

export default Tarjeta;
