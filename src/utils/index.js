import {default as data} from "../components/TableBlog/Table.mock.json";
import usePagination from "@mui/material/usePagination";


export const  getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key,value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

export const checkLogin = (values) => {
    let dataRegister = getCookie('user')
    let regObj = JSON.parse(dataRegister);
    dataRegister = regObj.email + regObj.password
    let dataLogin = values.email + values.password
    if (dataRegister === dataLogin) {
        document.cookie = "autorization=" + JSON.stringify(true);
        return true;
    }
    return false;
}

export const checkUser = () => {
    let dataRegister = getCookie('user')
    return dataRegister ? true : false
}

// export const changePage = (list) => {
//     const perpage = 5;
//     const linkto = '/view?page='
//     const count = Math.ceil(data.length / perpage);
//     list = usePagination(data, perpage);
//
//
//     if(list.currentData().length === 0 ){
//         window.location = linkto + page
//     }
//     const handleChange = (e, p) => {
//         setPage(p);
//         list.jump(p);
//     };
//
// }






















































//
// let user = 'autorization'
// let rrr =  getCookie(user)
// console.log('useruser' + getCookie(user))


// export const  getCookieUser = () => {
//     let str = document.cookie.replace('user=', '')
//     console.log('str111'+str)
//     let results = JSON.parse(str);
//     console.log(results)
//     let strCookies = results.email + results.password
//     console.log(strCookies)
//     return strCookies
// }

// let c = 'user'
// getCookie(c)
// // console.log( 'getCookie' + getCookie)



// export const autorization = () => {
//     document.cookie = "autorization=" + JSON.stringify(true);
//     // let auth = getCookie('autorization')
//     return getCookie('autorization')
//
//     // if(checkLogin()){
//     //     c
//     //
//     // }
//     // console.log('ddddddddddd')
//     // return false
// }
//
//





// export const checkLogin = (values) => {
//     let dataRegister = getCookie()
//     let result =  JSON.parse(JSON.stringify(values))
//     let dataLogin = result.email + result.password
//     if (dataRegister === dataLogin) {
//         return true;
//     }
//     return false;
// }
//
// let s1 = 'user='
// let s2='auth='
// let arrCookies = getCookie(s1)
// // let aaaaa = getCookie(s2)
// console.log('QQQQQQQQQQQQ' + arrCookies)
// // console.log('aaaaaaaaaa' + aaaaa)



// export const  isLogin = () => {
//
//
// }
// let isAuth =  getCookie()
// console.log('ssss'+ isAuth)
// // export const isLogin = ()





// let index = document.cookie.indexOf('=') + 1
// console.log('index ' + index)
// let arr = document.cookie.slice(index)
// console.log('arr ' + arr)
// let results = JSON.parse(arr);
// console.log(results)
// // let results = JSON.parse(document.cookie.slice(document.cookie.indexOf('=') + 1));
// let arrCookies = results.email + results.password
// console.log('cookies' + arrCookies)
// return arrCookies



//
// function getCookie(name) {
//     const value = ${document.cookie};
//     const parts = value.split(`; ${name}=`);
//     console.log(parts)
//     if (parts.length === 2) return parts.pop().split(';').shift();
// }


// function getCookie(name) {
//     let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     if (match) return match[2];
// }
//