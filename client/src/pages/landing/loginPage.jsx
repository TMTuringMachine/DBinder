import { TextField, styled } from "@mui/material";
import React, { useState } from "react";
import StyledButton from "../../components/CustomButton/StyledButton";
import axios from "../../utils/axiosInstance";

const CustomTextField = styled(TextField)(() => ({
    "& label.Mui-focused": {
      color: "rgba(255, 255, 255, 0.685)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(255, 255, 255, 0.685)",
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.685)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.685)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.685)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(255, 255, 255, 0.685)",
      },
    },
  }));

const LoginPage = ({ setMode }) => {
  const [role, setRole] = useState("");
  const [email,setEmail] = useState();

  const handleLogin = async()=>{
    const data = {
      email
    }
    const response = await axios.post('/auth/login',data);
    console.log(response)
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
