import { Link } from "react-router-dom";

const Error = (): JSX.Element => {
  return (
    <>
      <h1 className="sm:pt-28 text-center text-4xl sm:text-9xl font-bold">404</h1>
      <p className="pt-2 sm:mb-10 text-center text-lg sm:text-3xl">페이지를 찾을 수 없습니다.</p>
      <div className="text-center pb-20">
        <Link to="/" className="btn btn-md sm:btn-lg btn-primary sm:w-40">
          메인으로
        </Link>
      </div>
    </>
  );
};

export default Error;
