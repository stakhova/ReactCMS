import React from 'react';
import {Typography} from "@mui/material";
import {useStyles} from "./ErrorMessage.style";


const ErrorMessage = ({formik,elem}) =>{
    const classes = useStyles();
    return (
        <>
            {formik.touched[elem] && Boolean(formik.errors[elem]) ? <Typography className={classes.errorMess}> {formik.errors[elem]}</Typography> : null}
        </>

    );
}

export default ErrorMessage;


