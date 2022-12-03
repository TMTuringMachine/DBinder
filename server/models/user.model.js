import mongoose from "mongoose";

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
    default:false
  },
  gender: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const User = mongoose.model("USER", UserSchema);

export default User;
