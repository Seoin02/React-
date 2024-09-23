import useProducts from "@/api/fetchProductsData";

import BreadCrumb from "../components/common/Breadcrumb";
import ProductDetail from "../components/products/ProductDetail";

const Product = (): JSX.Element => {
  const { data: productListData } = useProducts();

  const productId = Number(window.location.pathname.split("/")[2]);
  const selectedProduct = productListData?.find((product) => product.id === productId || null);

  return selectedProduct !== null ? (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={selectedProduct?.category} crumb={selectedProduct?.title} />
      <ProductDetail product={selectedProduct} />
    </section>
  ) : (
    <div></div>
  );
};

export default Product;
