import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-5">
      <div className="text-4xl mb-5">Opps! {error?.status}</div>
      <div>{error?.error?.message}</div>
    </div>
  );
};

export default PageNotFound;
