## Step 1 - Setting up a basic hardhat project

In this step, we will set up a new hardhat project and install all the necessary dependencies.

### Setting up hardhat

- Initialize npm and install hardhat:

```
npm init -y
npm install --save-dev hardhat
```

- Create a new hardhat project:

```
npx hardhat
```

- Choose "Create an empty hardhat.config.js" when prompted.

### Installing all the other dependencies

- Install `OpenZeppelin` contracts

```
npm install @openzeppelin/contracts@4.9.5
```

- Install all the other dependencies:

```
npm install @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers hardhat-deploy
```