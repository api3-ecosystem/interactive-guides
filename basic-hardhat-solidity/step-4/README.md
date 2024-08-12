## Step 4: Deploying the contract

Create a deployment script `deploy/deploy.js`

```javascript
const hre = require("hardhat");

module.exports = async function ({ getUnnamedAccounts, deployments }) {
    const GetterSetter = await deployments.deploy("GetterSetter", {
        from: (await getUnnamedAccounts())[0],
        log: true,
    });
    console.log("GetterSetter deployed to:", GetterSetter.address);
}
```

- `deployments.deploy()` gets the contract factory for the GetterSetter contract and deploys the contract.

Run the following command to deploy the contract:

```bash
npx hardhat deploy --config hardhat.config.js --network sepolia
```