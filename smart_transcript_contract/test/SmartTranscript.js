const { expect } = require("chai");
const { ethers } = require("hardhat");
const SmartTranscript = require("path/to/SmartTranscript.json");

describe("SmartTranscript", () => {
  let smartTranscript;

  beforeEach(async () => {
    smartTranscript = await ethers.getContractAt(
      SmartTranscript.abi,
      (await ethers.provider.getSigner(0)).address
    );
  });

  it("should mint a token with a URI", async () => {
    const uri = "https://abcdefg.com/token1";
    const receipt = await smartTranscript.safeMint(
      (await ethers.getSigners())[1].address,
      uri
    );
    const tokenId = receipt.logs[0].args.tokenId;
    expect(await smartTranscript.tokenURI(tokenId)).to.equal(uri);
  });

  it("should burn a token", async () => {
    const uri = "https://abcdefg.com/token1";
    const receipt = await smartTranscript.safeMint(
      (await ethers.getSigners())[1].address,
      uri
    );
    const tokenId = receipt.logs[0].args.tokenId;
    await smartTranscript._burn(tokenId);
    expect(await smartTranscript.ownerOf(tokenId)).to.equal(ethers.constants.AddressZero);
  });
});
