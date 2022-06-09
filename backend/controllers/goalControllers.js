// @desc      Get goals
// @route     Get /api/goals
// @access    Private
const getGoals = (req, res) => {
  res.status(200).json({message: 'Get Goals'})
}

// @desc      Set goals
// @route     POST /api/goals
// @access    Private
const setGoals = (req, res) => {
  res.status(200).json({message: 'Set Goals'})
}

// @desc      Update goals
// @route     PUT /api/goals/:id
// @access    Private
const updateGoal = (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc      Delete goals
// @route     DELETE /api/goals/:id
// @access    Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}