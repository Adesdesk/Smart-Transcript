import React from "react";
import Img from '../smart_transcript_background1.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div >
            <br></br>
            <h1 className="font-weight-normal" grow>About Smart-Transcript</h1>
            <p>
              Smart-Transcript is a decentralized application, a brainchild
              of Adeola David Adelakun. It is a vital tool with which tertiary
              institutions around the world can tokenize their graduates' academic transcripts,
              making them available on the blockchain. This eases a seamless transfer of transcripts
              from institution to institution, especially for official reviews and
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
              <br></br>
              <h3>Why Smart-Transcript?</h3>
              While completing a study program at a college or university is an important milestone,
              the journey is not necessarily over after that. Many graduates continue their education
              or look for work after graduation, and both of these activities frequently call for official
              copies of the graduates' academic records. Unfortunately, for many grads, the process of getting
              transcripts delivered at the desired destinations has been a frustrating procedure.
              <br></br>
              <br></br>
              In certain cases, transcripts are not accessible right away after graduation.
              There might be a wait of several weeks or even months before transcripts are available for
              distribution because universities and colleges have different standards regarding when they
              should be released. Graduates who are anxious to go to the next phase of their professions
              may find this frustrating.
              In worse cases, graduates have had their transcripts missing in transit as institutions especially in
              less developed countries often insist on posting hard copies directly to the next institution to
              maintain confidentiality and authenticity.
              <br></br>
              <br></br>
              The price of ordering transcripts is an additional problem. Transcript fees are imposed by
              institutions, which can be costly for graduates who are already burdened by debt from their
              education. Additionally, the price of ordering transcripts may change based
              on the quantity of copies needed, the delivery type (such as electronic or paper), and any other
              services (e.g., expedited processing).
              <br></br>
              <br></br>
              Uncertainty around the transcript procedure is another issue that recent graduates could experience.
              Finding out who to contact or where to go to obtain transcripts is not always an easy task. The
              procedure may differ depending on the institution. For graduates who attended many schools or who
              have been out of school for an extended period of time, this might be especially difficult. It is simply
              cumbersome to consider the amount of stress that goes into repeating the same procedure multiple
              times when a graduate requires to get their transcript sent to a number of institutions to which they have applied.
              <br></br>
              <h3>The Solution</h3>
              Smart-Transcript was developed to solve these problems. It helps institutions publish a one-off copy of
              each graduate's transcript and/or certificate to the blockchain. This eases and makes the process transcparent
              It literally takes the integrity of institutions that issued the document along with it everywhere it is
              accessed, no matter how long after the document is published.
              <br></br>
              <br></br>
              The immutability and pseudo-anonymity of records on the blockchain completely eliminate the
              cumbersome protocols that have hitherto accompanied the issuing and verification of academic transcripts
              The blockchain helps guarantee that genuine copies remain permanently unaltered, while not compromising
              confidentiality still. With Smart-Transcript, institutions can make a graduate's records available to
              the next institution within minutes.
              <br></br>
              <br></br>
              The receiving institution can verify that the copy is from the right source and graduates no longer have to
              wait through multiple application procedures even if they apply to dozens of institutions around the world,
              Smart-Transcript is targeted at helping graduates advance swiftly on their career path as bottlenecks
              associated with transcript dispatch and verification are eliminated.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;