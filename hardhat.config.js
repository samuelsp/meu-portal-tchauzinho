require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/UZ9WLFfwlKSpZZLEno06DOhs_SOyeLgz",
      accounts: ["db168b8b64a5e801c648d93652974498e062ce0912c6540e0b23b6a51b4e310a"],
    },
  },
};