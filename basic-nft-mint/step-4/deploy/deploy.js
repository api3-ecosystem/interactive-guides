const hre = require("hardhat");

module.exports = async function ({ getUnnamedAccounts, deployments }) {
    const MyNFT = await deployments.deploy("MyNFT", {
        from: (await getUnnamedAccounts())[0],
        log: true,
    });
    console.log("MyNFT deployed to:", MyNFT.address);
}