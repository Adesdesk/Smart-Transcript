import React from 'react';
import { pinJSONToIPFS } from './records_to_pinata.js';
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);
const contractAddress = '0x73F9671506f3494F97F1e32Ca45810610b3704c5';
const contractABI = require('../utils/SmartTranscript.json');



// connect to metamask
export const connectWallet = async () => {
  // if metamask is found installed...
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Kindly fill the above input-field appropriately.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "Oops! " + err.message,
      };
    }
  } else { // Case that metamask is not yet installed
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            Oops!{" "}
            {/* redirect to first download and install metamask */}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              Kindly install Metamask virtual Ethereum wallet, to your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};


// pick currently active wallet for connection
export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Kindly input appropriate details in the above input-field.",
        };
      } else {
        return {
          address: "",
          status: "Please connect an Ethereum wallet by clicking the first button above",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "Oops! " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            Oops!{" "}
            {/* redirect to first download and install metamask */}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              Get a virtual Ethereum wallet - Metamask installed, to your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};


// call the safeMint function
export const safeMint = async (document, candidate) => {
  if (document.trim() === "" || candidate.trim() === "") {
    return {
      success: false,
      status: "Kindly fill all fields before you mint.",
    };
  }

  // make metadata

  const metadata = new Object();
  metadata.candidate = candidate;
  metadata.document = document;

  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "Oops! Something went wrong with your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
      .safeMint(window.ethereum.selectedAddress, tokenURI)
      .encodeABI(),
  };
// output the transaction hash so user can access transaction details on the block explorer
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "Document tokenized successfully. View transaction details on Etherscan: https://goerli.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "Aww! Something didn't go right: " + error.message,
    };
  }
};



