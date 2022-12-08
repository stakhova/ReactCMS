import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    mainWrap:{
        backgroundColor: theme.palette.text.navTitle,
        height:"100rem",
        width:"100vw",
        textAlign:'center',
        borderBottomLeftRadius:"45rem",
        borderBottomRightRadius:"45rem",
        position:"absolute",
        top:0,
        left:0,
        color: 'white',
    },
    mainText:{
        margin:theme.spacing(2.3, 0, 8.5),
    },
    mainImg:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"30rem",
        img:{
            width:"100%",
            height:"100%"
        },
    }
}))