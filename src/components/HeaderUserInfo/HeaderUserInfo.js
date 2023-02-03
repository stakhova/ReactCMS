import { Box} from "@mui/material";
import { useStyles} from './HeaderUserInfo.style'
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import Ava from "../../img/avatar.png"
import ButtonCustom from "../ButtonCustom/ButtonCustom";

function HeaderUserInfo( ) {
    const classes = useStyles();
    return (
        <Box className = {classes.headerInfo}>
            <ButtonCustom
                variant = 'text'
                buttonText = "Pro plan"
            />
            <HeaderAvatar link = {Ava}/>
        </Box>

    )
};

export default HeaderUserInfo;