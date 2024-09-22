import React from 'react';
import heroImage from '../assets/imagen1.jpg';

const Header = () => {
  return (
    <header>
      {/* Imagen de encabezado */}
      <img src={heroImage} alt="Hola" />
      <h1>Bienvenidos a Natural</h1>
    </header>
  );
};

export default Header;

