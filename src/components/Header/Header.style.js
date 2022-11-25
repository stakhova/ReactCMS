import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    headerWrap:{
        backgroundColor: theme.palette.primary.main,
    },
    headerBlock:{
        width : '100%',
        padding: theme.spacing(1.5, 3.8, 1.5, 7.5),
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerInfo:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    headerAvatar:{
        marginLeft:theme.spacing(3),

    }
}))