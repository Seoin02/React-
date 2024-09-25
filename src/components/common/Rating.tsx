type TRatingProps = {
  rate?: number;
  count?: number;
} & typeof defaultProps;

const defaultProps = {
  rate: 0,
  count: 0,
};

const Rating = ({ rate, count }: TRatingProps): JSX.Element => {
  const stars = Array.from(Array(10));
  return (
    <div className="flex items-center mt-3">
      <div className="rating rating-half">
        {stars.map((_, index) => {
          return (
            <>
              <label htmlFor="rating-10" className="sr-only">
                별점
              </label>
              <input
                type="radio"
                id="rating-10"
                name="rating-10"
                key={`rating${index}`}
                className={`bg-yellow-400 cursor-default mask mask-star-2 ${
                  index % 2 == 0 ? "mask-half-1" : "mask-half-2"
                }`}
                disabled
                checked={index + 1 <= rate * 2}
              />
            </>
          );
        })}
      </div>
      <div className="ml-2">
        {rate} / {count} 참여
      </div>
    </div>
  );
};

Rating.defaultProps = defaultProps;

export default Rating;
