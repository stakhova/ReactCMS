import {Typography} from "@mui/material";
import {useStyles} from "./TableItem.style";

const TableItem= ({variant,postDate}) => {
    const classes = useStyles();
    const url = window.location.href.split('/'),
        urlLast = url[url.length - 1]

    let classCustom = '';
    switch(urlLast) {
        case 'view':
            classCustom = classes.tableDateView
            break
        default:
            classCustom = classes.tableDate
    }

    return (
        <Typography variant = {variant}  className = {classCustom}>
            Posted {postDate} days ago
        </Typography>
    );
};


export default TableItem;