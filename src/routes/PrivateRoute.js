import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                :<Navigate to="/view" />
        )} />
    );
};

export default PrivateRoute;

//
//
// import {
//     Route,
//     Redirect,
//     Navigate
// } from 'react-router-dom';
//
//
// let cookies = document.cookie;
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         cookies.get('user=') ? (
//             <Component {...props}/>
//         ) : (
//             <Navigate to="/login" />
//             // <Redirect to={{
//             //     pathname: '/',
//             //     state: { from: props.location }
//             // }}/>
//         )
//     )}/>
// )
//
//
// export default PrivateRoute;




// function PrivateRoute({ children, isAuthenticated, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={
//                 ({ location }) => (
//                     isAuthenticated
//                         ? (
//                             children
//                         ) : (
//                             <Redirect
//                                 to={{
//                                     pathname: '/login',
//                                     state: { from: location }
//                                 }}
//                             />
//                         ))
//             }
//         />
//     );
// }






// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { userSelector } from "../../store/auth/reducers/reducers";
//
// const PrivateRoute = () => {
//     const { isAuth } = useSelector(userSelector);
//     return isAuth ? <Outlet /> : <Navigate to="/login" />;
// };
//
// export default PrivateRoute;
