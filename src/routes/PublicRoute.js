import {Navigate} from "react-router-dom";
import {getCookie} from "../utils";

const PublicRoute = ({ children}) => {
    const isLogin = getCookie('autorization')
    return (
        <>
            {isLogin
                ? <Navigate to = "/view"/>
                : children
            }
        </>
    )

}

export default PublicRoute;


