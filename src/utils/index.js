
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}

// const TOKEN_KEY = 'jwt';
//
// export const login = () => {
//     localStorage.setItem(TOKEN_KEY, 'TestLogin');
//     console.log( localStorage.setItem(TOKEN_KEY, 'TestLogin'))
// }
//
// export const logout = () => {
//     localStorage.removeItem(TOKEN_KEY);
// }
//
// export const isLogin = () => {
//     if (localStorage.getItem(TOKEN_KEY)) {
//         return true;
//     }
//     return false;
// }