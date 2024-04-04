import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";

const CartView = (): JSX.Element => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {/* 물품이 없다면? */}
        <div>
          <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
          <Link to="/" className="btn btn-primary mt-10">
            담으러 가기
          </Link>
        </div>
        {/* 구매하기 버튼 등 화면을 구성 해보세요. */}
      </div>
      <Confirm />
    </section>
  );
};

export default CartView;
