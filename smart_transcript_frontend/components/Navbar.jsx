import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import myImage from "../public/Smart_Transcript_logo.png";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {

    const circle = document.querySelector('#circle');
    const text = circle.dataset.text;
    const characters = text.split('');

    const varyAngle = 360 / characters.length;
    const radius = 180;

    characters.forEach((character, index) => {
      const span = document.createElement('span');
      span.innerText = character;

      const rotateY = `rotateY(${index * varyAngle}deg)`;
      const translateZ = `translateZ(${radius}px)`;
      span.style.transform = `${rotateY} ${translateZ}`;

      circle.appendChild(span);
    });
  }, []);
  const { pathname } = useRouter();

  return (
    <nav className="navbar">

      <div className="container0">

        <div className="body2">
          <div id="circle" data-text="Smart-Transcript by Adesdesk "></div>
        </div>
      
            <h1 className="brandname_a grow">Smart-Transcript</h1>
            <h1 className="brandname_b grow">Decentralized Application</h1>
        
        <Image
              className="st_logo grow"
              src={myImage} alt="Smart-Transcript Logo" width={150} height={150}
            />
             
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div>
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
            <Link
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
              href="/"
            >
                HOME
            </Link>
            </li>
            <li className="nav-item">
            <Link
              className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
              href="/about"
              >
                ABOUT
                </Link>
            </li>
            <li className="nav-item">
            <Link
              className={`nav-link ${pathname === '/guide' ? 'active' : ''}`}
              href="/guide"
              >
                GUIDE
              </Link>
            </li>
            <li className="nav-item">
            <Link
              className={`nav-link ${pathname === '/developer' ? 'active' : ''}`}
              href="/developer"
              >
                DEVELOPER
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
