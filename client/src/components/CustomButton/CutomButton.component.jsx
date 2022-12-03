import React from "react";
import { styled, Button } from "@mui/material";

const CustomButtonContainer = styled(Button)(() => ({
  width: "fit-content",
  height: "fit-content",
  padding: "5px 40px",
  //   backgroundColor: "rgba(255, 255, 255, 0.54)",
  backgroundColor: "#141C2A",
  borderRadius: "7px",
  color: "#FC5252",
  fontSize: "1.1em",
  border: "2px solid #141C2A",
  

  "&:hover": {
    backgroundColor: "#141C2A",
    border: "2px solid #FC5252",
  },
}));

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
