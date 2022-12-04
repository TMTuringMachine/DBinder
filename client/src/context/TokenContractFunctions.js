import { createContext, useState } from 'react';
import { ethers } from 'ethers';
import { TokenContractABI, TokenContractAddress } from '../utils/constants';
import { useEffect } from 'react';
export const TokenContractContext = createContext();

const { ethereum } = window;
const getTokenContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = provider.getSigner();
  const TokenContract = new ethers.Contract(
    TokenContractAddress,
    TokenContractABI,
    signer
  );
  return TokenContract;
};

const transferToAuthor = (AuthorAddress, amount) => {
  const TokenContract = getTokenContract();
  TokenContract.sendPaymentToAuthor(AuthorAddress, {
    value: amount,
  });
};

const BookProvider = ({ children }) => {
  return (
    <TokenContractContext.Provider
      value={{
        connectWallet,
        currAccount,
        getCIDOfAuthor,
        addCID,
      }}
    >
      {children}
    </TokenContractContext.Provider>
  );
};
export default BookProvider;
