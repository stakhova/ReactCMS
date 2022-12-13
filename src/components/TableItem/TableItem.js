import {Typography,Box} from "@mui/material";
import TableEditSvg from "../../img/icon/TableEditSvg";
import ArrowUp from "../../img/icon/ArrowUp";
import StatusItem from "../StatusItem/StatusItem";
import {useStyles} from "./TableItem.style";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import FadeMenu from "../DropdownMenu/DropdownMenu";

const TableItem= ({postTitle,postDate,postStatus,postStats,authorName,authorStatus}) => {
    const classes = useStyles();
    const urlCreateView = window.location.href.endsWith('createView')


    return (
        <Box className={classes.tableItemWrap}>
            <Box className={classes.tableItemName}>
                <Typography variant='h3'
                            className={classes.tableTitle}
                            sx={{fontWeight:700,marginBottom:'0.4rem'}}
                >
                    {postTitle}
                </Typography>
                {urlCreateView
                    ? null
                    : (
                    <Typography
                        variant='h5'
                        className={classes.tableDate}
                    >
                        Posted {postDate} days ago
                    </Typography>
                    )}
            </Box>
            {urlCreateView
                ?
                (
                    <Typography
                    variant='h5'
                    >
                    Update {postDate} weeks ago
                    </Typography>)
                :null
            }

            <Box className={classes.tableStatus}>
                <StatusItem postStatus={postStatus}/>
            </Box>
            {urlCreateView
                ? <Box className={classes.tableAuthor}>
                    <Typography
                        variant='h5'
                    >
                        {authorName}
                    </Typography>
                    <Typography
                        variant='h5'
                        sx={{fontWeight:700}}
                        className={classes.tableAuthorStatus}
                    >
                        {authorStatus}
                    </Typography>
                    { (postStats > 0) ?  <ArrowUp />: null }
                </Box>
                : <Box className={classes.tableStats}>
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
            }
            <DropdownMenu/>

            {/*<DropdownMenu/>*/}
        </Box>
    );
};


export default TableItem;