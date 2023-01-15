import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import myImage from "../public/Smart_Transcript_logo.png";
import NavItem from "./NavItem.jsx";
import { useEffect } from 'react';



const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "How To", href: "/how-to" },
  { text: "Developer", href: "/developer" },
];
const Navbar = () => {
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
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
      <div className="container0">
        <div className="body2">
          <div id="circle" data-text="Smart-Transcript DApp by Adeola "></div>
        </div>
        <Link href={"/"} legacyBehavior>
          <a>
            <h1 className="logo">Smart-Transcript</h1>
            <h1 className="logo2">Decentralized Application</h1>
          </a>
        </Link>
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
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;







