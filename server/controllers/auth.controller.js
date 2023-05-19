// import handleAsync from '../utils/handleAsync.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
// import ExpressError from '../utils/ExpressError.js';
import Token from '../models/token.model.js';
import sendMail from '../mailTransport/index.js';
import generateOTP from '../utils/generateOtp.js';

const createInitialUser = async (req, res) => {
  const { name, email, phone } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    return res
      .status(400)
      .send({ message: 'User with this email already exist' });
  }

  const user = new User({
    name,
    email,
    phone,
  });
  await user.save();

  const otp = generateOTP(6);

  const token = new Token({
    userId: user._id,
    token: otp,
  });

  await token.save();

  return res.status(200).send({ message: 'Account created successfully!' });
};

export const login = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    res.status(402).send({ ok: false, msg: "user doesn't exists" });
    return;
  }
  const otp = generateOTP(4);
  const newToken = await Token.create({
    userId: user._id,
    token: otp,
  });
  sendMail(
    'DBinder',
    'teamturingmachine@gmail.com',
    email,
    'Welcome Back To DBinder!',
    `<h1>This is your OTP ${otp}</h1>`,
    'simple text'
  );
  res.status(200).send({ ok: true, msg: 'otp sent successfully', data: user });
};

export const signup = async (req, res) => {
  const { name, email, phone, author } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(402).send({ ok: false, msg: 'user already exists' });
      return;
    }

    const user = await User.create({
      name,
      email,
      isVerified: false,
      isAuthor: author,
      phone,
    });

    const otp = generateOTP(4);
    const newToken = await Token.create({
      userId: user._id,
      token: otp,
    });
    sendMail(
      'DBinder',
      'teamturingmachine@gmail.com',
      email,
      'Welcome to DBinder!',
      `<h1>This is your OTP ${otp}</h1>`,
      'simple text'
    );
    res
      .status(200)
      .send({ ok: true, msg: 'OTP Sent Successfully', data: user });
  } catch (e) {
    console.log(e);
    res.status(400).send({ ok: false, msg: 'some error occurred' });
  }
};

export const validateOTP = async (req, res) => {
  const userId = req.params.id;
  const { otp } = req.body;
  try {
    const validOTP = await Token.findOne({
      userId,
      token: otp,
    });
    console.log(validOTP, 'jejejejejeje');
    if (!validOTP) {
      res.send({ ok: false, msg: 'OTP Invalid' });
      return;
    }

    const user = await User.findById(userId);
    user.isVerified = true;
    await user.save();
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: '1000m',
      }
    );
    return res
      .status(200)
      .json({ message: 'Login / Signup Successfull!', token, user });
  } catch (e) {
    console.log(e);
    res.status(400).send({ ok: false, msg: 'some error occurred' });
  }
};

export const jwtVerify = async (req, res) => {
  const token = req.headers.authorization;
  console.log(`token: ${token}`);
  if (!token) {
    return res.status(400).send({ message: 'Invalid Token' });
  }

  const decodeToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  if (decodeToken) {
    const user = await User.findById(decodeToken._id);
    //   .populate("rentals")
    return res.send({ message: 'User Validated', user });
  }
  res.status(400).send({ message: 'Invalid Token' });
};
