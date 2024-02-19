const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";
import { getCookie } from "cookies-next";
const userAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

userAxios.interceptors.request.use(
  (config) => {
    const token = JSON.parse(getCookie("token"));
    // console.log("token get", token);
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default userAxios;
