import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAuthor: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
  },
  phone: {
    type: String,
  },
  tokens: {
    type: Number,
  },
  booksRead: [
    {
      bookId: {
        type: mongoose.Types.ObjectId,
      },
      maxPage: {
        type: Number,
      },
      pagesReadThisWeek: {
        type: Number,
      },
    },
  ],
});

const User = mongoose.model('USER', UserSchema);

export default User;
