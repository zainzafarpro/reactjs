import ProductCard, { highQuality } from "./ProductCard";
import { Link } from "react-router-dom";
import useProductsApi from "../utils/useProductsApi";
import { userContext } from "../utils/userContext";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [products] = useProductsApi();
  const { userData, setUserData } = useContext(userContext);
  const HighQualityProducts = highQuality(ProductCard);

  return products.length === 0 ? (
    <div className="flex flex-wrap">
      <div className="px-2 w-3/12 mb-4">
        <Skeleton height={"450px"} />
      </div>
      <div className="px-2 w-3/12 mb-4">
        <Skeleton height={"450px"} />
      </div>
      <div className="px-2 w-3/12 mb-4">
        <Skeleton height={"450px"} />
      </div>
      <div className="px-2 w-3/12 mb-4">
        <Skeleton height={"450px"} />
      </div>
    </div>
  ) : (
    <>
      <div>
        <input
          className="border border-black mb-5 ml-2"
          value={userData}
          onChange={(e) => {
            setUserData(e.target.value || "");
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {products.map((item) => {
          return (
            <Link
              key={item.id}
              to={"/product-detail/" + item.id}
              className="px-2 w-3/12 mb-4"
            >
              {item?.rating?.rate > 4 ? (
                <HighQualityProducts {...item} />
              ) : (
                <ProductCard {...item} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
