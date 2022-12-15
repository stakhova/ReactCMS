import {Box} from "@mui/material";
import {useStyles} from "./TableItem.style";

const TableImgFile= ({src}) => {
    const classes = useStyles();
    return (
        <Box className={classes.tableImgWrap}>
            <img src={src} alt="photo" />
        </Box>
    );
};


export default TableImgFile;