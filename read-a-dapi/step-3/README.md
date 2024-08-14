## Deploying `DataFeedReaderExample` contract

To deploy the `DataFeedReaderExample` contract, we will use the `hardhat-deploy` plugin.

Create a new file named `deploy.js` in the `deploy` directory and add the following code:

```javascript
const hre = require('hardhat');

module.exports = async function() {
  // Deploy Dapi Reader
    const Reader = await hre.deployments.deploy('DataFeedReaderExample', {
        from: (await hre.getUnnamedAccounts())[0],
    } );
    console.log(`Deployed DapiReader at ${Reader.address}`);
}
```

Deploy the `DataFeedReaderExample` contract by running the following command:

```bash
yarn hardhat deploy --network sepolia
```