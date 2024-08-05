import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { AppDispatch } from "../../store";
import Rating from "../common/Rating";
import { toCurrencyFormat } from "../../utils/toCurrencyFormat";

const ProductDetail = ({ product }): JSX.Element => {
  if (product === undefined) return <div></div>;

  const dispatch: AppDispatch = useDispatch();

  return (
    <div key={product.id} className="lg:flex lg: gap-36 lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className="flex-shrink-0 items-center rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
          <img className="object-contain w-56 h-full" src={product.image} alt={product.title} />
        </figure>
      </div>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          {product.title}
          <span className="badge badge-accent ml-2">NEW</span>
        </h2>
        <p className="">{product.description}</p>
        <Rating rate={product?.rating.rate} count={product?.rating.count} />
        <p className="mt-2 mb-4 text-3xl">{toCurrencyFormat(product?.price)}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  count: 1,
                  image: product.image,
                })
              )
            }
          >
            장바구니에 담기
          </button>
          <a className="btn btn-outline ml-1" href="/carts">
            장바구니로 이동
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
