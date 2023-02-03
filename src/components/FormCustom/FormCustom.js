import React from 'react';
import {useFormik} from "formik";
import {loginSchema} from "../../schemas";
import {useNavigate} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import {FormListLogin, FormListRegistration} from "./FormCustom.mock.js";
import {useStyles} from "./FormCustom.style";
import FormButton from "../FormButton/FormButton";
import {checkLogin, checkUser} from '../../utils';

const FormCustom = () => {
    const classes = useStyles();
    const urlReg = window.location.href.endsWith('registration')
    const navigate = useNavigate()
    let isReg = false;
    switch (urlReg) {
        case true:
            isReg = true
            break
        default:
            isReg = false

    }
    const isAuth = (values) => {
        if(checkLogin(values)){
            return true
        } else
            alert('Wrong email or password')
    }

    const formik = useFormik({
        initialValues: {
            text: '',
            email: '',
            password: '',
            isReg: isReg
        },
        validationSchema: loginSchema,
        onSubmit: (values,actions) => {
            if (urlReg) {
                document.cookie = "user=" + JSON.stringify(values);
                actions.resetForm({
                    values: {
                        text: '',
                        email: '',
                        password: '',
                    }
                })
                alert('Congratulations,you are registered!')
                navigate('/login')
            } else {
                checkUser()
                    ? isAuth(values)
                    : alert(`You don't have account`)
                navigate('/registration')
            }
        }
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
                { isReg
                    ? FormListRegistration.map((elem) => {
                        return (
                            <FormInput
                                key = {elem.id.toString()}
                                id = {elem.id}
                                type = {elem.id}
                                labelIcon = {elem.labelIcon}
                                labelText = {elem.labelText}
                                value = {formik.values[elem.id]}
                                onChange = {formik.handleChange}
                                onBlur = {formik.handleBlur}
                                formik = {formik}
                                elem = {elem.id}/>

                        );
                    })
                    : FormListLogin.map((elem) => {
                        return (
                            <FormInput
                                key = {elem.id.toString()}
                                id = {elem.id}
                                type = {elem.id}
                                labelIcon = {elem.labelIcon}
                                labelText = {elem.labelText}
                                value = {formik.values[elem.id]}
                                onChange = {formik.handleChange}
                                onBlur = {formik.handleBlur}
                                formik = {formik}
                                elem = {elem.id}/>

                        );
                    })
                }
                <FormButton/>
            </form>
        </>
    );
};


export default FormCustom;