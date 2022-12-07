import {Avatar, Box, Button,Container} from "@mui/material";
import { useStyles} from './ButtonCustom.style'
import LogoFullSvg from "../../img/icon/LogoFullSvg";
import ava from "../../img/avatar.png"
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import Ava from "../../img/avatar.png"



function ButtonCustom({variant,buttonText,startIcon,type} ) {
    return (
        <Button
            variant={variant}
            startIcon={startIcon}
            type={type}
        >
            {buttonText}
        </Button>
    );
};

export default ButtonCustom;