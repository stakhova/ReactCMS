import {Navigate} from 'react-router-dom';
import {getCookie} from '../utils';

const PrivateRoute = ({ children }) => {
    const isLogin = getCookie('autorization')
    return (
        <>
            {isLogin
                ? children
                : <Navigate to="/" />
            }
        </>
    )
};

export default PrivateRoute;

