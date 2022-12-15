import  {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {Box} from "@mui/material";
import TableEditSvg from "../../img/icon/TableEditSvg";
import {EditSvg} from "../../img/icon/EditSvg";
import DeleteThinSvg from "../../img/icon/DeleteThinSvg";

export default function DropdownMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{cursor:"pointer"}}
                onClick={handleClick}>

                <TableEditSvg/>
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem
                    onClick={handleClose}>
                    <EditSvg/>Edit file name
                </MenuItem>
                <MenuItem
                    onClick={handleClose}>
                    <DeleteThinSvg/>Delete file
                </MenuItem>
            </Menu>
        </>
    );
}


