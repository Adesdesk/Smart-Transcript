// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/// @custom:security-contact adesdesk@outlook.com
/**
   * @title SmartTranscript
   * @dev SmartTranscript version 0.1.0
   * @author - Adeola David Adelakun
   */

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// @author - Adeola David Adelakun
// The SmartTranscript contract

contract SmartTranscript is ERC721, ERC721URIStorage, ERC721Burnable {
    using Counters for Counters.Counter;

// implement inbuilt tracking of token (certificate/transcript IDs)
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("SmartTranscript", "SMT") {
    }

// mint and issue tokenized transcript - payment required
// exact amount payable to be updated after trial phase of this project

    function safeMint(address to, string memory uri) public virtual payable {
        require(msg.value >= 0 wei, "Payment amount not matched");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

// @author - Adeola David Adelakun
// Solidity override functions    
// this function allows an institution to permanently revoke certificates and transcripts in such rare cases

    function _burn(uint256 tokenId) internal onlyOwnerOf(tokenId) override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

// The public can access stored metadata of each tokenized transcript
// Easy verification by receiving institutions and the entire public

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

// access control mechanism to ensure only the same institution that issued a copy can revoke it.
    modifier onlyOwnerOf(uint256 _tokenId) {
        require(ownerOf(_tokenId) == msg.sender, "Unauthorized! You are not the author of this copy.");
        _;
    }
}

// @author - Adeola David Adelakun