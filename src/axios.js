import axios from "axios";

const API_URL = "http://localhost:3000"; // Ganti dengan URL server kamu

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
