import React, { useEffect, useState } from "react";
import { IProduct } from "../../store/products";

const ProductDetail = ({ product }): JSX.Element => {
  return (
    <>
      {!product ? (
        <div></div>
      ) : (
        <div key={product.id}>
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img className="object-contain w-full h-72" src={product.image} alt={product.title} />
            </figure>
          </div>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {product.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p className="">{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
