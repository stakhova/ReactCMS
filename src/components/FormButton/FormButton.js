import React from 'react';
import {Box} from "@mui/material"
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {useStyles} from "./FormButton.style";
import {Link} from "react-router-dom";

const FormButton = () => {
    const classes = useStyles();
    const urlReg = window.location.href.endsWith('registration')

    return (
        <>
            { urlReg
                ?
                <Box className = {classes.buttonLogin} sx={{justifyContent:"flex-end"}}>
                    <ButtonCustom type='submit' variant='main' buttonText='Register'/>
                </Box>
                :
                <>
                    <Box className = {classes.buttonLogin}>
                        <ButtonCustom
                            variant='no-back'
                            buttonText='Forgot password?'/>
                        <ButtonCustom
                            type='submit'
                            variant='main'
                            buttonText='Sing in'/>
                    </Box>
                    <Box className = {classes.buttonLogin}>
                        <Link to='/registration'>
                            <ButtonCustom
                                variant='outlined'
                                buttonText='Don’t have & account?'/>
                        </Link>
                    </Box>
                </>
            }
        </>
    );
};

export default FormButton;

