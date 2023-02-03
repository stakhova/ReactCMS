import {Typography,Box} from "@mui/material";
import {useStyles} from "./TableItem.style";

const TableAuthor = ({authorName,authorStatus}) => {
    const classes = useStyles();
    return (
        <Box className = {classes.tableAuthor}>
            <Typography
                variant = 'h5'
            >
                {authorName}
            </Typography>
            <Typography
                variant = 'h5'
                sx = {{fontWeight:700}}
                className = {classes.tableAuthorStatus}
            >
                {authorStatus}
            </Typography>
        </Box>

    );
};


export default TableAuthor;