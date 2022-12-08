import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navWrap:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end",
        padding:theme.spacing(3.6,4,0,0),
        marginBottom:theme.spacing(13.4),
        '& > *':{
            marginRight:"8.4rem",
            color:'white'
        }
    },

}))