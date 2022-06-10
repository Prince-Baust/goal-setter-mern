// @desc      Register new user
// @route     POST /api/users
// @access    Public
const registerUser = (req, res) => {
  res.json({message: 'Register a user!'});
}


// @desc      Authenticate a user
// @route     POST /api/users/login
// @access    Public
const loginUser = (req, res) => {
  res.json({message: 'Login a user!'});
}


// @desc      Get user data
// @route     GET /api/users/me
// @access    Public
const getMe = (req, res) => {
  res.json({message: 'Display user data!'});
}


module.exports = {
  registerUser,
  loginUser,
  getMe
}