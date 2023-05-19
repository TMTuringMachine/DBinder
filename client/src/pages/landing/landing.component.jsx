import React, { useState, useEffect, useContext } from 'react';
import Lottie from 'react-lottie';
import BubbleLottie from '../../assets/lotties/bubble.json';
import BubbleLottie1 from '../../assets/lotties/bubble1.json';
import BubbleLottie2 from '../../assets/lotties/bubble2.json';
import BubbleLottie3 from '../../assets/lotties/bubble3.json';

import { BookContractContext } from '../../context/BookContractFunctions';

import { ReactComponent as LandingImage } from '../../assets/images/landing.svg';

import { Box, styled } from '@mui/material';
// import CustomButton from "../../components/CustomButton/CustomButton.component";

import LandingPage from './landingPage';
import SignupPage from './signupPage';
import LoginPage from './loginPage';

const Glass = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  backdropFilter: 'blur(20px)',
  position: 'absolute',
  top: '0px',
}));

const Landing = () => {
  const [mode, setMode] = useState('landing');
  const { connectWallet } = useContext(BookContractContext);
  let content;

  if (mode == 'landing') {
    content = <LandingPage setMode={setMode} />;
  } else if (mode == 'signup') {
    content = <SignupPage setMode={setMode} />;
  } else if (mode == 'login') {
    content = <LoginPage setMode={setMode} />;
  }
  useEffect(() => {
    connectWallet();
  }, []);
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: BubbleLottie1,

    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: BubbleLottie2,

    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: BubbleLottie3,

    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <div className="w-screen h-screen bg-background overflow-hidden">
        <div className="absolute h-[600px] w-[600px]">
          <Lottie
            options={defaultOptions1}
            width="100%"
            height="100%"
            speed={3}
          />
        </div>
        <div className="absolute h-[500px] w-[500px] -top-36 -right-36">
          <Lottie
            options={defaultOptions2}
            width="100%"
            height="100%"
            speed={3}
          />
        </div>
        <div className="absolute h-[400px] w-[400px] -bottom-24 right-36">
          <Lottie
            options={defaultOptions3}
            width="100%"
            height="100%"
            speed={3}
          />
        </div>
      </div>
      <Glass>
        <div className="w-full h-16 px-10 flex items-center justify-between">
          <div className="flex items-center gap-24">
            <button
              className="text-xl font-bold text-white"
              onClick={() => {
                setMode('landing');
              }}
            >
              dbinder
            </button>
            <div className="flex items-center gap-7">
              <div className="text-text1 font-normal">List your book</div>
              <div className="text-text1 font-normal">Bookstore</div>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <button
              className="text-text1 font-semibold"
              onClick={() => {
                setMode('login');
              }}
            >
              Login
            </button>
            <button
              className="text-text1 font-semibold"
              onClick={() => {
                setMode('signup');
              }}
            >
              Signup
            </button>
          </div>
        </div>
        {/* <div className="flex gap-16 px-10 mt-12">
          <div className="w-3/5 flex flex-col justify-center">
            <h1 className="text-6xl text-white font-bold">
              PAY ONLY FOR THE PAGES YOU READ !
            </h1>
            <h1 className="text-2xl text-text1 mt-6 mb-6">
              A modern and decentralized way of reading and selling books
            </h1>
            <CustomButton>GET STARTED</CustomButton>
          </div>
          <div className="w-2/5 flex items-center align-center">
            <div className="w-3/4">
              <LandingImage height="100%" width="100%" />
            </div>
          </div>
        </div> */}
        {content}
      </Glass>
      {/* <div className="absolute w-screen h-screen bg-white opacity-10 blur-3xl top-0"></div> */}
    </>
  );
};

export default Landing;
