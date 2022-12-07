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
}))
