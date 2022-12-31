import React from "react";
/*import myImage from '../Smart_Transcript_logo.png';*/
import Img from '../smart_transcript_background1.jpg';


function HowTo() {
  return (
    <div className="how-to">
        <div className="container">
          
            <h1 className="font-weight-normal" grow>How To Use Smart-Transcript</h1>
            <p>
              On the Home page are three rectangular fields...
            </p>
            <img
              className="st_image grow"
              src={Img} alt="Smart-Transcript"
            />
        </div>
    </div>
    );  
}

export default HowTo;