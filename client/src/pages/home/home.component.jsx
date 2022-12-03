import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import BookOverview from '../../components/BookOverview/BookOverview.component';
import BookPreview from '../../components/BookPreview/BookPreview.component';
import CustomButton from '../../components/CustomButton/CutomButton.component';
import { CustomTextField } from '../../globals/global.styles';
import { BookContractContext } from '../../context/BookContractFunctions';
const book = {
  name: 'The Alchemist',
  author: 'Paulo Coelho',
  reads: 453,
  cover: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
  price: 0.003,
};

const Home = () => {
  const { currAccount, addCID, getCIDOfAuthor } =
    useContext(BookContractContext);
  useEffect(() => {
    // addCID('0xdbfE8915E02863c93D1C8586b1f61a7C707c3f08', 'vv');
    getCIDOfAuthor('0xdbfE8915E02863c93D1C8586b1f61a7C707c3f08');
  }, []);
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
            {[...Array(16)].map((item) => (
              <Grid item md={3}>
                <BookPreview book={book} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="w-1/4">
        <div className="w-full p-3 px-5 h-fit bg-background2 rounded-lg">
          <h1 className="text-2xl text-text1 mb-3">This week's top 10</h1>
          <div className="flex flex-col gap-4">
            {[...Array(10)].map((item, idx) => (
              <BookOverview book={book} idx={idx + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
