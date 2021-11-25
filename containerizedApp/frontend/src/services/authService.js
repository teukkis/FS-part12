import axios from 'axios'

const PORT = process.env.REACT_APP_PORT
const BASE_URL = process.env.REACT_APP_BASE_URL
const API_VERSION = process.env.REACT_APP_API_VERSION
const URL = `${BASE_URL}:${PORT}/${API_VERSION}/account`

// Register a new user
export const register = async ( user ) => {
  const response = await axios.post(
    `${URL}/register`, user
  )
  return response.data
}

// Login a user
export const login = async ( user ) => {
  const response = await axios.post(
    `${URL}/login`, user
  )
  window.localStorage.setItem('currentUser', JSON.stringify(response.data))
  return response.data
}