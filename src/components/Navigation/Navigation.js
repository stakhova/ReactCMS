import {Box, Typography} from "@mui/material"
import NavigationItem from "../NavigationItem/NavigationItem"
import {NavList, BottomNavList} from "./Navigation.mock"
import {useStyles} from "./Navigation.style";

const Navigation = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.navigationWrap}>
            <Typography
                className = {classes.navigationTitle}
                variant = 'h3'>
                Manage
            </Typography>
            {NavList.map((elem) => {
                return (
                    <NavigationItem
                        id = {elem.id}
                        icon = {elem.svg}
                        text = {elem.title}
                        reference = {elem.reference}
                    />
                );
            })}
            <Typography
                className = {classes.navigationTitle}
                variant = 'h3'>
                Pro features
            </Typography>
            {BottomNavList.map((elem) => {
                return (
                    <NavigationItem
                        id = {elem.id}
                        icon = {elem.svg}
                        text = {elem.title}
                        reference = {elem.reference}
                    />
                );
            })}
        </Box>
    );
};
export default Navigation;
