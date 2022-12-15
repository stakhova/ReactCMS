import {Box} from "@mui/material"
import { TableFileList } from "./FileView.mock"
import TableItem from "../TableItem/TableItem";
import {useStyles} from "./FileView.style";
import Pagg from "../Pagg/Pagg";

const FileView = () => {
    const classes = useStyles();
    return (
        <Box className={classes.tableWrap}>
            {TableFileList.map((elem) => {
                return (
                    <TableItem
                        id={elem.id}
                        src={elem.img}
                        postTitle={elem.postTitle}
                        postDate={elem.postDate}
                    />
                );
            })}
            <Pagg/>
        </Box>
    );
};
export default FileView;
