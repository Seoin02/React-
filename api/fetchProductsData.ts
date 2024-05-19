import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./../src/utils/axiosInstance";

export interface Item extends AxiosRequestConfig {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const fetchProductsData = async () => {
  try {
    const res = await axiosInstance.get("products");
    return res.data;
  } catch (error) {
    throw new Error(`"Error fetching data:", ${error}`);
  }
};

export default fetchProductsData;
