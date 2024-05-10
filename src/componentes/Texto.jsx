import React from 'react';
import "./Texto.css";

const Texto = ({ user }) => {

  return (
    <div className='Texto'>
      <img src={user.avatar} alt={`avatar de ${user.name}`} />
      <h3>{user.name}</h3>
      <p>Has maiorum habemus detraxit at. Timeam fabulas splendide et his.Usu nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit iracundia neglegentur.</p>
    </div>
  )
}

export default Texto;