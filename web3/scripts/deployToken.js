// const hre = require('hardhat');
//deployed at: 0x2Ce43038131C412b21FA8F02603B3c4cdB00FA80
const Main = async () => {
  const TokenContract = await ethers.getContractFactory('TokenContract');
  const tokenContract = await TokenContract.deploy();
  await tokenContract.deployed();
  console.log('deployed to', tokenContract.address);
};
const runMain = async () => {
  try {
    await Main();
    process.exit(0);
  } catch (error) {
    console.log('Some error occurred');
    console.log(error);
    process.exit(1);
  }
};
runMain();
