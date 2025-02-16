import bars from "@/assets/img/svg/bars.svg";
import moon from "@/assets/img/svg/moon.svg";
import magnifyingGlass from "@/assets/img/svg/magnifying-glass.svg";
import cart from "@/assets/img/svg/cart-shopping-solid.svg";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  const totalCount = items.reduce((total, item) => total + item.count, 0);

  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <label htmlFor="side-menu" className="flex-none lg:hidden md:hidden btn btn-square btn-ghost w-10 sm:w-auto">
          <img src={bars} className="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current" alt="side menu" />
        </label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap" to="/">
            React Shop
          </Link>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to="/fashion">
            패션
          </Link>
          <Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to="/accessory">
            액세서리
          </Link>
          <Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to="/digital">
            디지털
          </Link>
        </div>
        <div className="flex items-center px-2 gap-2">
          <img src={moon} className="swap-on fill-black w-7 h-7" alt="dart mode" />
          <label htmlFor="search" className="sr-only">
            검색
          </label>
          <input
            type="text"
            id="search"
            placeholder="검색"
            className="fixed left-0 top-4 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput translate-y-full !opacity-100"
          />
          <img src={magnifyingGlass} className="h-6 w-6 stroke-gray-700 dark:stroke-white" alt="search icon" />
          <div className="relative h-8 w-8 py-1">
            <Link to="/carts">
              <img src={cart} className="h-6 w-6 stroke-gray-700 dark:stroke-white" alt="cart icon" />
              <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
                {totalCount || 0}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
