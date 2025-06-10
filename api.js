// api.js @rycoe
// This file contains functions to interact with the backend API for user authentication
import axios from "axios";

const BASE_URL = "http://10.232.176.230:8080/api/users"; // using my laptops IPv4 address @rycoe

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    return error.response?.data || "Signup error";
  }
}; // Function to handle user registration

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    return error.response?.data || "Login error";
  }
}; // Function to handle user login
