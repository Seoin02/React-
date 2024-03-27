import Slider from "../components/common/Slider";
import { useRecoilState } from "recoil";
import ItemList from "../components/products/ItemList";

const Index = (): JSX.Element => {
  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">{<ItemList />}</section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">{<ItemList />}</section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">{<ItemList />}</section>
    </>
  );
};

export default Index;
