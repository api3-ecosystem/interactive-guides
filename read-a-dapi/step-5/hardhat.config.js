require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');

credentials = require('./credentials.json');

module.exports = {
  networks: credentials.networks,
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};