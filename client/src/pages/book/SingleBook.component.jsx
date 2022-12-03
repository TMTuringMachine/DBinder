import React from "react";
import { Icon } from "@iconify/react";
import StyledButton from "../../components/CustomButton/StyledButton";
import { Avatar } from "@mui/material";

const book = {
  name: "The Alchemist",
  author: "Paulo Coelho",
  reads: 453,
  cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  price: 0.003,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
};

const SingleBook = () => {
  return (
    <div className="w-full flex gap-8">
      <div className="w-1/4">
        <img src={book.cover} alt="" className="w-full h-[80vh] rounded-xl" />
        <div className="w-full bg-background3 h-fit rounded-xl mt-8 p-3">
          <h1 className="text-xl text-white font-semibold">About Author</h1>
          <div className="text-text1 text-lg mt-2">
            <h1>14 books published</h1>
            <h1>334 overall read </h1>
            <h1>#34 debinder rank</h1>
          </div>
        </div>
        <div className="w-full bg-background3 h-fit rounded-xl mt-8 p-3 flex gap-2 align-baseline">
          <h1 className="text-2xl font-semibold text-secondary" >45th <span className="font-normal text-lg text-text1" >dbinder ranking</span></h1>
        </div>
      </div>
      <div className="w-3/4">
        <h1 className="text-4xl text-white font-bold ">{book.name}</h1>
        <h1 className="text-xl text-text1">- by {book.author}</h1>
        <h1 className="text-lg text-text1 mt-8 bg-background3 p-3 rounded-xl">
          {book.description}
        </h1>
        <div className="w-fit h-fit py-1 px-5 border-primary border-2 rounded-full text-primary mt-3 ">
          Adventure
        </div>
        <h1 className="text-2xl mt-5 text-text1 flex items-center gap-2 mb-8">
          {" "}
          <Icon
            icon="ri:copper-coin-fill"
            className="w-8 h-8"
            color="#00FFED"
          />
          <div>
            <span className="text-secondary">450</span> debi tokens{" "}
            <span className="text-sm">(5 tokens per page)</span>
          </div>
        </h1>
        <StyledButton
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Icon icon="material-symbols:play-circle" />
          START READING{" "}
        </StyledButton>
        <div className="w-3/4 h-fit bg-background3 mt-8 p-3 text-white rounded-xl">
          <h1 className="text-lg font-medium">Reviews</h1>
          <div className="w-full flex flex-col gap-1">
            {[...Array(5)].map((item) => (
              <div className="w-full bg-background rounded-xl mt-4 p-3 flex gap-3">
                <Avatar />
                <div>
                  <h1 className="text-sm font-semibold">Aryan Shinde</h1>
                  <h1 className="text-xs text-text1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
