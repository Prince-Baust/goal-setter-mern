const asyncHandler = require('express-async-handler');

// @desc      Get goals
// @route     Get /api/goals
// @access    Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get Goals'})
})

// @desc      Set goals
// @route     POST /api/goals
// @access    Private
const setGoals = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Why not add a text field')
  }
  res.status(200).json({message: 'Set Goals'})
})

// @desc      Update goals
// @route     PUT /api/goals/:id
// @access    Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc      Delete goals
// @route     DELETE /api/goals/:id
// @access    Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}