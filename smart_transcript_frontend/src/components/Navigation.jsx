import { useLocation } from 'react-router-dom';
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
  const location = useLocation();

  return (
    <nav className="navbar ">

      <div className="container0">
        
        <div className="body2">
          <div id="circle" data-text="Smart-Transcript DApp by Adeola "></div>
        </div>
          {/* Navigation menu links */}
          <a
            className="navbar-brand grow" /*{`nav-link ${location.pathname === '/' ? 'active' : ''}`}*/
            href="/"
          >
            <span className="brandname_a">Smart-Transcript 
              <br></br><span className="brandname_b">Decentralized App</span> </span>
          </a>
          <img
              className="st_logo grow"
              src={myImage} alt="Smart-Transcript Logo"
            />
          <div>
                <ul className="navbar-nav ml-auto">

                  <li className="nav-item">
                    <a
                      className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item"> 
                    <a
                      className={`nav-link ${location.pathname === '/how-to' ? 'active' : ''}`}
                      href="/how-to"
                    >
                      How To
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${location.pathname === '/the-developer' ? 'active' : ''}`}
                      href="/the-developer"
                    >
                      The Developer
                    </a>
                   </li>
                </ul>
            </div>
          </div> 
    </nav>
  );
}  
export default Navigation;
