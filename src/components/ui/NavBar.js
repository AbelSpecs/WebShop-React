import React, {useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import {
  Link, NavLink } 
from "react-router-dom";
import '../../index.css';

export const NavBar = () => {

  const [open, setOpen] = useState(false)

  const handleToogle = () => {
    setOpen( !open );
  }

  return (
    <>
      <div className="header-area">
        <div className="container">
          <div className="row flex-center">
            <div className="col-md-8">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" onClick={handleToogle} aria-expanded={open}>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <Collapse in={open}>
                  <div className="navbar-collapse center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <NavLink activeClassName= "active" className="nav-item nav-link" to="/">Home</NavLink>
                      <NavLink activeClassName= "active" className="nav-item nav-link" to="/about">About</NavLink>
                      <NavLink activeClassName= "active" className="nav-item nav-link" to="/shop">Shop</NavLink>
                      <NavLink activeClassName= "active" className="nav-item nav-link" to="/search">Product</NavLink>
                      <NavLink activeClassName= "active" className="nav-item nav-link" to="/login">Iniciar Sesión</NavLink>
                      <NavLink activeClassName= "active" className="nav-item nav-link" to="/register">Registro</NavLink>
                      {/* <NavLink activeClassName= "active" className="nav-item nav-link" to="#">Pricing</NavLink> */}
                      
                    </div>
                  </div>
                </Collapse>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}





