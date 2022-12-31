import React from "react";
import { NavLink } from "react-router-dom";
import myImage from '../Smart_Transcript_logo.png';

function Navigation() {
  return (
        <nav className="navbar ">
        <div className="container0">
          <NavLink className="navbar-brand grow" to="/">
            <span className="brandname_a">Smart-Transcript 
            <br></br><span className="brandname_b">Decentralized App</span> </span>
          </NavLink>

          <img
              className="st_logo grow"
              src={myImage} alt="Smart-Transcript Logo"
            />
          <div>
            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/how-to">
                  How To
                </NavLink>
              </li> 

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>                
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;