import React from "react";
import { Link } from "react-router-dom";

export default function Formulario() {
  return (
    <div>
      <Link to='/register'>Registrarse</Link>
      <Link to='/login'>Iniciar Sesión</Link>
    </div>
  );
}
