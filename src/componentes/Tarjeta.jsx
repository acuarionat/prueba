import React from "react";
import "./Tarjeta.css";
import Texto from "./Texto.jsx";
import Botones from "./Botones.jsx";

const Tarjeta = ({user}) => {
    console.log(user);
  return (
      <div className="Tarjeta">
        <Texto user={user}/>
        <Botones />
      </div>
  );
};

export default Tarjeta;
