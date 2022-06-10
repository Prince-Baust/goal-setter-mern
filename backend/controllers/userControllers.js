const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


// @desc      Register new user
// @route     POST /api/users
// @access    Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body;
  // Check whether all data is provided
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('All fields required!');
  }

  // Check if user exists
  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400);
    throw new Error('User Already exist');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data!');
  }
})


// @desc      Authenticate a user
// @route     POST /api/users/login
// @access    Public
const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  // Check whether user exist or not
  const user = await User.findOne({email});

  if (user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error('Invalid Credentials!');
  }
})


// @desc      Get user data
// @route     GET /api/users/me
// @access    Public
const getMe = asyncHandler(async (req, res) => {
  res.json({message: 'Display user data!'});
})


module.exports = {
  registerUser,
  loginUser,
  getMe
}