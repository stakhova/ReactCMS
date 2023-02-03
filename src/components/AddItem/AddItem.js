import React from 'react';
import {useFormik} from "formik";
import {loginSchema} from "../../schemas";
import FormInput from "../FormInput/FormInput";
import {FormListPost} from "./AddItem.mock";

const AddItem = () =>{
    function submit(values, actions){
        actions.resetForm({
            values: {
                text: '',
                email: '',
                password: '',
            }
        })
        }

    const formik = useFormik({
        initialValues: {
            text: '',
            email: '',
            password: '',
            isReg: false
        },
        validationSchema: loginSchema,
        onSubmit: (values,actions) => {
            submit(values, actions, )
        }
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                {FormListPost.map((elem) => {
                    return (
                        <FormInput
                        key = {elem.id.toString()}
                        id = {elem.id}
                        labelText = {elem.labelText}
                        value = {formik.values[elem.id]}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        formik = {formik}
                        elem = {elem.id}/>
                    );
                })}
            </form>
        </>
    )
};

export default AddItem;