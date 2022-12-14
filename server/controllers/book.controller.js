import pkg from "moralis";
const dp = pkg;
const Moralis = dp.default;
import Book from '../models/book.model.js';
import mongoose from 'mongoose';
import fs from 'fs';

import User from '../models/user.model.js';
import { client } from '../utils/ipfs-client.js';
import axios from 'axios';

export const fileUploadController = async (req, res) => {
  const { title, description, DBCoins, Ether, author, genre, pageCount } =
    req.body;
<<<<<<< HEAD
=======
  console.log(req.body);
>>>>>>> 198e6867a19fc3010da681586b4b958a8bc73776
  const { filename } = req.file;
  try {
    const abi = [
      {
        path: `./uploads/${filename}`,
        content: fs.readFileSync(`./uploads/${filename}`, {
          encoding: 'base64',
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
<<<<<<< HEAD
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
=======
          DBCoins: parseInt(DBCoins),
          Ether: parseInt(Ether),
        },
        author: mongoose.Types.ObjectId(author),
        genre,
        ipfsURL: response?.toJSON()[0].path,
        pageCount: parseInt(pageCount),
      });

      const saved = await newBook.save();
      if (saved) {
        res.status(200).send({
          message: 'Uploaded to IPFS',
          URL: response?.toJSON()[0].path,
        });
      } else res.status(400).send({ message: 'Something Went Wrong' });
    } else res.status(400).send({ message: 'Something Went Wrong' });
>>>>>>> 198e6867a19fc3010da681586b4b958a8bc73776
  } catch (error) {
    console.log(error);
  }
};

export const updateBookPage = async (req, res) => {
  const { totalCounter, bookId, userId } = req.body;
  const user = await User.findById(userId).populate('booksRead.bookId');
  var amount = 0;
  let found = false;
  user.booksRead.forEach(async (books) => {
    if (books.bookId._id == bookId) {
      found = true;
      const currBookData = books;
      if (currBookData.maxPage < totalCounter) {
        books.maxPage = totalCounter;
        const prev = books.pagesReadThisWeek;
        books.pagesReadThisWeek = prev + counter;
        amount = books.bookId.price.DBCoins;
      }
    }
    //@TO-DO handle if book is not present
  });
  if (!found) {
    user.booksRead.push({
      bookId,
      maxPage: counter,
      pagesReadThisWeek: counter,
    });
  }
  user.tokens -= amount;
  user.save();
  res
    .status(200)
    .send({ ok: true, msg: 'user udated successfully', data: user });
};


export const getBookFromIPFS = async (req, res) => {
  const { ipfsLink } = req.body;
  const response = await axios.get(ipfsLink, { responseType: 'arraybuffer' });
  res.send({ buffer: response.data });
  // fs.appendFileSync('./out/file.pdf', Buffer.from(response.data));
};

export const getAllBooks = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

export const getBookData = async (req, res) => {
  const { ID } = req.params;
  try {
    const data = await Book.findOne({ _id: ID });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> 198e6867a19fc3010da681586b4b958a8bc73776
