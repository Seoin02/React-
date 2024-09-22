import BreadCrumb from "@/components/common/Breadcrumb";
import Confirm from "@/components/common/Confirm";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartList from "./CartList";

const CartView = (): JSX.Element => {
  const { items } = useSelector((state: RootState) => state.cart);

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
          <CartList />
        )}
      </div>
      <Confirm />
    </section>
  );
};

export default CartView;
