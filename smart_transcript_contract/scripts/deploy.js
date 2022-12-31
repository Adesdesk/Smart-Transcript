async function main() {
  // Grab the contract factory 
  const Create_Smart_Transcript = await ethers.getContractFactory("Create_Smart_Transcript");

  // Start deployment, returning a promise that resolves to a contract object
  const create_Smart_Transcript = await Create_Smart_Transcript.deploy(); // Instance of the contract 
  console.log("The Smart Transcript contract has been deployed to address: ", create_Smart_Transcript.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });