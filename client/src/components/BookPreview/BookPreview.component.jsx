import React from "react";

const BookPreview = ({ book }) => {
  return (
    <div className="w-full h-80 flex flex-col gap-1 cursor-pointer">
      <div className="w-full h-4/5 group overflow-hidden rounded-lg" >
        <img
          src={book.cover}
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-200 ease-in-out"
          alt=""
        />
      </div>
      <div className="w-full h-1/5">
        <h1 className="text-lg font-semibold text-white">{book.name}</h1>
        <h1 className="text-sm font-medium text-text1">- by {book.author}</h1>
      </div>
    </div>
  );
};

export default BookPreview;
