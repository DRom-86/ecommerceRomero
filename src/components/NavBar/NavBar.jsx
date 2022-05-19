
import React from "react";
import logo from "../../assets/imgs/logo.jpg"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <nav className="container-fluid bg-dark d-flex text-white mt-1 h-2">
      <div className="containerLogo mt-1" >
        <NavLink to="/"className=" navbar-brand d-flex align-items-baseline navbarLogo">
          <img className="logo" src={logo} alt="Logo"></img>
          <h1 className="titleLogo text-white my-3">DISTRIBUIDORA DROM</h1>
        </NavLink>
      </div>
      <div className="container ">
        <ul className="list-unstyled d-flex justify-content-around navbar-bar my-3 w-75 m-auto">
          <NavLink to="/About" className="nav-item"> Nosotros</NavLink>
          <NavLink to="/Articles" className="nav-item">Galeria</NavLink>
            {/* <ul>
              <NavLink className="nav-item border-bottom">Escolar</Link>
              <NavLink className="nav-item border-bottom">Comercial</Link>
              <NavLink className="nav-item border-bottom">Papeleria</Link>
            </ul> */}
          <NavLink  to="/SignIn"className="nav-item">Ingresar</NavLink>
          <NavLink to="/Contact"className="nav-item">Contacto</NavLink>
        </ul>
      </div>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;



