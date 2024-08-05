import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import { AppDispatch, RootState } from "../../store";

const CartView = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);
  console.log(items);
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
          <div></div>
        )}
      </div>
      <Confirm />
    </section>
  );
};

export default CartView;
