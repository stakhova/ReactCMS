import  {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {Box} from "@mui/material";
import TableEditSvg from "../../img/icon/TableEditSvg";
import {EditSvg} from "../../img/icon/EditSvg";
import {DeleteSvg} from "../../img/icon/DeleteSvg";

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
        <div>

            <Box
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
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
                <MenuItem onClick={handleClose}>
                    <EditSvg/>Edit file name</MenuItem>
                <MenuItem onClick={handleClose}><DeleteSvg/>Delete file</MenuItem>
            </Menu>
        </div>
    );
}




// import React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
//
// import Divider from '@mui/material/Divider';
// import {EditSvg} from "../../img/icon/EditSvg";
//
// const StyledMenu = styled(() => (
//     <Menu
//         elevation={0}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'right',
//         }}
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//         }}
//     />
// ))(({ theme }) => ({
//     '& .MuiPaper-root': {
//         borderRadius: 6,
//         marginTop: theme.spacing(1),
//         minWidth: 180,
//         color:
//             theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//         boxShadow:
//             'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//         '& .MuiMenu-list': {
//             padding: '4px 0',
//         },
//         '& .MuiMenuItem-root': {
//             '& .MuiSvgIcon-root': {
//                 fontSize: 18,
//                 color: theme.palette.text.secondary,
//                 marginRight: theme.spacing(1.5),
//             },
//             '&:active': {
//                 backgroundColor: alpha(
//                     theme.palette.primary.main,
//                     theme.palette.action.selectedOpacity,
//                 ),
//             },
//         },
//     },
// }));
//
// const DropdownMenu = () => {
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const open = Boolean(anchorEl);
//
//     const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//
//     return (
//         <div>
//             <Button
//                 id="demo-customized-button"
//                 aria-controls={open ? 'demo-customized-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 variant="contained"
//                 disableElevation
//                 onClick={handleClick}
//                 endIcon={<EditSvg/>}
//             >
//                 Options
//             </Button>
//             <StyledMenu
//                 id="demo-customized-menu"
//                 MenuListProps={{
//                     'aria-labelledby': 'demo-customized-button',
//                 }}
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//             >
//                 <MenuItem onClick={handleClose} disableRipple>
//                     <EditSvg />
//                     Edit
//                 </MenuItem>
//                 <MenuItem onClick={handleClose} disableRipple>
//                     <EditSvg />
//                     Duplicate
//                 </MenuItem>
//                 <Divider sx={{ my: 0.5 }} />
//                 <MenuItem onClick={handleClose} disableRipple>
//                     <EditSvg />
//                     Archive
//                 </MenuItem>
//                 <MenuItem onClick={handleClose} disableRipple>
//                     <EditSvg />
//                     More
//                 </MenuItem>
//             </StyledMenu>
//         </div>
//     );
// }
//
//
//
//
//
//
//
// export default DropdownMenu
//
//
//
//
//
//
//
//
// // import * as React from 'react';
// // import IconButton from '@mui/material/IconButton';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import TableEditSvg from "../../img/icon/TableEditSvg";
// // import {Box} from "@mui/material";
// //
// //
// // const options = [
// //     'None',
// //     'Atria',
// //     'Callisto',
// //     'Dione',
// //     'Ganymede',
// //     'Hangouts Call',
// //     'Luna',
// //     'Oberon',
// //     'Phobos',
// //     'Pyxis',
// //     'Sedna',
// //     'Titania',
// //     'Triton',
// //     'Umbriel',
// // ];
// //
// // const ITEM_HEIGHT = 48;
// //
// // export default function DropdownMenu() {
// //     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// //     const open = Boolean(anchorEl);
// //
// //     const handleClick = (event: React.MouseEvent<HTMLElement>) => {
// //         setAnchorEl(event.currentTarget);
// //     };
// //     const handleClose = () => {
// //         setAnchorEl(null);
// //     };
// //
// //     return (
// //         <Box>
// //             <IconButton
// //                 aria-label="more"
// //                 id="long-button"
// //                 aria-controls={open ? 'long-menu' : undefined}
// //                 aria-expanded={open ? 'true' : undefined}
// //                 aria-haspopup="true"
// //                 onClick={handleClick}
// //             >
// //                 <TableEditSvg />
// //             </IconButton>
// //             <Menu
// //                 id="long-menu"
// //                 MenuListProps={{
// //                     'aria-labelledby': 'long-button',
// //                 }}
// //                 anchorEl={anchorEl}
// //                 open={open}
// //                 onClose={handleClose}
// //                 PaperProps={{
// //                     style: {
// //                         maxHeight: ITEM_HEIGHT * 4.5,
// //                         width: '20ch',
// //                     },
// //                 }}
// //             >
// //                 {options.map((option) => (
// //                     <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
// //                         {option}
// //                     </MenuItem>
// //                 ))}
// //             </Menu>
// //         </Box>
// //     );
// // }
