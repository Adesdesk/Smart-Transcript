import React, { useEffect } from 'react';

function CircleText() {
  useEffect(() => {
    const circle = document.querySelector('#circle');
    const text = circle.dataset.text;
    const characters = text.split('');

    const varyAngle = 360 / characters.length;
    const radius = 200;

    characters.forEach((character, index) => {
      const span = document.createElement('span');
      span.innerText = character;

      const rotateY = `rotateY(${index * deltaAngle}deg)`;
      const translateZ = `translateZ(${distanceFromCenter}px)`;
      span.style.transform = `${rotateY} ${translateZ}`;

      circle.appendChild(span);
    });
  }, []);

  return <div id="circle" data-text="Text to display in a circle"></div>;
}

export default CircleText;
