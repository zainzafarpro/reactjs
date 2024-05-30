import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>Opps!</div>
    </>
  );
};

export default PageNotFound;
