import {Avatar, Box, Button,Container} from "@mui/material";
import { useStyles} from './HeaderAvatar.style'
// import LogoFullSvg from "../../img/icon/LogoFullSvg";
// import ava from "../../img/avatar.png"



function HeaderAvatar( {link}) {
    const classes = useStyles();
    return (
        <Avatar
            className={classes.headerAvatar}
            alt=""
            src={link}
            sx={{
                width: 50,
                height: 50,
            }}
        />

    );
};

export default HeaderAvatar;