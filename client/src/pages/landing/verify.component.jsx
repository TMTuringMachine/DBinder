import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import BubbleLottie from "../../assets/lotties/bubble.json";
import BubbleLottie1 from "../../assets/lotties/bubble1.json";
import BubbleLottie2 from "../../assets/lotties/bubble2.json";
import BubbleLottie3 from "../../assets/lotties/bubble3.json";

import { ReactComponent as LandingImage } from "../../assets/images/landing.svg";
import { CustomTextField } from "../../globals/global.styles";
import { Box, styled } from "@mui/material";
// import CustomButton from "../../components/CustomButton/CustomButton.component";
import StyledButton from "../../components/CustomButton/StyledButton";
import axios from "../../utils/axiosInstance";
// import LandingPage from "./landingPage";
// import SignupPage from "./signupPage";
// import LoginPage from "./loginPage";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setSession } from "../../utils/jwt";
import { loginSuccess } from "../../redux/slices/auth";

const Glass = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(20px)",
  position: "absolute",
  top: "0px",
}));

const Landing = () => {
  const [mode, setMode] = useState("landing");
  const [otp, setOTP] = useState();
  let { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleVerify = async () => {
    const data = {
      otp,
    };
    const response = await axios.post(`/auth/validateOTP/${id}`, data);
    console.log(response);
    if (response.status == 200 && response.data.ok == false) {
      enqueueSnackbar(response.data?.msg || "Something went wrong!", {
        variant: "error",
      });
      return;
    }
    if (response.data.ok) {
      enqueueSnackbar("OTP validated successfully!");
      setSession(response.data.token);
      dispatch(loginSuccess({ user: response.data.user }));
      if (response.data.user?.isAuthor) {
        navigate("/writer/home");
      } else {
        navigate("/reader/home");
      }
    }
  };

  //   let content;

  //   if (mode == "landing") {
  //     content = <LandingPage setMode={setMode} />;
  //   } else if (mode == "signup") {
  //     content = <SignupPage setMode={setMode} />;
  //   } else if (mode == "login") {
  //     content = <LoginPage setMode={setMode} />;
  //   }

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: BubbleLottie1,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: BubbleLottie2,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: BubbleLottie3,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
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
                setMode("landing");
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
                setMode("login");
              }}
            >
              Login
            </button>
            <button
              className="text-text1 font-semibold"
              onClick={() => {
                setMode("signup");
              }}
            >
              Signup
            </button>
          </div>
        </div>
        <div className="px-10 mt-8 flex flex-col items-center">
          <div className="bg-backgroundT flex flex-col gap-5 items-center p-6 w-2/5 mt-6 h-fit rounded-lg">
            <h1 className="font-semibold text-2xl text-text1">
              Please enter the OTP sent to your email to verify yourself!
            </h1>
            <CustomTextField
              onChange={(e) => setOTP(e.target.value)}
              label="Enter OTP"
              name="otp"
              fullWidth
            />

            <StyledButton onClick={() => handleVerify()}>VERIFY</StyledButton>
            {/* <div className="text-text1">
              New to debinder?{" "}
              <button
                className="text-secondary"
                onClick={() => {
                  setMode("signup");
                }}
              >
                Signup
              </button>
            </div> */}
          </div>
        </div>
      </Glass>
    </>
  );
};

export default Landing;
