import React from 'react'

export default function NavBar() {
  return (
      <div className='container'>
          <ul className='d-flex justify-content-around mt-4'>
              <li className=''>Productos</li>
              <li>Contacto</li>
              <li>Nosotros</li>
              <li>Sign In</li>
          </ul>
          <hr/>
      </div>
  );
}
