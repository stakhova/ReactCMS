import {Box, Typography,Container} from "@mui/material";
import {Link} from "react-router-dom";
import {useStyles} from "./Main.style";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import React from "react";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import Footer from "../../components/Footer/Footer";

function Main() {
    const classes = useStyles();
    return (
        <Box className={classes.mainWrap}>
            <Container maxWidth={false} >
                <HeaderNavigation/>
                <Typography
                    variant='h1'
                    sx={{fontWeight:'700'}}>
                    Rival <mark>CMS</mark>
                </Typography>
                <Typography
                    variant='h2' >
                    Fresh new way to build sites
                </Typography>
                <Link to='/login'>
                    <ButtonCustom
                        variant='mainPage'
                        buttonText='Get started free'/>
                </Link>
                <Typography
                    sx={{margin:'2.3rem 0 8.5rem'}}
                    variant='body1' >
                    *no card needed
                </Typography>
                <Box className={classes.mainImg}>
                    <img src="../../img/MainPic.png"  alt=""/>
                </Box>
            </Container>
            <Footer/>
        </Box>
    );
};

export default Main;