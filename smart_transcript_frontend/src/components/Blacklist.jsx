import React from "react";

import { useEffect, useState } from "react";
import { 
  connectWallet,
  safeMint,
  getCurrentWalletConnected 
 } from "../utils/interact.js";

const Verify = (props) => {

  // list of state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  
  /*useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);*/
 

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

  const onMintPressed = async () => { 
  
    const { success, status } = await safeMint(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
    }
  };


  // the user inteface
  return (
    <div className="mint__">
      <div className="container">
        <div className="outer_box">
          <div className="box">
          </div>
          <div className="inner_box">
            <h1 className="font-weight-normal" grow>Revoke Certificate / Transcript</h1>
            <p id="instructions">
              Click on the button below to connect your institution's wallet
              and revoke (burn) previously published transcripts.
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
                  <span className="attention">Authorized handlers only!</span>
                  <br></br>
                    Kindly input Token ID corresponding to the Transcript or Certificate you wish to revoke 
                     before you click <span className="attention">Burn Transcript</span> below
                  </p>
                  <div className="Minter">
                  <form>
                    <h2>Token ID</h2>
                    <input id="placeholder"
                      type="text"
                      placeholder="sample: 67"
                      onChange={(event) => setURL(event.target.value)}
                    />
                  </form>
                  <button id="mintButton" onClick={onMintPressed}>
                    Burn Transcript
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