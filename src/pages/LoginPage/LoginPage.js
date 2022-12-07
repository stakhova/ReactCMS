import {Box, Container} from "@mui/material";
import FormCustom from "../../components/FormCustom/FormCustom";
import React from "react";
import Header from "../../components/Header/Header";
import {useStyles} from "./LoginPage.style";
function LoginPage() {
    const classes = useStyles();
    // const urlReg = window.location.href.endsWith('registration')

    return (
        <>
            <Box className={classes.loginWrap}>
                {/*{ urlReg ? <Header/> : null}*/}
                <Container maxWidth={false} >
                    <FormCustom/>
                </Container>
            </Box>
        </>
    );
};

export default LoginPage;