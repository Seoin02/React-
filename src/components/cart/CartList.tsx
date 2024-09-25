import { AppDispatch, RootState } from "@/store";
import { increaseItemCount, decreaseItemCount } from "@/store/cart";
import { toCurrencyFormat } from "@/utils/toCurrencyFormat";
import { useDispatch, useSelector } from "react-redux";

const CartList = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  const handleAddCount = (id: number) => {
    dispatch(increaseItemCount(id));
  };

  const handleDecreaseCount = (id: number) => {
    dispatch(decreaseItemCount(id));
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <div className="mt-6 md:mt-14 px-2 lg:px-0 lg:flex">
        <ul>
          {items.map((item) => (
            <div key={item.id} className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
              <figure className="w-10% flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white flex justify-center">
                <img src={item.image} alt={item.title} className="transition-transform duration-300 w-28" />
              </figure>
              <div className="card-body px-1 lg:px-12">
                <h2 className="card-title">{item.title}</h2>
                <br />
                <span className="mt-2 mb-4 text-3xl">{toCurrencyFormat(item.price)}</span>
                <br />
                <div className="card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDecreaseCount(item.id)}
                    aria-label="minus button"
                  >
                    -
                  </button>
                  <button className="btn btn-ghost no-animation" aria-label="item count">
                    {item.count}
                  </button>
                  <button className="btn btn-primary" onClick={() => handleAddCount(item.id)} aria-label="plus button">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">총: {toCurrencyFormat(totalAmount)}</span>
          <button className="modal-button btn btn-primary ml-5" aria-label="purchase button">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
