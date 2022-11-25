import {Box} from "@mui/material"
import { TableBlogList} from "./TableBlog.mock"
import TableItem from "../TableItem/TableItem";
import {useStyles} from "./TableBlog.style";

const TableBlog = () => {
    const classes = useStyles();
    return (
        <Box className={classes.tableWrap}>
            {TableBlogList.map((elem) => {
                return (
                    <TableItem id={elem.id} postTitle={elem.postTitle} postDate={elem.postDate} postStatus={elem.postStatus}  postStats={elem.postStats} up={elem.up}></TableItem>
                );
            })}
        </Box>
    );
};
export default TableBlog;
