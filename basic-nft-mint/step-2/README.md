## Step 2 - Writing the NFT Smart Contract

In this step, we would write our NFT smart contract. We will use the OpenZeppelin ERC721 standard.

- Update your `hardhat.config.js` file to this:

```javascript
require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');

module.exports = {
  networks: { 
    sepolia: {
      url: "https://rpc-sepolia.rockx.com",
      chainId: 11155111, 
      accounts: {
        mnemonic: ""
      }
    }
   },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  },
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

```

Make sure to add in your RPC URL and mnemonic for Ethereum Sepolia.

- Create a new file `contracts/MyNFT.sol` and add the following code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
    }

    function createNFT(address recipient) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        tokenCounter += 1;
        return newTokenId;
    }
}
```

- We have created a simple NFT contract that inherits from the OpenZeppelin ERC721 contract. We have also added a `createNFT` function that allows the owner to mint an NFT.

- The `createNFT()` function takes an `address` as an argument and mints an NFT to that address. It then increments the `tokenCounter` to keep track of the total number of NFTs minted.