import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
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
        />
      </div>
    </div>
  );
};

export default Header;
