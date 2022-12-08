import React from 'react';
import {useFormik} from "formik";
import {loginSchema} from "../../schemas";
import FormInput from "../FormInput/FormInput";
import {FormListLogin, FormListRegistration} from "./FormCustom.mock.js";
import {useStyles} from "./FormCustom.style";
import FormButton from "../FormButton/FormButton";


const FormCustom = () => {
    const classes = useStyles();
    const urlReg = window.location.href.endsWith('registration')

   function getCookie (name) {
        let results = document.cookies.match('(^|;) ?' + name + '=([^;]*)(;|$)');
       console.log(results)
        if (results){
            console.log(results)
            return (unescape(results[2]))
        }
        else
            return null;
    }

    // function getCookie(cName) {
    //     const name = cName + "=";
    //     const cDecoded = decodeURIComponent(document.cookie); //to be careful
    //     const cArr = cDecoded.split('; ');
    //     let res;
    //     cArr.forEach(val => {
    //         if (val.indexOf(name) === 0) res = val.substring(name.length);
    //     })
    //     console.log(res)
    //     return res
    // }



    let isReg = false;
    switch (urlReg) {
        case true:
            isReg = true
            break
        default:
            isReg = false
    }

    const formik = useFormik({
        initialValues: {
            text: '',
            email: '',
            password: '',
            isReg: isReg
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            if (urlReg) {
                // console.log(cookies)
                document.cookie = "user=" + JSON.stringify(values);
                getCookie('name')
                // console.log(cookies)
            } else {
                alert(JSON.stringify(values, null, 2))
            }
        }
    });
    return (
        <>
            {urlReg ?
                <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
                    {FormListRegistration.map((elem) => {
                        return (
                            <FormInput
                                key={elem.id.toString()}
                                id={elem.id}
                                type={elem.id}
                                labelIcon={elem.labelIcon}
                                labelText={elem.labelText}
                                value={formik.values[elem.id]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                                elem={elem.id}
                            />
                        );
                    })}
                    <FormButton/>
                </form>
                :
                <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
                    {FormListLogin.map((elem) => {
                        return (
                            <FormInput
                                key={elem.id.toString()}
                                id={elem.id}
                                type={elem.id}
                                labelIcon={elem.labelIcon}
                                labelText={elem.labelText}
                                value={formik.values[elem.id]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                                elem={elem.id}
                            />
                        );
                    })}
                    <FormButton/>
                </form>
            }
        </>
    );
};


export default FormCustom;

