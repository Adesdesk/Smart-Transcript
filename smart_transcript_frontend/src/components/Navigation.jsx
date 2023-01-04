/*import React from "react";*/
import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import myImage from '../Smart_Transcript_logo.png';

function Navigation() {
  useEffect(() => {
    
    const circle = document.querySelector('#circle');
    const text = circle.dataset.text;
    const characters = text.split('');

    const varyAngle = 360 / characters.length;
    const radius = 200;

    characters.forEach((character, index) => {
      const span = document.createElement('span');
      span.innerText = character;

      const rotateY = `rotateY(${index * varyAngle}deg)`;
      const translateZ = `translateZ(${radius}px)`;
      span.style.transform = `${rotateY} ${translateZ}`;

      circle.appendChild(span);
    });
  }, []);
  return (
        <nav className="navbar ">
        <div className="container0">
        
        <div className="body2">
        <div id="circle" data-text="Smart-Transcript DApp by Adeola "></div>
          </div>
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
                <NavLink className="nav-link" to="/the-developer">
                  The Developer
                </NavLink>
              </li>                
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;