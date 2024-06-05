import useProductDetailApi from "../utils/useProductDetailApi";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ProductDetail = () => {
  const detail = useProductDetailApi();

  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(addItem(detail));
  };

  return (
    <div className="flex w-9/12 mx-auto">
      <div className="w-6/12 shadow-lg shadow-slate-900/50">
        {detail.image ? (
          <img src={detail?.image} />
        ) : (
          <Skeleton height={"500px"} />
        )}
      </div>
      <div className="w-6/12 pl-10">
        {detail.title ? (
          <h1 className="text-3xl font-bold mb-5">{detail?.title}</h1>
        ) : (
          <div className="mb-5">
            <Skeleton height={"30px"} />
          </div>
        )}

        {detail?.rating?.rate ? (
          <span>Rating - {detail?.rating?.rate}</span>
        ) : (
          <Skeleton />
        )}
        {detail.price ? (
          <h3 className="text-xl font-semibold mb-10">${detail?.price}</h3>
        ) : (
          <div className="mb-10">
            <Skeleton />
          </div>
        )}
        {detail.description ? (
          <p className="text-sm font-thin mb-5">{detail?.description}</p>
        ) : (
          <div className="mb-5">
            <Skeleton count={4} />
          </div>
        )}
        {detail.title ? (
          <button
            className="bg-gray-800 rounded px-8 py-1 inline-block text-white hover:bg-black"
            onClick={handleAddItems}
          >
            Add to cart
          </button>
        ) : (
          <Skeleton width={"150px"} height={"30px"} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
