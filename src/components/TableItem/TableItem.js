
import {Typography,Box} from "@mui/material";
import TableEditSvg from "../../img/icon/TableEditSvg";
import ArrowUp from "../../img/icon/ArrowUp";
import StatusItem from "../StatusItem/StatusItem";
import {useStyles} from "./TableItem.style";

const TableItem= ({postTitle,postDate,postStatus,postStats}) => {
    const classes = useStyles();
    return (
        <Box className={classes.tableItemWrap}>
            <Box className={classes.tableItemName} >
                <Typography variant='h3'
                            className={classes.tableTitle}
                            sx={{fontWeight:700,marginBottom:'0.4rem'}}
                >
                    {postTitle}
                </Typography>
                <Typography
                    variant='h5'
                    className={classes.tableDate}
                >
                    Posted {postDate} days ago
                </Typography>
            </Box>
            <Box className={classes.tableStatus}>
                <StatusItem postStatus={postStatus}/>
            </Box>

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
            <Box><TableEditSvg/></Box>
            {/*<DropdownMenu/>*/}
        </Box>
    );
};


export default TableItem;