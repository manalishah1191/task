import React from 'react'
import {NavLink} from 'react-router-dom'

export const Footer = () => {
  return (
    <>
   <div>
      <div className="container-fluid bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark">
  
  <div className="row">
    <div className="col-12 ms-4">
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <NavLink className="nav-link" to={'/customer'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/warehouse'}>About Statista</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/supplier'}>Career</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/product'}>Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/invoice'}>Help&FAQ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/purchaseOrder'}>Report bug</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/roles'}>Our Media partners</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/promoCodes'}>Privacy</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to={'/promoCodes'}>Imprint</NavLink>
        </li> 
              
        </ul>
    </div>
  </div>
  </div>
  </nav>
  </div>
  </div>
    </>
  )
}