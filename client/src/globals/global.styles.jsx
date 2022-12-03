import { styled, TextField } from "@mui/material";

export const CustomTextField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "rgba(255, 255, 255, 0.685)",
  },
  "& input": {
    color: "#fff",
  },
  "& textarea": {
    color: "#fff",
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
