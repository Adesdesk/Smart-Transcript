import React from "react";
import { useEffect, useState } from "react";
import { 
  connectWallet,
  _burn,
  getCurrentWalletConnected 
 } from "../utils/interact.js";

const Verify = (props) => {

  // list of state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [tokenUri, setTokenUri] = useState("");
 

  useEffect(() => {
  async function fetchData() {
    // We await here
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);
    addWalletListener(); 
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state


  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Write something in the text-field above.");
        } else {
          setWallet("");
          setStatus("Please link your Metamask using the <Get Started> button.");
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


  const connectWalletPressed = async () => { 
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);   
  };


  /*Accept user input of tokenId*/
  const handleChange = (event) => {
    setTokenId(event.target.value);
  }

  const handleBurn = async () => {
    await _burn(tokenId);
  }


  // the user inteface
  return (
    <div className="mint__">
      <div className="container">
        <div className="outer_box">
          <div className="box">
          </div>
          <div className="inner_box">
            <h1 className="font-weight-normal" grow>Verify Smart Transcript</h1>
            <p id="instructions">
              Click on the button below to connect your virtual wallet
              and authorize verification of transcripts.
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
                    Kindly input Token ID corresponding to a Transcript or certificate to be verified
                     before you click <span className="attention">Verify Transcript</span> below
                  </p>
                  <div className="Minter">
                  <form>
                    <h2>Token ID</h2>
                    <input id="placeholder"
                      type="text" value={tokenId}
                      placeholder="sample: 67"
                      onChange={handleChange}
                    />
                  </form>
                  <button id="mintButton" onClick={handleBurn}>
                    Verify Transcript
                  </button>
                  <p id="status">
                    {status}
                  </p>
                </div>
          </div>
        </div>
      </div>
      );
}

export default Verify;







