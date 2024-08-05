import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./../src/utils/axiosInstance";

export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: IRating;
}

export interface Item extends AxiosRequestConfig {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface IRating {
  readonly rate?: number;
  readonly count?: number;
}

const fetchProductsData = async (): Promise<IProduct[]> => {
  const response = await axiosInstance.get("products");
  return response.data;
};

export const useProducts = () => {
  return useQuery<IProduct[]>({ queryKey: ["products"], queryFn: fetchProductsData });
};

export default fetchProductsData;
