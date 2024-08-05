## Setting the dAPI Proxy Address

To set the dAPI proxy address, we will use the `setProxyAddress()` function in the `DataFeedReaderExample` contract. This function allows the owner of the contract to update the proxy contract address.

Get the proxy address for a dAPI from the [API3 Market](https://market.api3.org) and set it in the `DataFeedReaderExample` contract.

Create a new file named `set-proxy-address.js` in the `scripts` directory and add the following code:

Set your proxy address in `DapiProxy`.

```javascript
const hre = require('hardhat');

async function main() {

  const Reader = await hre.deployments.get("DataFeedReaderExample");
  const reader = new hre.ethers.Contract(
    Reader.address,
    Reader.abi,
    hre.ethers.provider.getSigner()
  );
const DapiProxy = "<YOUR-PROXY-ADDRESS-FROM-API3-MARKET>";
// setDapiProxy
  const setDapiProxy = await reader.setDapiProxyAddress(DapiProxy);
  await setDapiProxy.wait();
  console.log("dAPI Proxy Set!");
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
yarn hardhat run scripts/set-proxy-address.js --network sepolia
```