import React from "react";
import { Icon } from "@iconify/react";

const BookOverview = ({ book, idx }) => {
  return (
    <div className="w-full h-24 bg-background p-2 rounded-lg flex gap-3 hover:scale-105 transition-all ease-in-out duration-100 hover:-translate-y-1">
      <img
        src={book.cover}
        className="w-1/5 h-full object-cover rounded-md"
        alt=""
      />
      <div className="w-4/5 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-semibold text-white">#{idx} {book.name}</h1>
          <h1 className="text-sm text-text1">- by {book.author}</h1>
        </div>
        <h1 className="text-lg text-secondary flex items-center">
          {book.price} <Icon icon="mdi:ethereum" />
        </h1>
      </div>
    </div>
  );
};

export default BookOverview;