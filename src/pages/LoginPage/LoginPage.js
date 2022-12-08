import {Box} from "@mui/material";
import FormCustom from "../../components/FormCustom/FormCustom";
import React from "react";
import {useStyles} from "./LoginPage.style";
function LoginPage() {
    const classes = useStyles();
    // const urlReg = window.location.href.endsWith('registration')

    return (
        <>
            <Box className={classes.loginWrap}>
                <FormCustom/>
            </Box>
        </>
    );
};

export default LoginPage;