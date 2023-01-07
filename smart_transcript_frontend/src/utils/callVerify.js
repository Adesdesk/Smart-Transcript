import React from 'react';
import {pinJSONToIPFS} from './pinata.js';
require('dotenv').config();
const web3 = createAlchemyWeb3(alchemyKey);
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const contractABI = require('../smart_transcript_abi.json')
const contractAddress = "0xaAb57c3Eaf3E07B4Ff25d1DF96b972fF764945F2";


function MyComponent() {
  async function handleButtonClick() {
    // Make sure web3 is available and the user is connected
    if (!createAlchemyWeb3) {
      return;
    }

    // Create a new instance of the ERC721 contract
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Call the tokenURI function with the ID of the token you want to get the URI for
    const tokenURI = await contract.methods.tokenURI(tokenId).call();

    // Do something with the returned URI
    console.log(tokenURI);
  }

  return (
    <button onClick={handleButtonClick}>Get Token URI</button>
  );
}

