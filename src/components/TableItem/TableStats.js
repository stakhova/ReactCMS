import {Typography,Box} from "@mui/material";
import ArrowUp from "../../img/icon/ArrowUp";
import {useStyles} from "./TableItem.style";

const TableStats= ({postStats}) => {
    const classes = useStyles();
    return (

        <Box className={classes.tableStats}>
            <Typography
                variant='h6'
                sx={{fontWeight:700}}
            >
                {postStats}
            </Typography>
            <Typography
                variant='h5'
                className={classes.tableStatsTitle}
            >
                views
            </Typography>
            { (postStats > 0) ?  <ArrowUp />: null }
        </Box>
    );
};


export default TableStats;