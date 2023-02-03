import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    modalWrap: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: '#fff',
        border: '2px solid #000',
        boxShadow: 24,
        padding: '1rem',
    }

}))

