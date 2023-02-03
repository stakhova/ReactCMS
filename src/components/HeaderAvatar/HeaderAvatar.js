 import {Avatar} from "@mui/material";
import { useStyles} from './HeaderAvatar.style'

function HeaderAvatar( {link}) {
    const classes = useStyles();
    return (
        <Avatar
            className = {classes.headerAvatar}
            alt = ""
            src = {link}
            sx = {{
                width: 50,
                height: 50,
            }}
        />

    );
};

export default HeaderAvatar;