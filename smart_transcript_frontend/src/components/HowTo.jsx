import React from "react";
/*import myImage from '../Smart_Transcript_logo.png';*/
import Img from '../smart_transcript_background1.jpg';


function HowTo() {
  return (
    <div className="how-to">
        <div className="container">
        <br></br>
          
            <h1 className="font-weight-normal" grow>How To Use Smart-Transcript</h1>
            <p>
              This decentralized application is designed to be handled by authorized persons on behalf of 
              an institution only. It is emphasized that blockchain transactions as will be carried out in 
              this application are cost intensive. In essence, a successfully executed transaction may cost 
              significant amounts that you do not want to pay for a misinformed use of the application. With 
              adequately informed handlers however, every successful transaction is worth the cost. 
              <img
                className="st_image grow"
                src={Img} alt="Smart-Transcript"
              />
              <br></br>
              <br></br>
              On the Home page are two capsule-shaped fields, each with a button that helps you navigate 
              to one of two dashboards. You can navigate to the Tokenize dashboard to simply input details of 
              a copy of academic transcript or certificate and mint a token that corresponds to a public 
              record of the authenticity of that copy as issued by your institution.
            
              <br></br>
              <h3>Option 1 - Tokenize</h3>
              <h3>To tokenize a copy, you are required to:</h3>
      
              1. ensure first that such a copy is authentic and ready to 
              be made available to other institutions where they may be required.
              <br></br>
              2. Upload the copy (we recommend PDF format) to IPFS and save the hash generated as this 
              will be required for subsequent steps. 
              <br></br>
              3. Replace &lt;hash&gt; in the link https://gateway.pinata.cloud/ipfs/&lt;hash&gt; with the actual hash 
              generated after your upload of the document to IPFS. Your link should now look like this; 
              https://gateway.pinata.cloud/ipfs/QmXRc4BdqXTEr1dM
              <br></br>
              4. The tokenize dashboard requires you to make input into three fields - the link from step 3, the name 
              of a candidate to whom the certificate or transcript is issued, and your comments. Comments can include 
              certain details about the institution, faculty and department from which the candidate has graduated, as well 
              as their matriculation details. 
              <br></br>
              These input items will combine to form the metadata of a token you mint by tokenizing each document. 
              Ensure to have these three items for each corresponding copy of certificate or transcript you intend to tokenize.
              <br></br>
              5. Return to the Smart-Transcript Home page and click on the Tokenize button available on the first capsule-shaped 
              field to get navigated to the Tokenize dashboard.
              <br></br>
              6. Mindfully input the earlier saved details from step 4, each in the appropriate field.
              <br></br>
              7. Double check to ensure accuracy of your input.
              <br></br>
              8. Once certain, click on the Tokenize button to mint a unique immutable token that represents a retrievable copy 
              of a corresponding document, stored on the blockchain.
              <br></br>
              9. Look out for a link in green print generated on completion of your transaction. This link can be used to see 
              details of your transaction on Etherscan.
              <br></br>
              10. You certainly should save this link within your reach too.
              <br></br>
              <br></br>
              <h3>Option 2 - Verify Copy</h3>
              <span id="status">This step does not require payments of any kind.</span>
              <h3>To verify a copy, you are required to:</h3>
              1. Click on the Verify Copy button on the second capsule-shaped field on the Smart-Transcript home page to navigate to the 
              verification dashboard.
              <br></br>
              2. Input the address of the token you intend to verify.
              <br></br>
              3. Click on the Verify Transcript button to to see details of the corresponding copy on the blockchain.
              
            </p>
            
        </div>
    </div>
    );  
}

export default HowTo;