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