import React from "react";
import CustomButton from "../../components/CustomButton/CutomButton.component";
import { ReactComponent as LandingImage } from "../../assets/images/landing.svg";

const LandingPage = ({ setMode }) => {
  return (
    <>
      {/* <div className="w-full h-16 px-10 flex items-center justify-between">
        <div className="flex items-center gap-24">
          <div className="text-xl font-bold text-white">debinder</div>
          <div className="flex items-center gap-7">
            <div className="text-text1 font-normal">List your book</div>
            <div className="text-text1 font-normal">View all books</div>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-text1 font-semibold">Login</div>
          <div className="text-text1 font-semibold">Signup</div>
        </div>
      </div> */}
      <div className="flex gap-16 px-10 mt-12">
        <div className="w-3/5 flex flex-col justify-center">
          <h1 className="text-6xl text-white font-bold">
            PAY ONLY FOR THE PAGES YOU READ !
          </h1>
          <h1 className="text-2xl text-text1 mt-6 mb-6">
            A modern and decentralized way of reading and selling books
          </h1>
          <CustomButton
            onClick={() => {
              setMode("signup");
            }}
          >
            GET STARTED
          </CustomButton>
        </div>
        <div className="w-2/5 flex items-center align-center">
          <div className="w-3/4">
            <LandingImage height="100%" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
