require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url:"https://rinkeby.infura.io/v3/04132d4001834221a021b8e2eac7766c",
      accounts: [process.env.accounts],
  }
  }
};
