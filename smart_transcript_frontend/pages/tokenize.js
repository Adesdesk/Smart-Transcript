import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import { useEffect, useState } from "react";
import {
  connectWallet,
  safeMint,
  getCurrentWalletConnected
} from "../appendages/integrate.js";

const Tokenize = (props) => {

  // list of state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [candidate, setCandidate] = useState("");
  const [document, setDocument] = useState("");

  // a useEffect hook to manage connection to the wallet accross pages where necessary
  useEffect(() => {
    async function fetchData() {
      // We await here
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address)
      setStatus(status);
      addWalletListener();
    }
    fetchData();
  }, []);

// detect active wallet
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Write something in the text-field above.");
        } else {
          setWallet("");
          setStatus("Please link your Metamask using the <Connect wallet> button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          Oops!{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            Kindly install Metamask virtual Ethereum wallet, to your
            browser.
          </a>
        </p>
      );
    }
  }

// enable user to connect wallet
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  // handle clicks on the "Tokenize" button
  const onMintPressed = async () => {
    const { success, status } = await safeMint(document, candidate);
    setStatus(status);
    if (success) {
      setCandidate("");
      setDocument("");
    }
  };

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
              <h1 className="font-weight-normal grow">Create Smart Transcript</h1>
              <p id="instructions">
                Click on the button below to connect your institution's wallet
                and authorize tokenization of transcripts.
              </p>

              <button id="walletButton" onClick={connectWalletPressed}>
                {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                ) : (
                  <span>Connect Wallet</span>
                )}
              </button>
              <br></br>
            </div>

            <p id="instructions">
              Kindly input a link to official transcript or certificate as well as name and matriculation details
              <br></br>
              per copy for corresponding graduates before you click <span className="attention">Tokenize Transcript</span> below
            </p>
            <div className="Minter">
              <form>
                <h2>Link to transcript or certificate uploaded to a distributed storage </h2>
                <input id="placeholder"
                  type="text"
                  placeholder="sample: https://gateway.pinata.cloud/ipfs/<hash>"
                  onChange={(event) => setDocument(event.target.value)}
                />

                <h2>Graduate/Student's Name and matriculation code</h2>
                <input id="placeholder"
                  type="text"
                  placeholder="sample: Adeola David Adelakun / MITCOMSCI1065423211"
                  onChange={(event) => setCandidate(event.target.value)}
                />

              </form>
              <button id="walletButton" onClick={onMintPressed}>
                Tokenize Transcript
              </button>
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

export default Tokenize;