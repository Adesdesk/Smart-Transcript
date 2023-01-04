import React from "react";
/*import Img from '../smart_transcript_background1.jpg';*/
import { useEffect, useState } from "react";
import { 
  connectWallet,
  safeMint,
  getCurrentWalletConnected 
 } from "../utils/interact.js";

const Tokenize = (props) => {

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
                    Kindly input name, comment, and link to official transcript or certificate 
                    <br></br>
                    copy for corresponding graduates before you click <span className="attention">Tokenize Transcript</span> below
                  </p>
                  <div className="Minter">
                  <form>
                    <h2>Link to transcript or certificate uploaded to a distributed storage </h2>
                    <input id="placeholder"
                      type="text"
                      placeholder="sample: https://gateway.pinata.cloud/ipfs/<hash>"
                      onChange={(event) => setURL(event.target.value)}
                    />
                    <h2>Name of Graduate/Student</h2>
                    <input id="placeholder"
                      type="text"
                      placeholder="sample: Adeola David Adelakun"
                      onChange={(event) => setName(event.target.value)}
                    />
                    <h2>Add Comments</h2>
                    <input id="placeholder"
                      type="text"
                      placeholder="Format: Name of Institution, Faculty, Department, and Matriculation Details"
                      onChange={(event) => setDescription(event.target.value)}
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
      );
}

export default Tokenize;