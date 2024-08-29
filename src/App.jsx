import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import NotFound from "./views/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <h1>Routes</h1>
      <Navbar />
      <Routes>
        <Route path='/formularios' element={<Formulario />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
/* 
Routes va a envolver a los componentes que quiero mostrar cuando coincidan con la url

*/
