import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';
import React from "react";
import Img from '../public/smart_transcript_background1.jpg';
import background from '../public/smart_transcript_3d-wallpaper.jpg';
import { Inter } from '@next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// apply Inter font
const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

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
      <div className="home">
        <div className="container">
          <h1 className="font-weight-normal grow">Features / Options</h1>
          <p>
            Welcome to the Smart-Transcript Decentralized Application Dashboard.
            Your institution will be making a smart move by using Smart-Transcript
            to tokenize and manage the storage, retrieval, distribution, and verification
            of academic transcripts and certificates of its graduates
            and students.</p>

            <Image
              className="st_image grow"
              src={Img} alt="Smart-Transcript"
            />

            <h3 className="funfact">Before you get started...</h3>
            <p>It is recommended that the handler of this application for your
            institution be one who has basic knowledge of the functionalities of a decentralized app.
            It is also recommended that every handler takes a tour of the various pages of the
            application, making sure to read the "Guide" page. This will ensure a good understanding
            of the various features of the dapp before its actual use.
            <br></br>
            <br></br>
            It should be borne in mind that blockchain transactions as will be carried out on this dapp
            do require a payment of gas fees. It is not in the best interest of any institution or other
            categories of users to initiate transactions which they haven't already considered necessary
            to the purpose for which this dapp solution is developed. If you are an authorized handler for
            your institution and you have taken a tour of this platform, then you are ready to make that
            smart move. Simply select an option below.
          </p>
          <br></br>

          <div className='tc_styles'>
            <div className="grid one grow">
              <p className="boxedText0">To tokenize academic transcripts or certificates,
                upload a copy in PDF format to IPFS and save the hash generated. This will be
                required as input to the dashboard when you tokenize.</p>
              <br></br>

              <div>
                <p className="boxedText1">If you do not adequately understand the above
                  instructions, please visit the <span className="how_to" ><Link href='/guide'>Guide</Link></span> page before you click
                  the button below. Note that this option initiates an on-chain transaction.</p>
              </div>
              <br></br>
              <Link href='/tokenize'>
                <button id="starterButton">Tokenize</button>
              </Link>

              <br></br>
            </div>
          </div>
          <br></br>

          <div>
            <h3 className="funfact">Hassle-free distribution and verification, yet confidential</h3>
            <p>Among the problems Smart-Transcript attempts to solve is that of complexities that could hinder
              notice, confidential dispatch of transcripts with certainty of their originality. The following dashboards
              avail Smart-Transcript users two options which could be used by institutions or individuals to verify originality
              and true ownership of each tokenized copy in a matter of few minutes. Confidentiality is maintained by the fact that
              only parties with whom an address is shared are able to access relevant data. The immutability feature of the blockchain
              also guarantees that copies remain permanently intact, irrespective of whoever gets access to an address.
              <br></br>
              <br></br>
              The "Verify Copy" option uses the provided token address to make available on-chain details that of that copy. These
              details include tokenId, source address (address of the issueing institution), time of transaction etc. The "Metadata"
              option uses an input tokenId of a copy to make available its corresponding metadata. The metadata in this case includes
              name and matriculation details of a candidate for which the token is minted, It also captures a link that points to the address
              of the actual transcript or certificate document issued by the institution on a distributed storage - IPFS.
            </p>
            <br></br>


            <div className='tc_styles'>
              <div className="grid two grow">
                <p className="boxedText0">Anybody can verify authenticity of a copy of tokenized transcript or
                  certificate using the token address and tokenId presented by an acclaimed owner.</p>
                <br></br>
                <div>
                  <p className="boxedText1">If you do not adequately understand the above
                    instructions, please visit the <span className="how_to" ><Link href='/guide'>Guide</Link></span> page before you click the
                    button below. Note that this option does not require gas fees.</p>
                </div>
                <br></br>
                <Link href='/verify'>
                  <button id="manageCopies">Verify Copy</button>
                </Link>

                <br></br>
              </div>


              <div className="grid three grow">
                <p className="boxedText0">To verify that an individual truly owns a copy of
                  transcript or certificate, you can input their tokenId to see details of a copy
                  as published by their institution.</p>
                <br></br>

                <div>
                  <p className="boxedText1">If you do not adequately understand the above
                    instructions, please visit the <span className="how_to" ><Link href='/guide'>Guide</Link></span> page before you click
                    the button below. This option does not require gas fees.</p>
                </div>
                <br></br>
                <Link href='/metadata'>
                  <button id="starterButton">Metadata</button>
                </Link>

                <br></br>
              </div>
            </div>
          </div>
          <br></br>

          <div>
            <h3 className="funfact">Attention!</h3>
            <p>
              There are such rare occassions when an institution dims it fit to completely withdraw an earlier issued certification.
              This could be on grounds of misconduct or detected malpractices on the part of the bearer of the certificate. Withdrawing
              a certificate invariably translates to invalidation of the corresponding academic transcript. The following feature of
              the Smart-Transcript dapp enables institutions to reserve the right to make such withdrawals.
              <br></br>
              As is the case with blockchain transactions, this record of withdrawal becomes publicly accessible to all, and
              the institution's integrity that backed earlier issued copies are immediately withdrawn. Institutions are advised to
              ensure adequate consideration of the decision to use this feature before actually doing so.
            </p>
            <br></br>


            <div className='tc_styles'>
              <div className="grid four grow">
                <p className="boxedText0">To permanently revoke a transcript or certificate earlier issued to an individual,
                  this dashboard lets you input a tokenId corresponding to their copy as earlier published by your institution.</p>
                <br></br>

                <div>
                  <p className="boxedText1">If you do not adequately understand the above
                    instructions, please visit the <span className="how_to" ><Link href='/guide'>Guide</Link></span> page before you click
                    the button below. This option initiates an on-chain transaction.</p>
                </div>
                <br></br>
                <Link href='/revoke_copy'>
                  <button id="starterButton">Revoke Copy</button>
                </Link>

                <br></br>
              </div>

            </div>

          </div>
          <br></br>
          <h3 className="funfact">Smart-Transcript Funfact</h3>
          <p>
            Every time an institution uses the Smart-Transcript decentralized application, another
            graduate is given a better chance at advancing their career. Thanks to Smart-Transcript,
            no one has to wait "in the dark", risking the loss of their next admission or candidacy
            for an appointment, only because their transcripts or certificates couldn't be verified
            in the corresponding timeframe.
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
