
import {Typography,Box} from "@mui/material";
import TableEditSvg from "../../img/icon/TableEditSvg";
import ArrowUp from "../../img/icon/ArrowUp";
import StatusItem from "../StatusItem/StatusItem";
import {useStyles} from "./TableHeaderItem.style";

const TableHeaderItem= ({tableTitle}) => {
    const classes = useStyles();
    return (
        <Typography variant='h4'
                    className={classes.tableTitleWrap}
                    sx={{fontWeight:700}}
        >
            {tableTitle}
        </Typography>


    );
};


export default TableHeaderItem;