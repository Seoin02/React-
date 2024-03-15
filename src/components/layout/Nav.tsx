import React from "react";
import bars from "../../assets/img/svg/bars.svg";
import sun from "../../assets/img/svg/sun.svg";
import moon from "../../assets/img/svg/moon.svg";
import cart from "../../assets/img/svg/cart-shopping-solid.svg";

const Nav = () => {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <label for="side-menu" className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
          <img src={bars} className="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current" />
        </label>
        <div>
          <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
            <a href="/">
              <span className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">React Shop</span>
            </a>
          </h1>
        </div>
        <div className="flex-none hidden md:flex md: flex-1 ml-2">
          <button className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">패션</button>
          <button className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">액세서리</button>
          <button className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white">디지털</button>
        </div>
        <div className="flex items-center px-2">
          <img src={moon} className="swap-on fill-black w-7 h-7" />
          <input
            type="text"
            placeholder="검색"
            className="left-0 top-4 opacity-0 sm: opacity-100 sm: static sm: flex w-full input input ghost focus: outline-0 rounded-none sm: rounded bg-gray-300 dark: bg-gray-600 ! text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput translate-y-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600"
          ></input>
          <img src={cart} className="h-6 w-6 stroke-gray-700 dark:stroke-white" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
