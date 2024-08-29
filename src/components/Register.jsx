import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <form>
        <p>Email</p>
        <input type='email'></input>
        <p>Contraseña</p>
        <input type='password'></input>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to='/login'>Inicia Sesión</Link>
      </p>
    </>
  );
};

export default Register;
