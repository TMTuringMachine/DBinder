import React from "react";
import { styled, Button } from "@mui/material";

const StyledButtonContainer = styled(Button)(({ color }) => ({
  width: "fit-content",
  height: "fit-content",
  padding: "2px 30px",
  backgroundColor: color || "#1DD0E6",
  border: `2px solid ${color || "#1DD0E6"}`,
  borderRadius: "7px",
  color: "#141C2A",
  fontSize: "1em",
  border: `2px solid ${color || "#1DD0E6"}`,
  fontWeight: 600,

  "&:hover": {
    backgroundColor: color || "#1DD0E6",
    border: `2px solid ${color || "#1DD0E6"}`,
  },
}));

const StyledButton = ({ children, color, ...props }) => {
  return (
    <StyledButtonContainer {...props} color={color}>
      {children}
    </StyledButtonContainer>
  );
};

export default StyledButton;
