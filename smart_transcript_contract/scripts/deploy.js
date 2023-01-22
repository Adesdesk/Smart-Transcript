async function main() {
  // To lay hold on the contract factory 
  const SmartTranscript = await ethers.getContractFactory("SmartTranscript");

  // Start deployment, and return a promise that resolves to SmartTranscript contract object
  const smartTranscript = await SmartTranscript.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", smartTranscript.address);

  console.log("Waiting....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(100000);


  // Verify the SmartTranscript contract after deploying
  await hre.run("verify:verify", {
    contract: "contracts/SmartTranscript.sol:SmartTranscript",
    address: SmartTranscript.address,
    constructorArguments: [],
  });
  console.log("Verified SmartTranscript ")
}

// the function sleep, to specifiy time for the wait
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });