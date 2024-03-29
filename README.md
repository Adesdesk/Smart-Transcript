# Project Title

Smart-Transcript

## Description

A Decentralized Application by Adeola David A. - January 2023 Version

Smart-Transcript is a Decentralized Application proposed by Adeola to academic institutions and other categories of certificate issuing bodies for a smarter approach to managing the storage, retrieval, and distribution of their graduates' academic transcripts and certificates. This dApp takes advantage of the blockchain's decentralization, permanence, immutability, and transparency, to offer institutions a more efficient way to maintain copies of academic transcripts and other documents.

##### Smart-Transcript dapp is accessible online at [https://smart-transcript.vercel.app/](https://smart-transcript.vercel.app/)

Built (at this stage) on Ethereum's Goerli test network, Smart-Transcript is powered by a smart contract that allows institutions cryptographically sign a record of each graduate's academic transcript and have it stored on the blockchain as a non-fungible token NFT. This guarantees that dispatched transcript copies remain confidential and authentic, while eliminating the issues of delay in delivery, risks of misplacement in transit, and uncertainties surrounding the identity of the issuing institution. This solution is a novel idea conceived, designed and developed by Adeola.

Smart-Transcript uses a Next.js-based user interface via which users, mainly handlers for institutions, can connect a designated ethereum wallet to tokenize actual copies of transcripts and certificates. The user interface is easy to use, allowing institutions store an immutable record of these vital documents to te blockchain, and in turn, easily retrieve details of the source and ownership of other documents. The following are snapshots of the Smart-Transcript home page and the "Tokenize" dashboard.


##### Smart-Transcript Home page
![smart_transcript_home](https://user-images.githubusercontent.com/101281102/214306233-dd04e2ca-5633-4cac-aacd-df4ad87603b8.JPG)


##### The "Tokenize" Dashboard
![Tokenize_dashboard](https://user-images.githubusercontent.com/101281102/214308315-61a8d4c9-1a67-455d-9831-7682a0ce589d.JPG)


The on-chain record is retrievable with easy execution of the smart contract's functions, giving a destination institution access to the same unaltered record. This eliminates questions of authenticity and ownership or issuer conflicts. While institutions are at liberty to monetize the process still, this solution will translate to lesser costs borne by the graduate, since a significant portion of the amount spent on physical dispatch of the transcript can now be saved.

Institutions in real life do reserve the right to withdraw or revoke a previously issued certificate in a situtation where the bearer is found unworthy of such qualification. While blockchain transactions are ideally known as immutable, the Smart-Transcript DApp employs a call to the "burn" function of its smart contract source code in order to revoke previously tokenized documents. This ensures that institutions can retain all rights they reserved as applicable to the hard copy vital documents they have always issued. The following is a snapshot of the "Revoke Copy" dashboard where this feature can be executed.


##### The "Revoke Copy" Dashboard
![withdraw_copy_dashboard](https://user-images.githubusercontent.com/101281102/214310202-2c11f2d0-f540-4975-a3df-48cbe6e66926.JPG)


##### Successfully verified contract SmartTranscript on Etherscan. [Here](https://goerli.etherscan.io/address/0x73F9671506f3494F97F1e32Ca45810610b3704c5#code)

##### Smart-Transcript dapp is accessible online at [https://smart-transcript.vercel.app/](https://smart-transcript.vercel.app/)

## Getting Started

### Installing

* Clone this project's main folder using the following command
```
git clone https://github.com/Adesdesk/Smart-Transcript.git
```

### Executing program

* Open the smart_transcript_frontend folder folder in yoour choice IDE e.g. VSCode
* Create a new file in the root folder and name it '.env'
* Open the file 'env.example' and copy its content into the newly created '.env' file, this time, replacing the placeholder values with the respective values that apply.
* In your terminal, navigate (cd) into the smart_transcript_frontend folder and run one of the following commands according to your preference, to install dependences.
```
npm install
yarn install
```

* Then run one of the following commands in the same terminal to start your local server for the frontend application and your interaction via a browser 
```
npm run dev
yarn start
```

* When the server is started, browse http://localhost:3000/ in your choice browser to see the app launched
* Follow the guides and prompts available in the rendered frontend app to carry out transactions as you may desire for your testing

## Help

##### Note that you must have the following on your computer for this program to run as expected
* Node - Javascript runtime environment
* Metamask or other compatible ethereum wallets installed as your browser extension
* Some test Goerli Eth in your ethereum wallet
* A .env file created similarly to the .env.example file now filled with your own approriate environment variables
## Authors

Contributor(s) names and contact info

Name: Adeola David Adelakun

Email: adesdesk@outlook.com


## License

This project is licensed under the MIT License




