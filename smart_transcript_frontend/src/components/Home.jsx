import React from "react";
import {/*Routes, Route,*/ useNavigate} from 'react-router-dom';
import Img from '../smart_transcript_background1.jpg';
import "./Home.css";

const Home = () => {

  const options = useNavigate();

  const tokenizeTranscript = () => {
    // navigate to Transcript minting dashboard
    options('/tokenize');
  };

  const revokeTranscript = () => {
    // navigate to Transcript revoking dashboard
    options('/blacklist');
  };

  const verifyTranscript = () => {
    // navigate to Transcript management dashboard
    options('/verify');
  };

  const howTo = () => {
    // navigate to the How To page
    options('/how-to');
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="font-weight-normal grow">Smart-Transcript Options</h1>
          <p>
            Welcome to the Smart-Transcript Decentralized Application Dashboard.
            Your institution will be making a smart move by using Smart-Transcript 
            to tokenize and manage the storage, retrieval, distribution, verification, 
            and even withdrawal of academic transcripts and certificates of its graduates 
            and students. 
            <br></br>
            <br></br>

            <img
              className="st_image grow"
              src={Img} alt="Smart-Transcript"
            />

            It is recommended that the handler of this application for every 
            institution be one who has basic knowledge of the functionalities of a decentralized app.
            It is also recommended that every handler takes a tour of the various pages of the 
            application, making sure to read the "How To" page. This will ensure a good understanding 
            of the various features of the dapp before its actual use.
            <br></br>
            <br></br>
            It should be borne in mind that blockchain transactions as will be carried out on this app 
            do require a payment of gas fees. It is not in the best interest of any institution or other 
            categories of users to initiate transactions which they haven't already considered as necessary 
            to the purpose for which this dapp solution is developed. If you are an authorized handler for 
            your institution and you have taken a tour of this platform, then you are ready to make that 
            smart move. Simply select an option below.
          </p> 
            <br></br>

            <div className='tc_styles'>
                <div className="grid one grow">
                <p className="boxedText0">To tokenize academic transcripts or certificates, 
                upload a copy in PDF format to IPFS and save the hash generated. This will be 
                required as input to the dashborad when you tokenize.</p>
                <br></br>

                  <div>
                      <p className="boxedText1">If you do not adequately understand the above
                      instructions, please visit the <span className="how_to" onClick={howTo}>How To</span> page before you click the button below</p>
                  </div>
                  <br></br>
                  <button id="starterButton" onClick={tokenizeTranscript}>
                    Tokenize
                  </button>
                  <br></br>
                </div>

                <div className="grid two grow">
                <p className="boxedText0">You (or anybody) can retrieve a copy of previously tokenized transcripts and certificates 
                using the token ID. 
                This feature helps a third party verify that a copy is original, and was actually issued by the said institution.</p>
                  <br></br>
                  <div>
                      <p className="boxedText1">If you do not adequately understand the above
                      instructions, please visit the <span className="how_to" onClick={howTo}>How To</span> page before you click the button below</p>
                  </div>
                  <br></br>
                  <button id="manageCopies" onClick={verifyTranscript}>
                    Verify Copy
                  </button>
                  <br></br>
                </div>

                <div className="grid three grow">
                  <p className="boxedText0">This option helps an institution reserve the right to revoke previously issued and tokenized 
                  certificates and corresponding academic transcripts. It should be used only in the event that an alumnus is found undeserving of the
                  an earlier earned qualification.</p>
                  <br></br>
                  <div>
                      <p className="boxedText1">If you do not adequately understand the above
                      instructions, please visit the <span className="how_to" onClick={howTo}>How To</span> page before you click the button below</p>
                  </div>
                  <br></br>
                  <button id="revoke" onClick={revokeTranscript}>
                    Blacklist!
                  </button>
                  </div>
                </div>
                <br></br>
                <h3 className="funfact">Smart-Transcript Funfact</h3>
                <p>
                Every time an institution uses the Smart-Transcript decentralized application, another 
                graduate is given a better chance at advancing their career. Thanks to Smart-Transcript, 
                no one has to wait "in the dark", risking the loss of their next admission or candidacy 
                for an appointment, only because their transcripts or certificates couldn't be verified 
                in the applicable timeframe.
                </p>
                   
      </div>
    </div>
  );
}

export default Home;