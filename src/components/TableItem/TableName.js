import {Typography} from "@mui/material";
import {useStyles} from "./TableItem.style";

const TableName = ({postTitle}) => {
    const classes = useStyles();
    return (
        <Typography variant = 'h3'
                    className = {classes.tableTitle}
                    sx = {{fontWeight:700,marginBottom:'0.4rem'}}
        >
            {postTitle}
        </Typography>

    );
};


export default TableName;