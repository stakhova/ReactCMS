import { Typography} from "@mui/material";
import { useStyles} from './LogoLogin.style'


function LogoLogin() {
    const classes = useStyles();
    return (
        <Typography
            className={classes.loginLogo}
            variant='h3'>
            Rival <mark>CMS</mark>
        </Typography>

    )
};

export default LogoLogin;