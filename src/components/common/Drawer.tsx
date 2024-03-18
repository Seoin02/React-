const Drawer = (): JSX.Element => {
  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white">패션</a>
        </li>
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white">액세서리</a>
        </li>
        <li>
          <a className="!text-gray-700 active:!text-white dark:!text-white">디지털</a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
