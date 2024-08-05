const hre = require('hardhat');

module.exports = async function() {
  // Deploy Dapi Reader
    const Reader = await hre.deployments.deploy('DataFeedReaderExample', {
        from: (await hre.getUnnamedAccounts())[0],
    } );
    console.log(`Deployed DapiReader at ${Reader.address}`);
}

