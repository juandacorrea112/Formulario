import React from 'react';
import { Link } from 'react-router-dom';


export const Navigator = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="Registro">Registro</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Lista">Lista</Link>
    </nav>
  )
}