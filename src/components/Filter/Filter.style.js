import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    filterWrap: {
        justifyContent:'flex-end',
        margin: theme.spacing(2.2, 0 ,2.2),
        display:'flex',
        gap: "2.1rem",
        alignItems:"center"
    },
    filterTitle: {
        color: theme.palette.text.navTitle,
    },
}))
