import { useState, useEffect } from "react";

const useProductsApi = () => {
  const [products, setProducts] = useState([]);
  const [filteredResult, setFilterResult] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();

    setProducts(json);
    setFilterResult(json);
  };

  return [products, filteredResult, setFilterResult];
};

export default useProductsApi;
