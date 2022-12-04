import { createContext, useState } from 'react';
import { ethers } from 'ethers';
import { BookContractABI, contractAddress } from '../utils/constants';
import { useEffect } from 'react';
export const BookContractContext = createContext();

const { ethereum } = window;
const getBookContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = provider.getSigner();
  const BookContract = new ethers.Contract(
    contractAddress,
    BookContractABI,
    signer
  );
  return BookContract;
};

const BookProvider = ({ children }) => {
  const [currAccount, setCurrAccount] = useState();
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert('Please install metamask');
      }
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      setCurrAccount(accounts[0]);
    } catch (e) {}
  };

  const connectWallet = async () => {
    if (!ethereum) {
      return alert('Please install metamask');
    }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    setCurrAccount(accounts[0]);
  };

  const getCIDOfAuthor = async (authorAddress) => {
    const bookContract = getBookContract();
    const CIDs = await bookContract.getCID(authorAddress);
    console.log(CIDs);
  };

  const addCID = async (authorAddress, cid) => {
    const bookContract = getBookContract();
    await bookContract.storeCID(authorAddress, cid);
    console.log('done');
  };

  return (
    <BookContractContext.Provider
      value={{
        connectWallet,
        currAccount,
        getCIDOfAuthor,
        addCID,
      }}
    >
      {children}
    </BookContractContext.Provider>
  );
};
export default BookProvider;
