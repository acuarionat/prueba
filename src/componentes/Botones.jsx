import React from 'react';
import "./Botones.css";

const Botones = () => {
  return (
    <div className='Botones'>
        <button className='follow'>Follow</button>
        <button className='send'><img src={"./public/Vector.svg"} alt={"enviar"} /></button>

    </div>
  )
}

export default Botones