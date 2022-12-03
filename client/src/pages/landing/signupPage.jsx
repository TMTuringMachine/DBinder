import { TextField, styled } from "@mui/material";
import React, { useState } from "react";
import StyledButton from "../../components/CustomButton/StyledButton";

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

const SignupPage = ({ setMode }) => {
  const [role, setRole] = useState("");

  return (
    <div className="px-10 mt-8 flex flex-col items-center">
      <div className="bg-backgroundT flex flex-col gap-5 items-center p-6 w-2/4 mt-6 h-fit rounded-lg">
        <h1 className="font-semibold text-3xl text-text1">
          Join as a writer or a reader !
        </h1>
        <div className="flex gap-4 w-full">
          <button
            className="flex-1 h-fit py-2 px-2 flex gap-2 items-center rounded-md group text-text1 border-2 border-color4 hover:bg-secondary cursor-pointer hover:text-background"
            onClick={() => {
              setRole("writer");
            }}
          >
            <div className="w-4 h-4 rounded-full border-2 border-color4 group-hover:bg-background"></div>
            I LIKE TO WRITE
          </button>
          <button
            className="flex-1 h-fit py-2 px-2 flex gap-2 items-center rounded-md group text-text1 border-2 border-color4 hover:bg-secondary cursor-pointer hover:text-background"
            onClick={() => {
              setRole("reader");
            }}
          >
            <div className="w-4 h-4 rounded-full border-2 border-color4 group-hover:bg-background"></div>
            I LIKE TO READ
          </button>
        </div>
        <CustomTextField label="Name" fullWidth />
        <CustomTextField label="Email" fullWidth />
        <div className="flex gap-5 w-full">
          <CustomTextField label="Phone" fullWidth />
          <CustomTextField label="Gender" fullWidth />
        </div>
        <StyledButton>SIGN UP</StyledButton>
        <div className="text-text1">
          New to debinder?{" "}
          <button
            className="text-secondary"
            onClick={() => {
              setMode("login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
