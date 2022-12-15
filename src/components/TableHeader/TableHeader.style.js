import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    tableHeaderWrap: {
        width:'100%',
        display:"flex",
        justifyContent:'space-between',
        alignItems:"center",
        paddingBottom:"1.7rem",
        borderBottom: `0.1rem solid #E2E8F0`,
        marginBottom:'3.1rem'
    },
    tableHeaderTitle:{
        display:"flex",
        justifyContent:'flex-start',
        width:'100%',
    },
    tableTitleBlog : {
        color: theme.palette.primary.main,
        '&:first-child':{
            width:"49%"
        },
        '&:nth-child(2)':{
            width:"24%"
        },

    },
    tableTitleCreate : {
        color: theme.palette.primary.main,
        '&:first-child':{
            width:"25%"
        },
        '&:nth-child(2)':{
            width:"30%"
        },
        '&:nth-child(3)':{
            width:"23%"
        },
    },
}))
