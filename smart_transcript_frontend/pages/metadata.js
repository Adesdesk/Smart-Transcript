import Head from 'next/head';
import Link from "next/link";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import { useEffect, useState } from "react";
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../utils/SmartTranscript.json');
const contractAddress = '0x73F9671506f3494F97F1e32Ca45810610b3704c5';


const Metadata = (props) => {

  // list of state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState('');
  const [tokenID, setTokenID] = useState('');
  const [tokenId, setTokenId] = useState('')
  const [tokenUri, setTokenUri] = useState('')
  const [link, setLink] = useState('');

  // a useEffect hook to manage connection to the wallet accross pages where necessary
  useEffect(() => {
    async function getTokenUri() {
      try {
        const contract = new web3.eth.Contract(contractABI, contractAddress)
        const uri = await contract.methods.tokenURI(tokenId).call()
        setTokenUri(uri)
      } catch (err) {
        console.log(err)
      }
    }
// check for input tokenId
    if (tokenId) {
      getTokenUri()
      setStatus("Click the button above to visit the generated link and see details of this copy.");
    } else {
      setStatus("No new changes to your input tokenId detected");
    }

  }, [tokenId])

  const handleClick = (event) => {
    event.preventDefault();
    setLink(`${tokenUri}`);
  }

  // the user inteface
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
      <div className="mint__">
        <div className="container">
          <div className="outer_box">
            <div className="box">
            </div>
            <div className="inner_box">
              <br></br>
              <h1 className="font-weight-normal grow">Fetch Metadata of Transcript or Certificate</h1>
              <p id="instructions">
                Input the tokenId of the transcript or certificate you wish to verify in the form
                field below.
                <br></br>
                This feature does not require a payment of gas fees so you do not need to connect an
                ethereum wallet to proceed.
              </p>
              <br></br>
            </div>

            <p id="instructions">
              Kindly input the tokenId of the tokenized copy you wish to verify
              <br></br>
              before you click <span className="attention">Get Metadata</span> below
            </p>
            <div className="Minter">
              <form>
                <h2>Input tokenId (this should be a whole number e.g. 5, 77, or 556)</h2>

                <input id="placeholder"
                  type="text"
                  placeholder="sample: 11"
                  value={tokenId}
                  onChange={(e) => setTokenId(e.target.value)}
                />

              </form>
              {tokenUri && <p> {tokenUri} </p>}

              <Link href={tokenUri} legacyBehavior>
                <a className="metadata">Get Metadata</a>
              </Link>
              <br></br>
              <p id="status">
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Metadata;