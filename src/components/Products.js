import ProductCard, { highQuality } from "./ProductCard";
import { Link } from "react-router-dom";
import useProductsApi from "../utils/useProductsApi";

const Products = () => {
  const products = useProductsApi();
  const HighQualityProducts = highQuality(ProductCard);
  return (
    <div className="flex flex-wrap">
      {products.map((item) => {
        return (
          <Link
            key={item.id}
            to={"/product-detail/" + item.id}
            className="px-2 w-3/12 mb-4"
          >
            {item.rating.rate > 4 ? (
              <HighQualityProducts {...item} />
            ) : (
              <ProductCard {...item} />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
