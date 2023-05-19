import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import ListBookModal from '../ListBookModal/ListBookModal';
import { setSession } from '../../utils/jwt';
import { logoutSuccess } from '../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography, Popover, Box, Avatar } from '@mui/material';

const WriterHeader = () => {
  const [showListBookModal, setShowListBookModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleListBookModal = () => {
    setShowListBookModal(!showListBookModal);
  };
  const handleLogout = () => {
    setSession(null);
    dispatch(logoutSuccess());
    navigate('/');
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
        <button
          className="h-fit w-fit text-background flex gap-4 items-center px-5 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          onClick={toggleListBookModal}
        >
          <Icon
            icon="material-symbols:add-circle-outline"
            className="w-6 h-6"
          />
          <h1 className="text-md font-semibold"> LIST NEW BOOK</h1>
        </button>
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
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            marginTop: '20px',
            marginRight: '50px',
            '& .MuiPopover-paper': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <div className="w-80 h-fit flex flex-col gap-2 bg-background rounded-xl shadow-md p-2">
            <div className="flex gap-4 items-center bg-background3 p-2 rounded-lg">
              <Avatar />
              <h1 className="text-white font-medium">Aryan Shinde</h1>
            </div>
            <div className="bg-background3 p-2 rounded-lg flex flex-col gap-2 items-center">
              <div className="w-full flex items-center gap-3">
                <Icon
                  icon="ri:copper-coin-fill"
                  className="w-8 h-8"
                  color="#00FFED"
                />{' '}
                <h1 className="text-white font-semibold text-lg">
                  233 <span className="font-normal text-sm">debi tokens</span>
                </h1>
              </div>
              <div className="border-t-2 border-text1 w-full flex gap-2 justify-around pt-3">
                <div className="text-[#FFD700] text-sm cursor-pointer flex items-center">
                  <Icon
                    icon="material-symbols:attach-money"
                    color="#FFD700"
                    className="w-5 h-5"
                  />{' '}
                  BUY TOKENS
                </div>
                <div className="text-text1 text-sm cursor-pointer flex items-cente gap-1">
                  <Icon icon="ph:wallet-fill" className="w-5 h-5" />
                  VIEW BALANCE
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-background3 p-2 rounded-lg cursor-pointer">
              <Icon
                icon="material-symbols:settings-rounded"
                className="h-6 w-6"
                color="#fff"
              />
              <h1 className="text-white font-medium">User Settings</h1>
            </div>
            <button
              className="flex gap-4 items-center bg-background3 p-2 rounded-lg cursor-pointer"
              onClick={handleLogout}
            >
              <Icon
                icon="ri:logout-circle-line"
                className="h-6 w-6"
                color="#fff"
              />
              <h1 className="text-white font-medium">Logout</h1>
            </button>
          </div>
        </Popover>
      </div>
      <ListBookModal
        state={showListBookModal}
        toggleModal={toggleListBookModal}
      />
    </div>
  );
};

export default WriterHeader;
