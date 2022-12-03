import pkg from "moralis";
const dp = pkg;
const Moralis = dp.default;
import Book from "../models/book.model.js";
import mongoose from "mongoose";
import fs from "fs";
export const fileUploadController = async (req, res) => {
  const { title, description, DBCoins, Ether, author, genre, pageCount } =
    req.body;
  const { filename } = req.file;
  try {
    const abi = [
      {
        path: `./uploads/${filename}`,
        content: fs.readFileSync(`./uploads/${filename}`, {
          encoding: "base64",
        }),
      },
    ];

    await Moralis.start({
      apiKey: process.env.MORALIS_IPFS_KEY,
    });

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
      abi,
    });

    if (response) {
      const newBook = new Book({
        title,
        description,
        price: {
          Ether,
          DBCoins,
        },
        pageCount,
        author: mongoose.Types.ObjectId(author),
        genre,
        ipfsURL: response?.toJSON()[0].path,
      });

      const saved = await newBook.save();
      if (saved)
        res
          .status(200)
          .send({
            message: "Uploaded to IPFS",
            URL: response?.toJSON()[0].path,
          });
      else res.status(400).send({ message: "Something Went Wrong" });
    } else res.status(400).send({ message: "Something Went Wrong" });
  } catch (error) {
    console.log(error);
  }
};


