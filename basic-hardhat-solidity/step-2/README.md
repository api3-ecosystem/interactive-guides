## Step 2: Setting up hardhat

Install the additional dependencies for the project.

```bash
npm install @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers hardhat-deploy
```

Update the `hardhat.config.js` file to include the Solidity compiler settings and the network settings.

Make sure to add in your `mnemonic`.

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
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```