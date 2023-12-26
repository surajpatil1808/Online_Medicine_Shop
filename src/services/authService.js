// // authService.js

// import axios from 'axios';
// import { API_BASE_URL } from '../components/constants';

// // Function to handle user login
// export const login = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/api/users/login`, credentials);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Function to handle user registration
// export const register = async (userData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/api/users/registration`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Function to handle user logout
// export const logout = () => {
//   // Implementation code for logout functionality
//   // You can clear user session, tokens, or perform any necessary cleanup
// };

