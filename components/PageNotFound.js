import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const err = useRouteError();
    console.log(err.error.message);
    return (
        <>
        <div>Opps!</div>
        </>
    )
}

export default PageNotFound;