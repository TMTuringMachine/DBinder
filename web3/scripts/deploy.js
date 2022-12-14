// const hre = require('hardhat');
// deployed on: 0xaF958f6f4D7AFDf466FCCC143D4C9d4a851F2546
const Main = async () => {
  const BookContract = await ethers.getContractFactory('BookContract');
  const TokenContract = await ethers.getContractFactory('TokenContract');
  const bookcontract = await BookContract.deploy();
  const tokenContract = await TokenContract.deploy();
  await bookcontract.deployed();
  await tokenContract.deployed();
  console.log('deployed to', bookcontract.address);
  console.log('deployed to', bookcontract.address);
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
