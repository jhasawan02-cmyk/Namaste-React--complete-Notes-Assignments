import { useRouteError } from "react-router-dom";   



const Error = () =>{
    const error = useRouteError();
    console.log(error);
    return(
        <div className="error-page">
        <h3 >OOPS .......</h3>
        <h3>Something Went Wrong</h3>
        <h1>{error.status}:{error.statusText}</h1>
        </div>

    );
};
export default Error;