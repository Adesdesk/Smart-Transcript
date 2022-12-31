// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/// @custom:security-contact adesdesk@outlook.com
/**
   * @title Create_Smart_Transcript
   * @dev Create_Smart_Transcript version 0.2.0
   * @custom:dev-run-script file_path
   */

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// @author - Adeola David Adelakun
// The Create_Smart_Transcript contract
contract Create_Smart_Transcript is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

// implement inbuilt tracking of token (certificate/transcript IDs
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Create_Smart_Transcript", "CST") {
    }

// mint and issue tokenized transcript - payment required
    function safeMint(address to, string memory uri) public virtual payable {
        require(msg.value >= 10 wei, "Payment amount not matched");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }


// @author - Adeola David Adelakun
// Solidity override functions    
// this function allows an institution to permanently revoke authorization behind a previously tokenized transcript
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

// The public can access stored metadata of each tokenized transcript
// Easy verification by receiving institutions
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

}


// @author - Adeola David Adelakun

// sample uri: https://gateway.pinata.cloud/ipfs/QmXRc4BdrvipFqpJnsNQeyWtQ5MrSd22835S4zqXTEr1dM
