import { Suspense } from "react";
import Loading from "../components/common/Loading";
import Slider from "../components/common/Slider";
import ItemList from "../components/products/ItemList";

const fashionFilter = (index) => index >= 0 && index <= 3;
const accessoryFilter = (index) => index >= 4 && index <= 7;
const digitalFilter = (index) => index >= 8 && index <= 11;

const Index = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 test-3xl lg:text-4xl text-center font-bold">패션</h2>
        {<ItemList filterItem={fashionFilter} />}
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 test-3xl lg:text-4xl text-center font-bold">액세서리</h2>
        {<ItemList filterItem={accessoryFilter} />}
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 test-3xl lg:text-4xl text-center font-bold">디지털</h2>
        {<ItemList filterItem={digitalFilter} />}
      </section>
    </Suspense>
  );
};

export default Index;
