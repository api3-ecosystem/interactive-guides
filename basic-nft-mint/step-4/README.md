## Step 4 - Minting NFTs

In this step, we would interact with our deployed NFT Contract and mint an NFT to our wallet.

Make a new file `scripts/mint.js` and add the following code:

```javascript
const hre = require("hardhat");

async function main() {

    const MyNFT = await hre.deployments.get("MyNFT");
    const MyNFTContract = new hre.ethers.Contract(
        MyNFT.address,
        MyNFT.abi,
        hre.ethers.provider.getSigner()
    );

    // Mint an NFT
    const createNFT = await MyNFTContract.createNFT(hre.ethers.provider.getSigner().getAddress());
    console.log("Minting an NFT...");
    await createNFT.wait();
    console.log("NFT Minted!");
    console.log("Transaction Link: https://sepolia.etherscan.io/tx/" + createNFT.hash);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
```

Now run the following command to mint an NFT:

```bash
npx hardhat run scripts/mint.js --network sepolia
```