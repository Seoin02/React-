import { Products } from "./../src/components/products/ItemList";
import { axiosInstance } from "./../src/utils/axiosInstance";

const fetchProductsData = async (productsData: Products) => {
  try {
    const res = await axiosInstance.get("products", { params: productsData });
    return res.data;
  } catch (error) {
    throw new Error(`"Error fetching data:", ${error}`);
  }
};

export default fetchProductsData;
