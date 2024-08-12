const hre = require("hardhat");

module.exports = async function ({ getUnnamedAccounts, deployments }) {
    const GetterSetter = await deployments.deploy("GetterSetter", {
        from: (await getUnnamedAccounts())[0],
        log: true,
    });
    console.log("GetterSetter deployed to:", GetterSetter.address);
}