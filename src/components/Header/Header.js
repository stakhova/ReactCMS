import {Avatar, Box, Button,Container} from "@mui/material";
import { useStyles} from './Header.style'
import LogoFullSvg from "../../img/icon/LogoFullSvg";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import HeaderUserInfo from "../HeaderUserInfo/HeaderUserInfo";
import {Link} from "react-router-dom";

function Header( ) {
    const classes = useStyles();
    const urlReg = window.location.href.endsWith('registration')

    return (
        <Box className={classes.headerWrap}>
            <Container maxWidth={false} >
                <Box className={classes.headerBlock}>
                    <Link to = '/'>
                        <LogoFullSvg/>
                    </Link>
                    { urlReg
                        ?
                        <Link to = '/login'>
                           <ButtonCustom
                               variant = 'string'
                               buttonText = "Sign in"/>
                        </Link>
                        :
                        <HeaderUserInfo/>
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Header;