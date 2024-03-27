import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "X-Api-Key": process.env.REACT_APP_API_KEY,
  },
});

export default api;
