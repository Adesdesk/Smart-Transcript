import React from "react";
/*import myImage from '../Smart_Transcript_logo.png';*/
import Img from '../smart_transcript_background1.jpg';


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="contact" grow>
    <div className="container">
      
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
            </p>

      <div className="Minter2">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
        </div>
      </div>
      </div>
    
  )
}

export default Contact;