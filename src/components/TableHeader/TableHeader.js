import {Box} from "@mui/material"
import {useStyles} from "./TableHeader.style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import PenToolsSvg from "../../img/icon/PenToolsSvg";
import {BlogHeaderList, CreateHeaderList} from "./TableHeader.mock";
import TableHeaderItem from "../TableHeaderItem/TableHeaderItem";

const TableHeader = () => {
    const classes = useStyles();

    const urlCreate = window.location.href.endsWith('createView')
    return (
        <Box className={classes.tableHeaderWrap}>
            <Box className={classes.tableHeaderTitle}>
                {urlCreate
                    ? CreateHeaderList.map((elem) => {
                        return (
                            <TableHeaderItem
                                id={elem.id}
                                tableTitle={elem.headerTitle}
                                className={classes.tableTitleCreate}
                            />
                        );
                    })
                    : BlogHeaderList.map((elem) => {
                        return (
                            <TableHeaderItem
                                id={elem.id}
                                tableTitle={elem.headerTitle}
                                className={classes.tableTitleBlog}
                            />
                        );
                    })
                }
            </Box>
            <ButtonCustom
                buttonText='Add new'
                variant='contained'
                startIcon = {<PenToolsSvg/>}
            />
        </Box>
    );
};
export default TableHeader;
