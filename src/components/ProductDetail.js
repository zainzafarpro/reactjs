import useProductDetailApi from "../utils/useProductDetailApi";

const ProductDetail = () => {
  const detail = useProductDetailApi();

  return (
    <div className="flex w-9/12 mx-auto">
      <div className="w-6/12 shadow-lg shadow-slate-900/50">
        <img src={detail?.image} />
      </div>
      <div className="w-6/12 pl-10">
        <h1 className="text-3xl font-bold mb-5">{detail?.title}</h1>
        <span>Rating - {detail?.rating?.rate}</span>
        <h3 className="text-xl font-semibold mb-10">${detail?.price}</h3>
        <p className="text-sm font-thin">{detail?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
