import useProducts from "@/api/fetchProductsData";
import { Item } from "@/api/fetchProductsData";
import { toCurrencyFormat } from "@/utils/toCurrencyFormat";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemList = ({ categoryName, filterItem }: { categoryName?: string; filterItem?: (index: number) => boolean }) => {
  const { data } = useProducts();

  useEffect(() => {
    console.log("Fetching products data:", data);
  }, [data]);

  if (data === undefined) return <div></div>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {data
        .filter(
          (item: Item, index: number) =>
            (categoryName && item.category?.includes(categoryName)) || (filterItem && filterItem(index))
        )
        .map((item: Item) => (
          <Link
            key={item.id}
            className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            to={`/product/${item.id}`}
          >
            <figure className="flex flex-col h-80 bg-white overflow-hidden">
              <img className="transition-transform duration-300 w-28" src={item.image} alt="상품 이미지" />
            </figure>
            <div className="card-body bg-gray-100 dark:bg-gray-700">
              <div className="card-title text-base">{item.title}</div>
              <div className="text-base">{toCurrencyFormat(item.price)}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ItemList;
