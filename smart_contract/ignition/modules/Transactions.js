const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// const hre = require("hardhat");

/*const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deploy();

  console.log("Transactions deployed to: ", transactions.address);
};*/

module.exports = buildModule("Transactions", (m) => {
  const token = m.contract("Transactions", []);

  return { token };
});

/*const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();*/
