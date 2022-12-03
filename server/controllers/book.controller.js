import pkg from 'moralis';
const dp = pkg;
const Moralis = dp.default;
import Book from '../models/book.model.js';
import mongoose from 'mongoose';
import fs from "fs"
import {client} from '../utils/ipfs-client.js'
import axios from "axios"

export const fileUploadController = async (req, res) => {
    const {title,description,DBCoins,Ether,author,genre,pageCount} = req.body;
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

    if (response){
        const newBook = new Book({
            title,
            description,
            price:{
                Ether,
                DBCoins
            },
            pageCount,
            author:mongoose.Types.ObjectId(author),
            genre,
            ipfsURL:response?.toJSON()[0].path})

        const saved = await newBook.save();
        if(saved)  res.status(200).send({ message: "Uploaded to IPFS", URL: response?.toJSON()[0].path });
        else res.status(400).send({message:"Something Went Wrong"});
    }
    else res.status(400).send({message:"Something Went Wrong"});

  } catch (error) {
    console.log(error);
  }
};

export const getBookFromIPFS = async(req,res)=>{
  const {ipfsLink} = req.body;
  const response = await axios.get(ipfsLink, {responseType: "arraybuffer"} )  
  res.send({buffer:response.data})
      // fs.appendFileSync('./out/file.pdf', Buffer.from(response.data));
}

export const getAllBooks = async(req,res)=>{
  try {
    const data = await Book.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
}

export const getBookData = async(req,res)=>{
  const {ID} = req.params
  try {
    const data = await Book.findOne({_id:ID});
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
}