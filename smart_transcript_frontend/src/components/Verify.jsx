import React, { useState } from 'react';

/*const Verify = (props) => {*/
function Verify() {
  const [inputText, setInputText] = useState('');
  const [link, setLink] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLink(`https://goerli.etherscan.io/address/${inputText}`);
  }

  return (
    <div className="mint__">
      <div className="container">
        <div className="outer_box">
          <div className="inner_box">
            <br></br>
            <h1 className="font-weight-normal" grow>Verify Transcript</h1>
            <p id="instructions">
              This process is free of all forms of payable fees. You do not need to connect an
              ethereum wallet to complete verification of transcripts and certificates.
            </p>
            <br></br>
          </div>

          <p id="instructions">
            Kindly input the address corresponding to a transcript or certificate to be verified
            before you click <span className="attention">Confirm Address</span> below
          </p>
          <div className="Minter">

            <form onSubmit={handleSubmit}>
              <label>
                <h2>Paste token address</h2>
                <input id="placeholder" type="text" value={inputText}
                  placeholder="sample: 0x4512616d61faE3F6..........7209b2c056320f"
                  onChange={handleChange} />
              </label>
              <input className="h22" type="submit" value="Confirm Address" />
            </form>
            {link && <a href={link}>{inputText}</a>}
            <br></br>
            {link && <button id="walletButton" onClick={() => window.open(link, '_blank')}>Verify Transcript</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;







