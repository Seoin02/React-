import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/common/Breadcrumb";
import Rating from "../components/common/Rating";
import ProductDetail from "../components/products/ProductDetail";
import { IProduct, productsList } from "../store/products";
import { useRecoilValue } from "recoil";

const Product = (): JSX.Element => {
  const productListData = useRecoilValue(productsList);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  useEffect(() => {
    const productId = Number(window.location.pathname.split("/")[2]);
    const selectedProduct = productListData.find((product) => product.id === productId);
    setSelectedProduct(selectedProduct || null);
  }, [productListData]);
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={selectedProduct?.category} crumb={selectedProduct?.title} />
      <ProductDetail product={selectedProduct} />
      <Rating rate={selectedProduct?.rating.rate} count={selectedProduct?.rating.count} />
      <p className="mt-2 mb-4 text-3xl">$ {selectedProduct?.price}</p>
      <div className="card-actions">
        <button className="btn btn-primary">장바구니에 담기</button>
        <a className="btn btn-outline ml-1" href="/carts">
          장바구니로 이동
        </a>
      </div>
    </section>
  );
};

export default Product;
