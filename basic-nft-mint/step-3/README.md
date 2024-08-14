## Step 3 - Deploying the NFT Contract

In this step, we would write a deployment script to deploy our `MyNFT` contract.

- Create a `deploy` directory and make a file named `deploy.js`.

```javascript
const hre = require("hardhat");

module.exports = async function ({ getUnnamedAccounts, deployments }) {
    const MyNFT = await deployments.deploy("MyNFT", {
        from: (await getUnnamedAccounts())[0],
        log: true,
    });
    console.log("MyNFT deployed to:", MyNFT.address);
}
```
- Fund your wallet with some testnet ETH from the [Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia).

Run the following command to deploy the contract:

```bash
npx hardhat deploy --config hardhat.config.js --network sepolia
```