const hre = require('hardhat');

async function main() {

  const Reader = await hre.deployments.get("DataFeedReaderExample");
  const reader = new hre.ethers.Contract(
    Reader.address,
    Reader.abi,
    hre.ethers.provider.getSigner()
  );
// readFromDapi
  const readFromDapi = await reader.readDataFeed();
  console.log(`Value: ` + (readFromDapi.value)/10**18);
  console.log(`Timestamp: ` + readFromDapi.timestamp);
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });