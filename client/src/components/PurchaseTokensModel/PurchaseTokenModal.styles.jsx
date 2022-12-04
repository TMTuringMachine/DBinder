import { Box, styled } from "@mui/material";

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "70vw",
  height: "fit-content",
  left: "15vw",
  top: "8vh",
  backgroundColor: "#141C2A",
  borderRadius: "10px",
  color: "#fff",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  gap: "20px",
  [theme.breakpoints.down("lg")]: {
    width: "60vw",
    left: "20vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "80vw",
    left: "10vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
    left: "5vw",
  },
}));
