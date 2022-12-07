import {Avatar, Box, Button,Container} from "@mui/material";
import { useStyles} from './HeaderUserInfo.style'
import LogoFullSvg from "../../img/icon/LogoFullSvg";
import ava from "../../img/avatar.png"
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import Ava from "../../img/avatar.png"
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import {useState,useEffect} from "react";






function HeaderUserInfo( ) {
    const classes = useStyles();
    return (
        <Box className={classes.headerInfo}>
            <ButtonCustom
                variant = 'text'
                buttonText = "Pro plan"
            />
            <HeaderAvatar link={Ava}/>
        </Box>

    )
};

export default HeaderUserInfo;