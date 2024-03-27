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

// const productsData = (data: Products) => {
//   const { id, title, price, category, description, image } = data;
//   return {
//     id,
//     title,
//     price,
//     category,
//     description,
//     image,
//     alt: `${title} 이미지`,
//   };
// };

const ItemList = ({ data }: { data: Products }) => {
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
    <>
      {!items.length ? (
        <div></div>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <h2 className="mb-5 lg:mb-8 test-3xl lg:text-4xl text-center font-bold">{item.category}</h2>
            <div>{item.image}</div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))
      )}
    </>
  );
};

export default ItemList;
