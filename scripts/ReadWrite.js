
const hre = require("hardhat");

async function main() {
  const ReadWrite = await hre.ethers.getContractFactory("ReadWrite");
  const readwrite = await ReadWrite.deploy();

  await readwrite.deployed();

  console.log("ReadWrite deployed to:", readwrite.address);

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
