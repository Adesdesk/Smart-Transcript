import Head from 'next/head';
import Image from 'next/image';
import React from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Img from '../public/smart_transcript_background1.jpg';

const Defaultscreen = ({ src }) => {
  return <img src={src} />
}

const Successscreen = ({ src }) => {
  return <img src={src} />
}

function Guide() {
  return (
    <>
      <Head>
        <title>Smart-Transcript</title>
        <meta name="description" content="Smart-Transcript by Adeola" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
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
            <Image
              className="st_image grow"
              src={Img} alt="Smart-Transcript"
            />
            <br></br>
            <br></br>
            On the Home page are four capsule-shaped fields, each with a button that helps you navigate
            to one of four dashboards. You can navigate to the Tokenize dashboard to simply input details of
            a copy of academic transcript or certificate and mint a token that corresponds to an immutable public
            record of that copy as issued by your institution.

            <br></br>
            <h3>Option 1 - Tokenize</h3>
            <span id="notice">The following feature executes an on-chain transaction that requires payment of gas fees.</span>
            <h3>To tokenize a copy, you are required to:</h3>

            1. ensure first that such a copy is authentic and ready to
            be made available to other institutions where they may be required.
            <br></br>
            2. Upload the copy (we recommend PDF format) to IPFS and save the hash generated as this
            will be required for subsequent steps.
            <br></br>
            3. Replace &lt;hash&gt; in the link https://gateway.pinata.cloud/ipfs/&lt;hash&gt; with the actual hash
            generated after your upload of the document to IPFS. Your link should now look like this;
            https://gateway.pinata.cloud/ipfs/QmX...1id
            <br></br>
            4. The tokenize dashboard requires you to make input into two fields - the link from step 3, and the name /
            matriculation code of a candidate to whom the certificate or transcript is issued.
            <br></br>
            These input items will combine to form the metadata of a token you mint by tokenizing each document.
            Ensure to have these three items for each corresponding copy of certificate or transcript you intend to tokenize.
            <br></br>
            5. Return to the Smart-Transcript Home page and click on the Tokenize button available on the first capsule-shaped
            field to get navigated to the Tokenize dashboard. You should see a page as shown in the following image.
            <br></br>
            <br></br>
            <Defaultscreen className="before_T grow" alt="Smart Transcript Screen"
              src='https://drive.google.com/file/d/10KiT0x4i65n8Cddohtr_7KmCNzo8Atnq/view?usp=share_link' />

            <br></br>
            <br></br>
            6. Click the "Connect Wallet" button up the page to automatically connect with your pre-installed metamask
            wallet which will enable you proceeed with the transaction.
            <br></br>
            7. If you do not have metamask installed as a browser extension, you will be noticeed to do so. Simply follow the
            notices to complete the process.
            <br></br>
            8. Once connected, mindfully input the earlier saved details from step 4, each in the appropriate field.
            <br></br>
            9. Double check to ensure accuracy of your input.
            <br></br>
            10. Once certain, click on the Tokenize button to mint a unique immutable token that represents a retrievable copy
            of a corresponding document, stored on the blockchain. A successful transaction will yield a change in the messages displayed
            on your screen as seen in the following image.
            <br></br>
            <br></br>
            <Successscreen className="after_T grow" alt="Smart Transcript Screen"
              src='https://drive.google.com/file/d/1sX9XIl-VqDhdSCRSkxF7JTQjy0uQB1pZ/view?usp=share_link' />

            <br></br>
            <br></br>
            11. Look out for a link in pumpkin color generated on completion of your transaction. This link can be used to see
            details of your transaction on Etherscan.
            <br></br>
            12. You certainly should save this link within your reach too.
            <br></br>
            <br></br>
            <h3>Option 2 - Verify Copy</h3>
            <span id="notice">The following feature does not require payments of any kind.</span>
            <h3>To verify a copy, you are required to:</h3>
            1. Click on the "Verify Copy" button on the second capsule-shaped field on the Smart-Transcript home page to navigate to the
            verification dashboard.
            <br></br>
            2. Input the address of the token you intend to verify.
            <br></br>
            3. Click on the "Verify Transcript" button to see details of the corresponding copy on the blockchain via etherscan.
            Please note that this feature only supports addresses based on the Goerli test network at this stage of this project.
            <br></br>
            4. Select the details that interest you e.g. tokenId, etc., on the page so navigated to.
            <br></br>
            <br></br>
            <h3>Option 3 - Metadata </h3>
            <span id="notice">The following feature does not require payments of any kind.</span>
            <h3>Sequel to verifying that a copy truly avails on the blockchain, this feature gives details of the holder and
              actual document </h3>
            1. Click on the "Metadata" button on the third capsule-shaped field on the Smart-Transcript home page to navigate to the
            metadata verification dashboard.
            <br></br>
            2. Input the tokenId of the token you intend to verify in the input field. This can also be obtained from etherscan
            as in Option 2 above.
            <br></br>
            3. Every valid tokenId input generates a link below this field which you can simply follow by clicking on the button
            below it to navigate to a page where the metadata is served.
            <br></br>
            <br></br>
            <h3>Option 4 - Revoke Copy </h3>
            <span id="notice">The following feature executes an on-chain transaction that requires payment of gas fees. Only 
            the address responsible for minting a token is authorized to revoke it.</span>
            <br></br>
            <span id="notice">It is emphasized that you ensure the decision to use this feature is final</span>
            <h3>In such rare cases when an institution wishes to withdraw a certification earlier issued to a graduate, this
              feature helps bring the same record onchain</h3>
            1. Click on the "Revoke Copy" button on the fourth capsule-shaped field on the Smart-Transcript home page to navigate to the
            revocation dashboard.
            <br></br>
            2. Input the tokenId of the token you intend to revoke in the input field. This can also be obtained from etherscan
            as in Option 2 above.
            <br></br>
            3. Click on the "Revoke Copy" button below the input field and look out for feedback generated in pumpkin color.
            <br></br>
            4. A link including the transaction hash generated can be followed to see details of the transaction via etherscan.
            <br></br>
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Guide;