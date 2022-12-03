import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ListBookModal from "../ListBookModal/ListBookModal";

const WriterHeader = () => {
  const [showListBookModal, setShowListBookModal] = useState(false);

  const toggleListBookModal = () => {
    setShowListBookModal(!showListBookModal);
  };

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
        />
      </div>
      <ListBookModal
        state={showListBookModal}
        toggleModal={toggleListBookModal}
      />
    </div>
  );
};

export default WriterHeader;
