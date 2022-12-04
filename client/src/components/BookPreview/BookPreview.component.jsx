import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
const BookPreview = ({ book, image }) => {
  const navigate = useNavigate();
  return (
    <button
      className="w-full h-80 flex flex-col gap-1 cursor-pointer hover:shadow-2xl rounded-lg "
      onClick={() => {
        navigate("/reader/books/rselfkmwleks");
      }}
    >
      <div className="w-full h-4/5 group overflow-hidden rounded-lg">
        <img
          src={image}
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-200 ease-in-out"
          alt=""
        />
      </div>
      <div className="w-full h-1/5 px-1">
        <h1 className="text-lg font-semibold text-white">{book.title}</h1>
        <div className="flex w-full justify-between">
          <h1 className="text-sm font-medium text-text1 w-5 text-truncate">
            - by {book.author}
          </h1>
          <div className="flex items-center gap-2 text-text1">
            {book.price.Ether + ' (' + book.price.DBCoins + ' DB coins)'}{' '}
            <Icon icon="mingcute:copper-coin-fill" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default BookPreview;
