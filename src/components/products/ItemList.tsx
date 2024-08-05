import { useQuery } from "@tanstack/react-query";
import fetchProductsData from "../../../api/fetchProductsData";
import { Item } from "../../../api/fetchProductsData";
import { toCurrencyFormat } from "../../utils/toCurrencyFormat";

const ItemList = ({ categoryName, filterItem }: { categoryName?: string; filterItem?: (index: number) => boolean }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (data === undefined) return <div></div>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      {data
        .filter(
          (item: Item, index: number) =>
            (categoryName && item.category?.includes(categoryName)) || (filterItem && filterItem(index))
        )
        .map((item: Item) => (
          <a
            key={item.id}
            className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            href={`/product/${item.id}`}
          >
            <figure className="flex flex-col h-80 bg-white overflow-hidden">
              <img className="transition-transform duration-300 w-28" src={item.image} alt="상품 이미지" />
            </figure>
            <div className="card-body bg-gray-100 dark:bg-gray-700">
              <div className="card-title text-base">{item.title}</div>
              <div className="text-base">{toCurrencyFormat(item.price)}</div>
            </div>
          </a>
        ))}
    </div>
  );
};

export default ItemList;

// tanstack query 쓰기 전 코드
// const ItemList = ({
//   data,
//   categoryName,
//   filterItem,
// }: {
//   data?: Products;
//   categoryName?: string;
//   filterItem?: (index: number) => boolean;
// }) => {
//   const [items, setItems] = useState<Products[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProductsData({});
//         setItems(data);
//       } catch (error) {
//         throw new Error(`"Error fetching data:", ${error}`);
//       }
//     };
//     fetchData();
//   }, []);
