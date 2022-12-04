require('@nomiclabs/hardhat-ethers');
//https://eth-goerli.g.alchemy.com/v2/eErCUzpYMdtL1ozhI2D5yVkG-rdzKC_U
//deployed on : 0xE74Fd7d45979ca2ca51B82AC92d22F70c0aC6b31
module.exports = {
  solidity: '0.8.9',
  defaultNetwork: 'polygon_mumbai',
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/UCogonq8T7CwvVnJLwxuP7Yc70gR9ScK`,
      accounts: [
        `0xdcf8b2f843ab71ff5f75ad28ebbba14685cc5db604038bb75e14e0f6112c772d`,
      ],
    },
  },
};
