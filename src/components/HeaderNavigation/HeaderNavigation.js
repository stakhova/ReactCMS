import {Box, Typography,Container} from "@mui/material";
import {Link} from "react-router-dom";
import {useStyles} from "./HeaderNavigation.style";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

function HeaderNavigation() {
    const classes = useStyles();
    return (
        <Box className={classes.navWrap}>
            <Link to='/pricing'>
                <Typography variant = 'h6' >Pricing</Typography>
            </Link>
            <Link to='/about'>
                <Typography variant = 'h6'>About</Typography>
            </Link>
            <Link to='/login'>
                <ButtonCustom
                    variant = 'string'
                    buttonText = "Sign in"/>
            </Link>
        </Box>
    );
};

export default HeaderNavigation;