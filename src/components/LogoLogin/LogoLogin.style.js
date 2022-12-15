import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    loginLogo:{
        color: theme.palette.primary.main,
        marginBottom:theme.spacing(4),
        fontSize:"3rem",
        lineHeight:"3.5rem",
        'mark':{
            background:"transparent",
            color: theme.palette.secondary.logo,
        }
    },
}))