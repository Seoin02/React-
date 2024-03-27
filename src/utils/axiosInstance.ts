import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

const API = {
  get: async (url: string) => {
    const data = await axiosInstance.get(url);
    return data.data;
  },
  post: async <T>(url: string, body: T) => {
    const data = await axiosInstance.post(url, body);
    return data.data;
  },
};

export default API;
