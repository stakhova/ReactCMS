import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    tableTitleWrap : {
        color: theme.palette.primary.main,
        '&:first-child':{
            width:"48%"
        },
        '&:nth-child(2)':{
            width:"35%"
        },

    },
}))



