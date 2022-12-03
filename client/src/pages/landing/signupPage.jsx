import { TextField, styled } from "@mui/material";
import React, { useState } from "react";
import StyledButton from "../../components/CustomButton/StyledButton";
import axios from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { CustomTextField } from "../../globals/global.styles.jsx";
import { useSnackbar } from "notistack";

const SignupPage = ({ setMode }) => {
  const [role, setRole] = useState(null);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    role === "Author" ? (data.author = true) : (data.author = false);
    try {
      console.log(data);
      const response = await axios.post("/auth/signup", data);
      console.log(response);
      localStorage.setItem("Token", response?.data?.data._id);
      navigate(`/verify/${response?.data?.data._id}`);
    } catch (err) {
      console.log(err);
      if (err?.response.data.ok) {
        enqueueSnackbar(err?.response?.data?.msg || "Someting went wring!", {
          variant: "error",
        });
      }
    }
  };

  return (
    <div className="px-10 mt-8 flex flex-col items-center">
      <div className="bg-backgroundT flex flex-col gap-5 items-center p-6 w-2/4 mt-6 h-fit rounded-lg">
        <h1 className="font-semibold text-3xl text-text1">
          Join as a writer or a reader !
        </h1>
        <div className="flex gap-4 w-full">
          <button
            className={`${
              role === "Author"
                ? "bg-secondary text-background color-white"
                : ""
            }flex-1 h-fit py-2 px-2 flex gap-2 items-center rounded-md group text-text1 border-2 border-color4 cursor-pointer`}
            onClick={() => {
              setRole("Author");
            }}
          >
            <div className="w-4 h-4 rounded-full border-2 border-color4 group-hover:bg-background"></div>
            I LIKE TO WRITE
          </button>
          <button
            className={`${
              role === "Reader"
                ? "bg-secondary text-background color-white"
                : ""
            }flex-1 h-fit py-2 px-2 flex gap-2 items-center rounded-md group text-text1 border-2 border-color4 cursor-pointer`}
            onClick={() => {
              setRole("Reader");
            }}
          >
            <div className="w-4 h-4 rounded-full border-2 border-color4 group-hover:bg-background"></div>
            I LIKE TO READ
          </button>
        </div>
        <CustomTextField
          onChange={(e) => handleChange(e)}
          label="Name"
          name="name"
          fullWidth
        />
        <CustomTextField
          onChange={(e) => handleChange(e)}
          label="Email"
          name="email"
          type={"email"}
          fullWidth
        />
        <div className="flex gap-5 w-full">
          <CustomTextField
            onChange={(e) => handleChange(e)}
            label="Phone"
            name="phone"
            fullWidth
          />
        </div>
        <StyledButton onClick={() => handleSignup()}>SIGN UP</StyledButton>
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
