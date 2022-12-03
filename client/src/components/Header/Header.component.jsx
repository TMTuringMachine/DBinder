import React from "react";
import { Icon } from "@iconify/react";
import { Typography, Popover, Box, Avatar } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="w-full h-16 px-10 flex items-center justify-between">
      <div className="flex items-center gap-24">
        <button
          className="text-xl font-bold text-white"
          onClick={() => {
            // setMode("landing");
          }}
        >
          dbinder
        </button>
        <div className="flex items-center gap-7">
          <div className="text-text1 font-normal">List your book</div>
          <div className="text-text1 font-normal">Bookstore</div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <Icon
          icon="mdi:bell"
          color="#fff"
          //   width="20px"
          //   height="20px"
          className="w-6 h-6 cursor-pointer"
        />
        <Icon
          icon="gg:profile"
          color="#fff"
          //   width="20px"
          //   height="20px"
          className="w-6 h-6 cursor-pointer"
          onClick={handleClick}
          aria-describedby={id}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{
            marginTop: "20px",
            marginRight: "50px",
            "& .MuiPopover-paper": {
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="w-80 h-52 flex flex-col gap-2 bg-background rounded-xl shadow-md p-2">
            <div className="flex gap-4 items-center bg-background3 p-2 rounded-lg">
              <Avatar />
              <h1 className="text-white font-medium">Shivam Gavandi</h1>
            </div>
            <div className="bg-background3 p-2 rounded-lg flex flex-col gap-2 items-center">
              <div className="w-full flex items-center gap-3">
                <Icon
                  icon="ri:copper-coin-fill"
                  className="w-8 h-8"
                  color="#00FFED"
                />{" "}
                <h1 className="text-white font-semibold text-lg">
                  233 <span className="font-normal text-sm">debi tokens</span>
                </h1>
              </div>
              <div className="border-t-2 border-text1 w-full flex gap-2 justify-around pt-3">
                <div className="text-[#FFD700] text-sm cursor-pointer">
                  BUY TOKENS
                </div>
                <div className="text-text1 text-sm cursor-pointer">
                  VIEW BALANCE
                </div>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
