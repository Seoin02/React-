import { axiosInstance } from "@/utils/axiosInstance";
import { useSuspenseQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

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

const useProducts = () => {
  return useSuspenseQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProductsData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export default useProducts;
