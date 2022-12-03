import { Grid } from "@mui/material";
import React from "react";
import BookOverview from "../../components/BookOverview/BookOverview.component";
import BookPreview from "../../components/BookPreview/BookPreview.component";
import CustomButton from "../../components/CustomButton/CutomButton.component";
import { CustomTextField } from "../../globals/global.styles";
import { Icon } from "@iconify/react";

const book = {
  name: "The Alchemist",
  author: "Paulo Coelho",
  reads: 453,
  cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  price: 0.003,
};

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto flex gap-8 cursor-pointer">
      <div className="flex gap-12">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit h-fit p-1 rounded-xl">
          <div className="w-72 h-fit bg-background rounded-xl text-white flex gap-2 items-center p-5">
            <Icon icon="ph:books-bold" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold">
              22 <span className="text-lg">Books</span>
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
            <Icon
              icon="tabler:coin-rupee"
              className="w-12 h-12"
            />
            <h1 className="text-3xl font-semibold">
              45.7K <span className="text-lg">Earned</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
