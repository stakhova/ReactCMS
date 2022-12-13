import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    errorMess:{
        color: 'red',
        position: 'absolute',
        bottom: '-3rem',
        left: 0,
    },
    formWrap:{
        padding: theme.spacing(3,4.2,2.6,4.2),
        margin:"0 auto ",
        background:"white",
        width:"51.2rem"
    },
    buttonLogin:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:'4.3rem'
    }
}))