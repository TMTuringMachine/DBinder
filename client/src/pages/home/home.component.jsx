import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import BookOverview from '../../components/BookOverview/BookOverview.component';
import BookPreview from '../../components/BookPreview/BookPreview.component';
import CustomButton from '../../components/CustomButton/CutomButton.component';
import { CustomTextField } from '../../globals/global.styles';
import { BookContractContext } from '../../context/BookContractFunctions';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
const book = {
  name: 'The Alchemist',
  author: 'Paulo Coelho',
  reads: 453,
  cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
  price: 0.003,
};
const covers = [
  'https://dhjhkxawhe8q4.cloudfront.net/penguinteen-wp/wp-content/uploads/2021/12/17145445/TJPowar_ONLINE.jpg',
  'https://designimages.appypie.com/bookcover/bookcover-60-advertisement-poster.jpg',
  'https://miblart.com/wp-content/uploads/2020/12/Rune-Stone-768x1149.jpeg',
  'https://i0.wp.com/www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg?ssl=1',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457',
  'https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg',
];
const Home = () => {
  // const { currAccount, addCID, getCIDOfAuthor } =
  //   useContext(BookContractContext);
  // useEffect(() => {
  //   // addCID('0xdbfE8915E02863c93D1C8586b1f61a7C707c3f08', 'vv');
  //   getCIDOfAuthor('0xdbfE8915E02863c93D1C8586b1f61a7C707c3f08');
  // }, []);
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axiosInstance.get('/book/getAll');
      console.log(res);
      setBooks(res.data);
    })();
  }, []);

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      navigate(`/book/${book._id}`);
    }
  }
  return (
    <div className="w-screen h-screen overflow-y-auto flex gap-8">
      <div className="w-2/3">
        <div className="w-full h-fit bg-background2 rounded-lg p-3 px-5 flex flex-col gap-6">
          <h1 className="text-2xl font-medium text-text1">
            Search among a collection of thousands of quality books!
          </h1>
          <CustomTextField
            label="Search books by name, author name, genres and more !"
            fullWidth
          />
          <CustomButton style={{ padding: '2px 25px', fontSize: '0.9em' }}>
            SEARCH
          </CustomButton>
        </div>
        <div className="mt-5">
          <h1 className="text-white text-2xl font-medium mb-3">
            Books for you
          </h1>
          <Grid container spacing={4}>
            {books.map((item) => {
              const random = Math.floor(Math.random() * covers.length);
              console.log(covers[random]);
              return (
                <Grid
                  onClick={() => navigate(`/reader/books/${item._id}`)}
                  item
                  md={3}
                >
                  <BookPreview image={covers[random]} book={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <div className="w-1/4">
        <div className="w-full p-3 px-5 h-fit bg-background2 rounded-lg">
          <h1 className="text-2xl text-text1 mb-3">This week's top 10</h1>
          <div className="flex flex-col gap-4">
            {books.map((item, idx) => {
              const random = Math.floor(Math.random() * covers.length);
              console.log(covers[random]);
              return (
                <BookOverview
                  book={item}
                  image={covers[random]}
                  idx={idx + 1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
