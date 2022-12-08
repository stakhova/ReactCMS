import {Box, Container, Typography} from "@mui/material"

import {FooterList} from "./Footer.mock"
import {useStyles} from "./Footer.style";

import {Link} from "react-router-dom";


const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footerWrap}>
            <Container maxWidth={false} >
                <Box className={classes.footerList}>
                    {FooterList.map((elem) => {
                        return (
                            <Link to={elem.reference}>
                                <Typography variant='h6' className={classes.footerItem}>
                                    {elem.title}
                                </Typography>
                            </Link>
                        );
                    })}
                 </Box>
            </Container>
        </Box>
    );
};
export default Footer;
