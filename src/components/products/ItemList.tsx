import React from "react";
import { AxiosInstance } from "axios";

interface Products {
  id?: number;
  title?: string;
  price?: string;
  category?: string;
  description?: string;
  image?: string;
}

const productsData = (data: Products) => {
  const { id, title, price, category, description, image } = data;
  return {
    id,
    title,
    price,
    category,
    description,
    image,
    alt: `${title} 이미지`,
  };
};

const ItemList = (productsData: Products) => {
  return (
    <div>
      <div>{productsData.category}</div>
      <div>{productsData.image}</div>
      <div>{productsData.title}</div>
      <div>{productsData.price}</div>
    </div>
  );
};

export default ItemList;
