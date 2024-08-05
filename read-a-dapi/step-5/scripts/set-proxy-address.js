const hre = require('hardhat');

async function main() {

  const Reader = await hre.deployments.get("DataFeedReaderExample");
  const reader = new hre.ethers.Contract(
    Reader.address,
    Reader.abi,
    hre.ethers.provider.getSigner()
  );
const DapiProxy = "0x1A4eE81BBbb479f3923f22E315Bc2bD1f6d5d180";
// setDapiProxy
  const setDapiProxy = await reader.setProxyAddress(DapiProxy);
  await setDapiProxy.wait();
  console.log("dAPI Proxy Set!");
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });