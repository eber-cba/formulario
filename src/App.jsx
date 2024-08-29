import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import NotFound from "./views/NotFound";
function App() {
  return (
    <>
      <h1>Routes</h1>
      <Navbar />
      <Routes>
        <Route path='/formularios' element={<Formulario />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
/* 
Routes va a envolver a los componentes que quiero mostrar cuando coincidan con la url

*/
