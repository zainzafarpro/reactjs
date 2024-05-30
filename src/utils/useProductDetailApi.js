import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useProductDetailApi = () => {
  const [detail, setDetail] = useState({});
  const param = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${param.prodID}`
    );
    const json = await data.json();

    setDetail(json);
  };

  return detail;
};

export default useProductDetailApi;
