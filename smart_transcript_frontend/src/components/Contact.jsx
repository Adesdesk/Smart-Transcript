/*import React from "react";*/
/*import React, { useRef } from "react";*/
import React, { useEffect } from 'react';
import Img from '../smart_transcript_background1.jpg';


function Contact() {
  const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <div className="contact" grow>
    <div className="container">
    <br></br>
      
      <h1 className="font-weight-normal">Contact</h1>
            <img
              className="st_image grow"
              src={Img} alt="Smart-Transcript"
            />
            <p>
              email: adesdesk@outlook.com
              <br></br>
              Phone: +2347062587509
              <br></br>
              Abuja, Nigeria.
              <br></br>
              https://github.com/adesdesk
            </p>
      <div className="Minter2">
      <form onSubmit={handleSubmit}>
          <h1 className="text-center">Get in Touch</h1>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="First Name">First Name</label>
              <input type="text" className="form-control" name="firstname" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="Last Name">Last Name</label>
              <input type="text" className="form-control" name="lastname" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                name="user_address"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="message">message</label>
              <textarea
                type="text"
                className="form-control"
                id="inputmessage4"
                name="user_message"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>
      </div>
    
  )
}

export default Contact;