import React from "react";
import { Icon } from '@iconify/react';

const BookPreview = ({ book }) => {
  return (
    <div className="w-full h-80 flex flex-col gap-1 cursor-pointer hover:shadow-2xl rounded-lg ">
      <div className="w-full h-4/5 group overflow-hidden rounded-lg">
        <img
          src={book.cover}
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-200 ease-in-out"
          alt=""
        />
      </div>
      <div className="w-full h-1/5 px-1">
        <h1 className="text-lg font-semibold text-white">{book.name}</h1>
        <div className="flex w-full justify-between">
          <h1 className="text-sm font-medium text-text1">- by {book.author}</h1>
          <div className="flex items-center gap-2 text-text1" >
            340 <Icon icon="mingcute:copper-coin-fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
