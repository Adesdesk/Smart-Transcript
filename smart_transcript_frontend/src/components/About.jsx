import React from "react";
import Img from '../smart_transcript_background1.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
              <div >
                <h1 className="font-weight-normal" grow>About Smart-Transcript</h1>
                <p>
                  Smart-Transcript is a decentralized application, a brainchild
                  of Adeola David Adelakun. It is a vital tool with which tertiary 
                  institutions around the world can tokenize their graduates' academic transcripts, 
                  making them available on the blockchain. This eases a seamless transfer of t
                  transcripts from institution to institution, especially for official reviews and 
                  processing. Smart-Transcript offers graduates and institutions the common 
                  advantage that bottlenecks and time wastage associated with processing of 
                  transcripts and sending them across to other institutions can be completely 
                  eliminated.
                  <br></br>
                  <br></br>
                  <img
                    className="st_image grow"
                    src={Img} alt="Smart-Transcript"
                  />
                  The Smart-Transcript dapp is also applicable to tokenize certificates such 
                  that they can be publicly verified on the blockchain, eliminating controversies 
                  that could possibly accompany the genuinness of certificates held by graduates. 
                  The integrity of institutions issuing a transcript and/or certificate simply accompanies 
                  the document everywhere it is accessed, no matter how long after the certificate is awarded.
                  <br></br>
                  <br></br>
                  Now graduates can advance on their career path as worries associated with 
                  transcript dispatch and verification are eliminated.
                  <br></br>
                  While completing your studies at a college or university is an important milestone, 
                  your journey is not necessarily over after that. Many graduates continue their education 
                  or look for work after graduation, and both of these activities frequently call for official 
                  copies of the graduates' academic records. Unfortunately, for some grads, getting transcripts 
                  can be a difficult and time-consuming procedure.
                  <br></br>
                  <br></br>
                  One frequent problem is that transcripts might not be accessible right away after graduation. 
                  There might be a wait of several weeks or even months before transcripts are available for 
                  distribution because universities and colleges have different standards regarding when they 
                  should be released. Graduates who are anxious to go to the next phase of their professions 
                  may find this frustrating.
                  <br></br>
                  The price of ordering transcripts is an additional problem. Transcript fees are imposed by 
                  some universities and colleges, which can be costly for graduates who are already burdened 
                  by debt from their education. Additionally, the price of ordering transcripts may change based 
                  on the quantity of copies needed, the delivery type (such as electronic or paper), and any other 
                  services (e.g., expedited processing).
                  <br></br>
                  <br></br>
                  Uncertainty around the transcript procedure is a third issue that recent grads could experience. 
                  Finding out who to contact or where to go to obtain transcripts is not always simple, and the 
                  procedure may differ depending on the institution. For graduates who attended many schools or who 
                  have been out of school for an extended period of time, this might be especially difficult.
                  <br></br> 
                  <br></br>
                  Finally, the accuracy of some graduates' transcripts may cause problems. Transcripts frequently 
                  have mistakes on them, such as inaccurate course credits or grades, which may be annoying and 
                  time-consuming to fix.
                  <br></br>
                  For graduates, obtaining academic transcripts can be a difficult procedure overall. Delays, fees, 
                  and potential accuracy issues are all factors that make it challenging. While it is crucial for 
                  graduates to make sure they have the proper paperwork for their next steps, it may be a difficult 
                  process.              
                </p>
              </div>
        </div>
      </div>
    </div>
  );
}

export default About;