import { useState, useEffect } from "react";

const useProductsApi = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();

    setProducts(json);
  };

  return products;
};

export default useProductsApi;
