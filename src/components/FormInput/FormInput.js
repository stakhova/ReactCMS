

import {Box, InputLabel, TextField, Typography} from "@mui/material";
import {useStyles} from "./FormInput.style";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import React from "react";


const FormInput = (props ) =>{

    const classes = useStyles();
    const { labelIcon, labelText, value,onChange,onBlur,name,type,id,formik,elem} = props;
    return (
        <Box className={classes.inputWrap}>
            <InputLabel className = {classes.labelItem}>
                {labelIcon}
                <Typography
                    sx={{marginLeft:'1.3rem'}}
                    variant='h6'>{labelText}
                </Typography>
            </InputLabel>
            <TextField
                className = {classes.inputItem}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                id={id}
                name={name}
                type={type}
            />
            <ErrorMessage formik={formik} elem={elem}/>
        </Box>
    );


}

export default FormInput;


// <Box className={classes.inputWrap}>
//     <label className = {classes.labelItem} htmlFor={name}>
//         <Box>{labelIcon}</Box>
//         <Typography sx={{marginLeft:'1.3rem'}} variant='h6'>{labelText}</Typography>
//     </label>
//     <input
//         className = {classes.inputItem}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         name={name}
//         type={type}
//     />
// </Box>