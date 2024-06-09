require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/sjc3qTC4GJRew0qln4SRpGDD1e5ooZR4",
      accounts: [
        "f9ca533f85057293ccb3cc2b937c61438f4f1d7a827c5939d8fe02963ac2c6c3",
      ], // private key
    },
  },
};
