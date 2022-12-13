import React from 'react';
import {useFormik} from "formik";
import {loginSchema} from "../../schemas";
import {useNavigate} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import {FormListLogin, FormListRegistration} from "./FormCustom.mock.js";
import {useStyles} from "./FormCustom.style";
import FormButton from "../FormButton/FormButton";
import {checkLogin} from '../../utils';


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
       checkLogin(values)
       if(checkLogin(values)){
           navigate ('/view')
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
                isAuth(values)
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

