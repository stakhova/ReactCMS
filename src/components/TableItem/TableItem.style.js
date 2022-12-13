import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    tableItemWrap : {
        display:'flex',
        alignItems: 'center',
        justifyContent:'flex-start',
        background: theme.palette.secondary.loginBack,
        marginBottom: theme.spacing(1.9),
        padding:theme.spacing(3, 5.4, 3 ,3)
    },
    tableItemName:{
        width: 'calc(49% - 6rem)',
    },
    tableTitle:{
        color: theme.palette.primary.main,
    },
    tableDate:{
        color: theme.palette.text.dateTitle,
    },
    tableStatus:{
        width:'35%',
    },
    tableStats:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        minWidth:"12.2rem",
        marginRight:'5vw ',
    },
    tableStatsTitle:{
        color: theme.palette.text.dateTitle,
        padding:theme.spacing(0,0.9,0,0.7)
    },
    tableAuthor:{
        display:'flex',
        alignItems:'center',
        gap:"2.3rem"
    },
    tableAuthorStatus:{
        background: theme.palette.text.main,
        borderRadius: '5rem',
        padding:theme.spacing(0.6,1.6),
        color: theme.palette.secondary.main,
    }

}))



