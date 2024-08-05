## Setting up the project

- To set up an empty project, you can use the following command:

```bash
yarn init -y
```

- Add the following packages to your project:

```bash
yarn add hardhat @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-ethers @nomicfoundation/hardhat-ignition @nomicfoundation/hardhat-ignition-ethers @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-verify @typechain/ethers-v6 @typechain/hardhat chai ethers@5.7.2 hardhat-gas-reporter solidity-coverage typechain hardhat-deploy @nomiclabs/hardhat-waffle @openzeppelin/contracts@4.9.5 @types/sinon-chai ethereum-waffle
```

- Add the `@api3/contracts` package to your project to access the `IProxy` interface contract:

```bash
yarn add @api3/contracts
```

- Make a `hardhat.config.js` file and add the following:

```javascript
require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');

credentials = require('./credentials.json');

module.exports = {
  networks: credentials.networks,
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

- Make a `credentials.json` file and add the following. Make sure to add your *mnemonic*:

```json
{
  "networks": {
    "sepolia": {
      "url": "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      "chainId": 11155111,
      "accounts": { "mnemonic": "" }
    }
  }
}
```