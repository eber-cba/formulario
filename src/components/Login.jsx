import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <p>Email</p>
        <input type='email'></input>
        <p>Contraseña</p>
        <input type='password'></input>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to='/register'>Regístrate</Link>
      </p>
    </>
  );
}

//felipe: Esta listo el login :D
