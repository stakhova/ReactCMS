import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    tableItemWrap : {
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        background: theme.palette.secondary.loginBack,
        marginBottom: theme.spacing(1.9),
        padding:theme.spacing(3, 5.4, 3 ,3)
    },
    tableTitle:{
        color: theme.palette.primary.main,
    },
    tableDate:{
        color: theme.palette.text.dateTitle,
    },
    tableStats:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minWidth:"12.2rem",
        // marginLeft:'19.7rem'

    },
    tableStatsTitle:{
        color: theme.palette.text.dateTitle,
        padding:theme.spacing(0,0.9,0,0.7)
    }
}))



