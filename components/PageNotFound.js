import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const err = useRouteError();
    console.log(err.error.message);
    return (
        <>
        <div>Opps!</div>
        <p>{err.error.message}</p>
        </>
    )
}

export default PageNotFound;