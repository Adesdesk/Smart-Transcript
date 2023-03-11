import React from 'react';
import { JSONOnIPFS } from './records_to_pinata.js';
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);
const contractAddress = '0x73F9671506f3494F97F1e32Ca45810610b3704c5';
const contractABI = require('./SmartTranscript.json');



// connect to metamask
export const walletConnection = () => {
    return new Promise(async (resolve, reject) => {
    // Check if Metamask is installed
    if (window.ethereum) {
    try {
    const addressArray = await window.ethereum.request({
    method: "eth_requestAccounts",
    });
    const obj = {
    notice: "You can now proceed to fill input fields appropriately.",
    address: addressArray[0],
    };
    resolve(obj);
    } catch (err) {
    reject({
    address: "",
    notice: "Oops! " + err.message,
    });
    }
    } else { // case where Metamask is not installed
    const notice = (
    <span>
    <p>
    {" "}
    Oops!{" "}
    {/* Redirect user to download and install Metamask */}
    <a target="_blank" href={'https://metamask.io/download.html'}>
    Kindly install Metamask virtual Ethereum wallet, to your
    browser.
    </a>
    </p>
    </span>
    );
    reject({
    address: "",
    notice: notice,
    });
    }
    });
    };


// pick currently active wallet for connection
export const connectCurrentWallet = () => {
return new Promise(async (resolve, reject) => {
// Check if the user has the MetaMask wallet installed to their browser
if (window.ethereum) {
try {
// Retrieve the user's Ethereum address from their MetaMask wallet
const addressArray = await window.ethereum.request({
method: "eth_accounts",
});
    // If the user has an Ethereum address, return an object with their address and a notice/update
    if (addressArray.length > 0) {
      resolve({
        address: addressArray[0],
        notice: "Kindly input appropriate details in the above input-field.",
      });
    } 
    // If the user does not have an Ethereum address, return an object with an empty address and an update
    else {
      resolve({
        address: "",
        notice: "Please connect an Ethereum wallet by clicking the first button above",
      });
    }
  } 
  // in case where there is an error, return an object with an empty address and an error message
  catch (err) {
    resolve({
      address: "",
      notice: "Oops! " + err.message,
    });
  }
} 
// If the user does not have the MetaMask wallet installed, return an object 
// with an empty address and a message to download and install MetaMask
else {
  resolve({
    address: "",
    notice: (
      <span>
        <p>
          {" "}
          Oops!{" "}
          {/* redirect to download and install metamask first */}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            Get a virtual Ethereum wallet - Metamask installed, to your
            browser.
          </a>
        </p>
      </span>
    ),
  });
}
});
};



// call the safeMint function
export const safeMint = (document, candidate) => {
  // Check if all fields are filled
  if (document.trim() === "" || candidate.trim() === "") {
  return Promise.resolve({
  success: false,
  notice: "Kindly fill all fields before you mint.",
  });
  }
  
  // Create metadata object
  const metadata = new Object();
  metadata.candidate = candidate;
  metadata.document = document;
  
  // Upload metadata to IPFS using JSONOnIPFS function
  return JSONOnIPFS(metadata)
  .then((pinataResponse) => {
  if (!pinataResponse.success) {
  return Promise.resolve({
  success: false,
  notice: "Oops! Something went wrong with your tokenURI.",
  });
  }
  const tokenURI = pinataResponse.pinataUrl;
    // Create an Ethereum transaction to mint the token
    window.contract = new web3.eth.Contract(contractABI, contractAddress);
    const transactionParameters = {
      to: contractAddress,
      from: window.ethereum.selectedAddress,
      data: window.contract.methods
        .safeMint(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };
    return window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
  })
  .then((txHash) => {
    // Return success message with transaction details
    return Promise.resolve({
      success: true,
      notice:
        "Document tokenized successfully. View transaction details on Etherscan: https://goerli.etherscan.io/tx/" +
        txHash,
    });
  })
  .catch((error) => {
    // Return error message
    return Promise.resolve({
      success: false,
      notice: "Aww! Something didn't go right: " + error.message,
    });
  });
};
  



