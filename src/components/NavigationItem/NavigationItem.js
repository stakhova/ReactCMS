
import {Typography,Box} from "@mui/material";
import {NavItemWrap,NavItemText} from "./NavigationItem.style";

const NavigationItem= ({icon,text}) => {
    return (
        <Box style={NavItemWrap}>
            <Box>{icon}</Box>
            <Typography style={NavItemText} variant='h3'>{text}</Typography>
        </Box>
    );
};


export default NavigationItem;