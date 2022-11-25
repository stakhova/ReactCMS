import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navigationWrap: {
        backgroundColor: theme.palette.secondary.inputBack,
        width:'30rem',
        padding:theme.spacing(7.2, 7, 7.2),
        display:'flex',
        flexDirection:'column',
        gap: "3.2rem",
    },
    navigationTitle: {
        color: theme.palette.text.navTitle,
    },
}))
