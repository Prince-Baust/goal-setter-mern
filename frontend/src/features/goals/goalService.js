import axios from "axios";

const API_URL = '/api/goals/';

//Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = axios.post(API_URL, goalData, config);

  return response.data;

}

//Get User Goals

const getGoals = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config);

  return response.data;
}

//Delete Goal
const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + id, config)
}


const goalService = {
  createGoal,
  getGoals,
  deleteGoal
}

export default goalService