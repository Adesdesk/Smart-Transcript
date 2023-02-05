import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
const alchemyKey = "https://eth-goerli.g.alchemy.com/v2/zDVopI9bKu4AMOsJc6RnlYfReVlfSRCH"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../utils/SmartTranscript.json');
const contractAddress = '0x73F9671506f3494F97F1e32Ca45810610b3704c5';
import { useEffect, useState } from "react";
import {
    connectWallet,
    getCurrentWalletConnected
} from "../utils/integrate.js";


const RevokeCopy = (props) => {
    // list of state variables
    const [burnStatus, setBurnStatus] = useState(null);
    const [tokenId, setTokenId] = useState('');

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [candidate, setCandidate] = useState("");
    const [document, setDocument] = useState("");

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

    const handleBurn = async () => {
        // grabbing an instance of the Smart_Transcript contract
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // to grab the account which will be used to call the burn function
        const account = await web3.eth.getAccounts();

        // we invoke the burn function and set status for success or error cases
        contract.methods.burn(tokenId).send({ from: account[0] })
            .on('transactionHash', (hash) => {
                setBurnStatus(`Withdrawn. View transaction details on Etherscan: https://goerli.etherscan.io/tx/${hash}`);
            })
            .on('confirmation', (confirmationNumber, receipt) => {
                if (confirmationNumber === 2) {
                    setBurnStatus(`This copy has been successfully revoked! See details on Etherscan: https://goerli.etherscan.io/tx/${hash}`);
                }
            })
            .on('error', (error) => {
                setBurnStatus(`Error: ${error.message}`);
            });
    }

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
                            <h1 className="font-weight-normal grow">Revoke Transcript / Certificate</h1>
                            <p id="instructions">
                                Click on the button below to connect your institution's wallet
                                and authorize permanent withdrawal of a previously tokenized copy.
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
                            Input the tokenId of the transcript or certificate you wish to withdraw in the form
                            field below.
                            <br></br>
                            Be reminded that this is an irreversible action.
                            Be sure to have the final approval of your institution that this holder's certification should be
                            permanently withdrawn before you click <span className="attention">Revoke Copy</span> below.
                        </p>

                        <div className="Minter">
                            <form>
                                <h2>Input tokenId (this should be a whole number e.g. 5, 77, or 556)</h2>
                                <input id="placeholder"
                                    type="text"
                                    placeholder=" sample: 8 "
                                    onChange={e => setTokenId(e.target.value)} />
                            </form>
                            <button id="walletButton" onClick={handleBurn}>
                                Revoke Copy
                            </button>
                            {burnStatus && <p id="status">{burnStatus}</p>}
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RevokeCopy;

