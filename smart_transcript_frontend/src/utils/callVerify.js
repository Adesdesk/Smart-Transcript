const web3 = createAlchemyWeb3(alchemyKey);
/*import contract from 'truffle-contract';*/
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const contractABI = require('../smart_transcript_abi.json')
const contractAddress = "0x047256F2B6896404876D5eF8ecC361F5d7dE56Bc";

const network = '<NETWORK_NAME>'; // Replace with the name of the Ethereum network
/*const abi = [{...}]; // Replace with the contract ABI*/


import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

try {
    const chain = EvmChain.ETHEREUM;

    const address = '0x1234567890123456789012345678901234567890';

    await Moralis.start({
        apiKey: 'YOUR_API_KEY',
        // ...and any other configuration
    });

    const response = await Moralis.EvmApi.nft.getNFTContractMetadata({
        address,
        chain,
    });

    console.log(response?.result);
} catch (e) {
    console.error(e);
}

/*async function getTokenURI(tokenId) {
  const web3 = new Web3(new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/<alchemyKey>`));
  const ERC721Contract = contract(contractABI);
  ERC721Contract.setProvider(web3.currentProvider);
  const instance = await ERC721Contract.at(contractAddress);

  try {
    const tokenURI = await instance.tokenURI(tokenId);
    console.log(`Token URI: ${tokenURI}`);
  } catch (err) {
    console.error(`Error calling tokenURI: ${err}`);
  }
}*/