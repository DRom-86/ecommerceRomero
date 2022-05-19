import React from 'react'
import { Link } from 'react-router-dom'

const Articles = () => {
  return (
    <div className='container d-flex justify-content-center bg-dark text-white mt-4'>
         
        <ul className='list-unstyled d-flex flex-column'>
          <Link className="nav-item " to = "/category/:category">Escolar</Link>
          <Link className="nav-item" to = "/category/:category">Comercial</Link>
          <Link className="nav-item" to = "/category/:category">Papelera</Link>
        </ul>
    </div>
  )
}

export default Articles