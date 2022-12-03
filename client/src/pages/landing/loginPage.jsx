import { TextField, styled } from "@mui/material";
import React, { useState } from "react";
import StyledButton from "../../components/CustomButton/StyledButton";
import axios from "../../utils/axiosInstance";

import { CustomTextField } from "../../globals/global.styles";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setMode }) => {
  const [role, setRole] = useState("");
  const [email,setEmail] = useState();
  const navigate = useNavigate()

  const handleLogin = async()=>{
    const data = {
      email
    }
    const response = await axios.post('/auth/login',data);
    localStorage.setItem("Token", response?.data?.data._id);
    navigate(`/verify/${response?.data?.data._id}`);
  }

  return (
    <div className="px-10 mt-8 flex flex-col items-center">
      <div className="bg-backgroundT flex flex-col gap-5 items-center p-6 w-2/4 mt-6 h-fit rounded-lg">
        <h1 className="font-semibold text-3xl text-text1">
          Welcome back ! Login to your debinder account
        </h1>
        <CustomTextField onChange={(e)=>setEmail(e.target.value)} label="Email" name="email" fullWidth />

        <StyledButton onClick={()=>handleLogin()} >LOG IN</StyledButton>
        <div className="text-text1">
          New to debinder?{" "}
          <button
            className="text-secondary"
            onClick={() => {
              setMode("signup");
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
