## Step 5: Interacting with the contract

We have now successfully deployed the contract to the Sepolia testnet. In this step, we will learn how to interact with the contract using Hardhat.

We need to call the `setValue()` function of the contract to set a value. We will then call the `getValue()` function to get the value.

Make a file named `scripts/set-value.js` and add the following code:

```javascript
const hre = require("hardhat");

async function main() {

    const GetterSetter = await hre.deployments.get("GetterSetter");
    const GetterSetterContract = new hre.ethers.Contract(
        GetterSetter.address,
        GetterSetter.abi,
        hre.ethers.provider.getSigner()
    );

    // Set value to 100
    const setValue = await GetterSetterContract.setValue(100);
    console.log("Setting value to 100");
    await setValue.wait();

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
```

- `GetterSetterContract.setValue(100)` would call the `setValue()` function of the contract with the value `100`.

Run the following command set the value:

```bash
npx hardhat run scripts/set-value.js --network sepolia
```

Similarly, make a file named `scripts/get-value.js` and add the following code:

```javascript
const hre = require("hardhat");

async function main() {

    const GetterSetter = await hre.deployments.get("GetterSetter");
    const GetterSetterContract = new hre.ethers.Contract(
        GetterSetter.address,
        GetterSetter.abi,
        hre.ethers.provider.getSigner()
    );

    // Get the latest value
    const getValue = await GetterSetterContract.getValue();
    console.log("The value is:", getValue.toString());

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
```

- `GetterSetterContract.getValue()` would call the `getValue()` function of the contract.

Run the following command to get the value:

```bash
npx hardhat run scripts/get-value.js --network sepolia
```