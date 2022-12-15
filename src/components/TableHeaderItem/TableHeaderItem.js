import {Typography} from "@mui/material";

const TableHeaderItem= ({tableTitle,className}) => {
    return (
        <Typography variant='h4'
                    className={className}
                    sx={{fontWeight:700}}
        >
            {tableTitle}
        </Typography>


    );
};


export default TableHeaderItem;