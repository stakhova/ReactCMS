import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navWrap:{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end",
        '&> *':{
            marginRight:"8.4rem",
            color:'white'
        }
    },

}))