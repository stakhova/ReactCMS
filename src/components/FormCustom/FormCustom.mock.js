
import UsersSvg from "../../img/icon/UsersSvg";
import PasswordSvg from "../../img/icon/PasswordSvg";
import EmailSvg from "../../img/icon/EmailSvg";

export const FormListLogin = [
    {
        id : 'email',
        labelIcon : <EmailSvg/>,
        labelText: 'Email address',
    },
    {
        id : "password",
        labelIcon : <PasswordSvg/>,
        labelText: 'Password',
    },

]
export const FormListRegistration = [
    {
        id: 'text',
        labelIcon : <UsersSvg/>,
        labelText: 'Full name',
    },
    {
        id : 'email',
        labelIcon : <EmailSvg/>,
        labelText: 'Email',
    },
    {
        id:'password',
        labelIcon : <PasswordSvg/>,
        labelText: 'Password',
    },

]