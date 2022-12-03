import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "USER",
  },
  title:{
    type: String,
    required: true,
  },
  ipfsURL:{
    type:String,
    required:true,
  },
  genre:{
    type:String,
    required:true,
  },
  description:{
    type:String,
  },
  price:{
    Ether:{
        type:Number,
    },
    DBCoins:{
        type:Number,
    }
  },
  pageCount:{
    type:Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("BOOK", bookSchema);

export default Book;
