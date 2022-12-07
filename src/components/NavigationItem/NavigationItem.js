
import {Typography,Box} from "@mui/material";
import {NavItemWrap,NavItemText, NavItemLink} from "./NavigationItem.style";
import {NavLink} from "react-router-dom";

const NavigationItem= ({reference,icon,text}) => {
    return (
        <NavLink to={reference} style={NavItemLink}>
            <Box style={NavItemWrap}>
                <Box>{icon}</Box>
                <Typography
                    style={NavItemText}
                    variant='h3'>{text}
                </Typography>
            </Box>
        </NavLink>
    );
};


export default NavigationItem;