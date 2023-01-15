import React from 'react';
import {pinJSONToIPFS} from './pinata.js';
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 
const contractABI = require('../smart_transcript_abi.json')
const contractAddress = "0xaAb57c3Eaf3E07B4Ff25d1DF96b972fF764945F2";


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Kindly input appropriate message in the above input-field.",
        address: addressArray[0],
      };
      return obj;
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


export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Kindly input appropriate message in the above input-field.",
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


// get instance of my contract
/*async function loadContract() {
  return new web3.eth.Contract(contractABI, contractAddress);
}*/

export const safeMint = async (url, name, description) => {
  if (url.trim() === "" || name.trim() === "" || description.trim() === "") {
    return {
      success: false,
      status: "Kindly fill all fields before you mint.",
    };
  }


// make metadata
  
  const metadata = new Object();
  metadata.name = name;
  metadata.image = url;
  metadata.description = description;

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

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "Document tokenized successfully. View transaction details on Etherscan: https://goerli.etherscan.io/address/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "Aww! Something didn't go right: " + error.message,
    };
  }
};
