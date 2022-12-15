import Main from "../pages/Main/Main";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegPage from "../pages/RegPage/RegPage";

export const RoutePublicList = [
    {
        id : 1 ,
        path: '/',
        page: <Main/>,
    },
    {
        id : 2 ,
        path: '/login',
        page: <LoginPage/>,
    },
    {
        id : 3 ,
        path: '/registration',
        page: <RegPage/>,
    },
]
export const RoutePrivateList = [
    {
        id : 1 ,
        path: '/view',
        page: '<View/>',
    },

]