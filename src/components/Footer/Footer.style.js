import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    footerWrap: {
        backgroundColor: theme.palette.primary.main,
        padding:theme.spacing(4.8, 0, 4.8),
    },
    footerList: {
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        gap: "5.1rem",
    },
    footerItem:{
        color: theme.palette.text.mainTitle,
    }
}))
