import {Box,Modal} from "@mui/material";

import {useStyles} from "./ModalCustom.style";


const ModalCustom = ({open,onClose,children}) => {
    const classes = useStyles();
    return (
        <>
            <Modal
                open = {open}
                onClose = {onClose}
                aria-labelledby = "modal-modal-title"
                aria-describedby = "modal-modal-description"
            >
                <Box className = {classes.modalWrap}>
                    {children}
                </Box>
            </Modal>
        </>
    );
}
export default ModalCustom;