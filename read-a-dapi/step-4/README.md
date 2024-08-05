## Reading from the dAPI

In this step, we will read data from the dAPI using the `DataFeedReaderExample` contract.

### Create the `read-dapi.js` Script

Create a new file named `read-dapi.js` in the `scripts` directory and add the following code:

```javascript
const hre = require('hardhat');

async function main() {

  const Reader = await hre.deployments.get("DataFeedReaderExample");
  const reader = new hre.ethers.Contract(
    Reader.address,
    Reader.abi,
    hre.ethers.provider.getSigner()
  );
// readFromDapi
  const readFromDapi = await reader.readDapi();
  console.log(readFromDapi);
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

To run this script, use the following command:

```bash
yarn hardhat run scripts/read-dapi.js --network sepolia
```