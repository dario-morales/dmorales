import React from 'react';

const NavBar = () => {
  return (
    <nav className='nav d-flex justify-content-between'>
      <a className='p-2' href='#'>
        Inicio
      </a>
      <a className='p-2 ' href='#'>
        Derecho animal
      </a>
      <a className='p-2 ' href='#'>
        Servicios
      </a>
      <a className='p-2 ' href='#'>
        Contáctanos
      </a>
    </nav>
  );
};

export default NavBar;
