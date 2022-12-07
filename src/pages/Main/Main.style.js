import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    mainWrap:{
        backgroundColor: theme.palette.text.navTitle,
        height:"100rem",
        width:"100vw",
        textAlign:'center',
        borderBottomLeftRadius:"50rem",
        borderBottomRightRadius:"50rem",
        position:"absolute",
        top:0,
        left:0,
    },
    mainImg:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        img:{
            width:"100%",
            height:"100%"
        },
    }
}))