import {Box} from "@mui/material";
import FormCustom from "../../components/FormCustom/FormCustom";
import React, {useState} from "react";
import Header from "../../components/Header/Header";
import {useStyles} from "./RegPage.style";
function RegPage() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.loginWrap}>
                <Header/>
                <FormCustom/>
            </Box>
        </>
    );
};

export default RegPage;