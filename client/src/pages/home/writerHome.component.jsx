import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BookOverview from '../../components/BookOverview/BookOverview.component';
import BookPreview from '../../components/BookPreview/BookPreview.component';
import CustomButton from '../../components/CustomButton/CutomButton.component';
import { CustomTextField } from '../../globals/global.styles';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';

const Home = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const [authorBooks, setAuthorBooks] = useState([]);

  const id = user._id;
  const fetchBookOfAuthor = async () => {
    const data = await axiosInstance.get(`/book/getBooksOfAuthor/${id}`);
    setAuthorBooks(data.data);
    console.log(data, 'datttta');
  };

  const covers = [
    'https://dhjhkxawhe8q4.cloudfront.net/penguinteen-wp/wp-content/uploads/2021/12/17145445/TJPowar_ONLINE.jpg',
    'https://designimages.appypie.com/bookcover/bookcover-60-advertisement-poster.jpg',
    'https://miblart.com/wp-content/uploads/2020/12/Rune-Stone-768x1149.jpeg',
    'https://i0.wp.com/www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg?ssl=1',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457',
    'https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg',
  ];
  useEffect(() => {
    fetchBookOfAuthor();
  }, []);
  return (
    <div className="w-screen h-screen overflow-y-auto flex gap-8 cursor-pointer flex-col">
      <div className="flex gap-12">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit h-fit p-1 rounded-xl">
          <div className="w-72 h-fit bg-background rounded-xl text-white flex gap-2 items-center p-5">
            <Icon icon="ph:books-bold" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold">
              {authorBooks.length || 0} <span className="text-lg">Books</span>
            </h1>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit h-fit p-1 rounded-xl">
          <div className="w-72 h-fit bg-background rounded-xl text-white flex gap-2 items-center p-5">
            <Icon
              icon="material-symbols:chrome-reader-mode"
              className="w-12 h-12"
            />
            <h1 className="text-3xl font-semibold">
              890 <span className="text-lg">Reads</span>
            </h1>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit h-fit p-1 rounded-xl">
          <div className="w-72 h-fit bg-background rounded-xl text-white flex gap-2 items-center p-5">
            <Icon icon="tabler:coin-rupee" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold">
              45.7K <span className="text-lg">Earned</span>
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-white text-2xl font-bold">Books By you!</h1>

      <div className="flex w-5/6 flex-wrap">
        {authorBooks.map((book) => {
          const random = Math.floor(Math.random() * covers.length);
          return <BookPreview book={book} image={covers[random]} />;
        })}
      </div>
    </div>
  );
};

export default Home;
