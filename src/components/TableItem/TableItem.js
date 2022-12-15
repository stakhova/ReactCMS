import {Box} from "@mui/material";
import StatusItem from "../StatusItem/StatusItem";
import {useStyles} from "./TableItem.style";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import TableName from "./TableName";
import TableAuthor from "./TableAuthor";
import TableStats from "./TableStats";
import TableData from "./TableData";
import TableImgFile from "./TableImgFile";

const TableItem= ({postTitle,postDate,postStatus,postStats,authorName,authorStatus,src}) => {
    const classes = useStyles();
    const url = window.location.href.split('/'),
          urlLast = url[url.length - 1]
    let filePage , viewPage , createPage
    switch (urlLast){
        case 'files':
            filePage = true
            break
        case 'view':
            viewPage = true
            break
        case 'createView':
            createPage = true
            break
        default:
            break
    }

    return (
        <Box className={classes.tableItemWrap}>
            { filePage ? <TableImgFile src={src}/>: null}
            <Box>
                <TableName postTitle={postTitle} />
                { viewPage
                    ?  <TableData variant='h5' postDate={postDate} />
                    : null
                }
            </Box>
            { viewPage
                ? null
                : <TableData variant='h6' postDate={postDate}/>
            }
            { filePage
                ? null
                : <StatusItem postStatus={postStatus}/>
            }
            { createPage
                ? <TableAuthor
                    authorName={authorName}
                    authorStatus={authorStatus}/>
                : null
            }
            { viewPage
                ? <TableStats postStats={postStats}/>
                : null
            }
            <DropdownMenu/>
        </Box>
    );
};


export default TableItem;