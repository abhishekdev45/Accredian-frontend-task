// src/axiosConfig.js
import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
