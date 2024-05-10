import React from 'react'
import Home from '../componentes/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/*" element= {<p>Error 404 Recurso no encontrado</p>} />
    </Routes>
  </BrowserRouter>
  )
}

export default Navigation;