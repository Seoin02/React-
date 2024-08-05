import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import { AppDispatch, RootState } from "../../store";
import { increaseItemCount, decreaseItemCount } from "../../store/cart";

const CartView = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  const handleAddCount = (id: number) => {
    dispatch(increaseItemCount(id));
  };

  const handleDecreaseCount = (id: number) => {
    dispatch(decreaseItemCount(id));
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {!items.length ? (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to="/" className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        ) : (
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
                    <span className="mt-2 mb-4 text-3xl">${item.price}</span>
                    <br />
                    <div className="card-actions">
                      <button className="btn btn-primary" onClick={() => handleDecreaseCount(item.id)}>
                        -
                      </button>
                      <button className="btn btn-ghost no-animation">{item.count}</button>
                      <button className="btn btn-primary" onClick={() => handleAddCount(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
            <div className="self-start shrink-0 flex items-center mt-10 mb-20">
              <span className="text-xl md:text-2xl">총: ${totalAmount.toFixed(2)}</span>
              <button className="modal-button btn btn-primary ml-5">구매하기</button>
            </div>
          </div>
        )}
      </div>
      <Confirm />
    </section>
  );
};

export default CartView;
