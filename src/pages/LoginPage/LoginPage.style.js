import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    loginWrap:{
        height:'100vh',
        background: theme.palette.secondary.loginBack,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
}))
