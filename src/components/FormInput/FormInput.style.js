import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    inputWrap:{
        marginTop:'6.5rem',
        position:"relative"
    },

    labelItem:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        marginBottom: theme.spacing(2.1),
    },
    inputError:{
        border:'1px solid red'
    },
    labelItemText:{
        marginLeft: theme.spacing(1.3),
    }
}))