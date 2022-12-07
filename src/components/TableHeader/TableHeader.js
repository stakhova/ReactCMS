import {Box} from "@mui/material"
import {useStyles} from "./TableHeader.style";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import PenToolsSvg from "../../img/icon/PenToolsSvg";
import {TableHeaderList} from "./TableHeader.mock";
import TableHeaderItem from "../TableHeaderItem/TableHeaderItem";

const TableHeader = () => {
    const classes = useStyles();
    return (
        <Box className={classes.tableHeaderWrap}>
            <Box className={classes.tableHeaderTitle}>
                {TableHeaderList.map((elem) => {
                    return (
                        <TableHeaderItem
                            id = {elem.id}
                            tableTitle = {elem.headerTitle}
                        />
                    );
                })}
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
