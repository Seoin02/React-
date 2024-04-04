import React from "react";
import BreadCrumb from "../components/common/Breadcrumb";
import { MENUS } from "../constants/category";
import ItemList from "../components/products/ItemList";

const Fashion = (): JSX.Element => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={MENUS.ACCESSORY} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">액세서리</h2>
        <ItemList categoryName={"jewelery"} />
      </article>
    </section>
  );
};

export default Fashion;
