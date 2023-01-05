import React from "react";
import SocialMediaIcons from './SocialMediaIcons';
import Img2 from "../Adeola_dp.png";
import './SocialMediaIcons.css'; 


function Contact() {
  /*const handleSubmit = (e) => {
      e.preventDefault();
    };*/
  return (
    <div className="contact" grow>
    <div className="container">
    <br></br>
      
      <h1 className="font-weight-normal">Adeola David Adelakun</h1>
      <h4 className="font-weight-normal">Solidity Developer</h4>
      
            
            <div className="icns">
            <img
              className="my_pic grow"
              src={Img2} alt="Adeola"
            />
            <SocialMediaIcons />
            </div>

            <div className="cntactTxt">
            <h3>Reach Adeola</h3>
            <p>
              Email: adesdesk@outlook.com
              <br></br>
              Phone: +2347062587509
              <br></br>
              Abuja, FCT Nigeria.
              <br></br>
              https://github.com/adesdesk
              <br></br>
              <br></br>
              <h3>Professional Summary</h3>
              Adeola is a is the developer behind Smart-Transcript Decentralized Application. He is a solution-driven 
              Frontend and Solidity Developer with over 2 years of experience exploring the possibilities 
              that a nexus between web 2 and web 3 brings. He is comfortable developing and working with full-stack 
              decentralized applications, frontend web applications, and is skilled in adapting to new work situations 
              and challenges to best provide tech solutions to real life problems.
              <br></br>
              <br></br>

              Though a graduate of Fisheries Technology (with Distinction), Adeola practiced digital content writing 
              for over 5 years, the later part of which he also committed to developing skills in web development as a 
              response to perceived needs. With a desire to skill-up so as to be better positioned to develop solutions 
              that harness digital technology in solving real problems, he passed through a number of programming courses 
              and internships. Notable among his most recent certifications are:
              <h3>Certifications</h3>
              <ul className="certifications">
                <li>Python 3 Programming Specialization, University of Michigan</li>
                <li>Introduction to Scripting in Python Specialization, Rice University</li>
                <li>Coding for Everyone: C and C++ Specialization, University of California in Santa Cruz</li>
                <li>Javascript for Beginners Specialization, University of California Davis</li>
                <li>Java Programming and Software Engineering Fundamentals Specialization, Duke University</li>
                <li>Blockchain Specialization, University of Buffalo, The State University of New York</li>
                <li>Ethics of Technology, University of Notre Dame</li>
                <li>Ethics of Communication - University of Notre Dame</li>
                <li>Introduction to Public Speaking - University of Washington</li>
                <li>Digital Marketing, Graphics, and Web Design – Bizmarrow Technologies, Gwarinpa, Abuja, Nigeria</li>
              </ul>
              Today, Adeola has various individual and collaborative software projects targeted at solving various 
              problems, to his credit. His mantra, "there is code for every instruction, and logic behind every 
              effect: if it matters to humanity, we should find it!" has been a motivation behind his use of programming 
              to solve problems. The following are some of his skill endowments.
              <h3>Technical Skills</h3>
              <ul className="certifications">
                <li>Blockchain Technology / Web 3</li>
                <li>Version Control</li>
                <li>Frontend Frameworks and Libraries</li>
                <li>Full-stack Decentralized Applications Development</li>
                <li>Algorithms Development</li>
                <li>Responsive Design</li>
                <li>Document Object Model</li>
                <li>Solidity, Data Structures</li>
              </ul>

              <h3>Soft Skills</h3>
              <ul className="certifications">
                <li>Communication and Effective Time Management</li>
                <li>Critical Thinking and Problem-Solving</li>
                <li>Adaptability and Flexibility</li>
                <li>Self Learning</li>
                <li>Collaboration and Accountability</li>
              </ul>
              Being not ignorant of the fact that programming is a hands-on profession, he has also acquired 
              and is still developing experience from real workplaces of international repute. 
              <h3>Experience</h3>
              <p className="mainh">Grandida LLC <br></br>
              <span className="subh">Miramar, Florida, July 2022 till date <br></br> Solidity Developer </span> </p>
              <ul className="certifications">
                <li>Decentralized Applications Development: Designed, developed and deployed full-stack decentralized applications.</li>
                <li>Desktop Applications Development: Designed and developed desktop applications tailored at meeting various real-life needs.</li>
                <li>Developer Interactive Sessions: Held live presentation sessions to communicate the development 
                process and functionalities of developed applications to a community of solidity developers and offered 
                meaningful contributions to other developers executing various blockchain projects.</li>
                <li>Learning and Skills Development: Developed hands-on skills in alternative through development of a 
                variety of applications in alternative languages for smart-contract development such as Rust, and Python</li>
              </ul>
               


             <span className="mainh">Wills Smart Technology</span> <br></br>
            <span className="subh"> Cadastal Zone B09, Ahmadu Bello Way, Kado, Abuja, Nigeria, Feb 2021 – Oct 2022
            <br></br> IoT Specialist </span>
            <ul className="certifications">
              <li>Designed and participated in the construction of IoT driven aquaponics systems</li>
              <li>Co-created algorithms implemented by the IoT Team to manage IoT facilities for clients</li>
            </ul>

            <span className="mainh">Togios Limited</span> <br></br>
            <span className="subh"> No. 141, Upper Owina Street, Benin, Edo State, Nigeria, 2016 - 2021
            <br></br> Digital Content Writer </span>
            <ul className="certifications">
              <li>Designed and managed the organization’s website</li>
              <li>Managed digital and print communication channels including emails, flyers, letters, etc.</li>
              <li>Handled personal social media accounts belonging to the CEO</li>
            </ul>
            As one who takes the initiative to put in his best in every of his engagements, Adeola is a recipient of a 
            number of prestigious awards that attest to his hardworking and focus driven personality.<br></br>
            <span className="mainh">Awards</span> <br></br>
            <span className="subh"> 2015/2016</span>
            <ul className="certifications">
              <li>Cross River State National Youth Service Corps (NYSC) Honors Award For outstanding performance 
              d diligence in the discharge of duties as an NYSC Corps member – Office of the Governor, Cross River 
              State.</li>
            </ul>
            <span className="subh"> 2006/2007</span>
            <ul className="certifications">
              <li>Physics Olympiad Merit Award – National Mathematical Center, Abuja, Nigeria.</li>
            </ul>
            </p>
          </div>       
      </div>
      </div>    
  )
}

export default Contact;