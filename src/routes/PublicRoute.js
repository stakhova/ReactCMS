import React from 'react';
import {Navigate} from "react-router-dom";
import {getCookie} from "../utils";

const PublicRoute = ({ children}) => {
    const isLogin = getCookie('autorization')
    return (
        <>
            {isLogin
                ? <Navigate to="/login"/>
                : children
            }
        </>
    )

}

export default PublicRoute;


