// src/axiosConfig.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000/api';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
