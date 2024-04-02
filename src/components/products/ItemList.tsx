import React, { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import fetchProductsData from "../../../api/fetchProductsData";

export interface Products extends AxiosRequestConfig {
  id?: number;
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
}

const ItemList = ({
  data,
  categoryName,
  filterItem,
}: {
  data?: Products;
  categoryName: string;
  filterItem?: (index: number) => boolean;
}) => {
  const [items, setItems] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsData({});
        setItems(data);
      } catch (error) {
        throw new Error(`"Error fetching data:", ${error}`);
      }
    };
    fetchData();
  }, []);
  console.log(items);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {!items.length ? (
        <div></div>
      ) : (
        items
          .filter((item, index) => item.category?.includes(categoryName) || (filterItem && filterItem(index)))
          .map((item) => (
            <a
              key={item.id}
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            >
              <figure className="flex flex-col h-80 bg-white overflow-hidden">
                <img className="transition-transform duration-300 w-28" src={item.image} alt="상품 이미지" />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <div className="card-title text-base">{item.title}</div>
                <div className="text-base">${item.price}</div>
              </div>
            </a>
          ))
      )}
    </div>
  );
};

export default ItemList;
