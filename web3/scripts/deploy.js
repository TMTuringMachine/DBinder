const hre = require('hardhat');
// deployed on: 0xaF958f6f4D7AFDf466FCCC143D4C9d4a851F2546
const Main = async () => {
  const BookContract = await hre.ethers.getContractFactory('BookContract');
  const bookcontract = await BookContract.deploy();
  await bookcontract.deployed();
  console.log('deployed to', bookcontract.address);
};
const runMain = async () => {
  try {
    await Main();
    process.exit(0);
  } catch (error) {
    console.log('Some error occurred');
    process.exit(1);
  }
};
runMain();
