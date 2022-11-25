import {Avatar, Box, Button,Container} from "@mui/material";
import { useStyles} from './Header.style'
import LogoFullSvg from "../../img/icon/LogoFullSvg";
import ava from "../../img/avatar.png"



function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.headerWrap}>
            <Container maxWidth={false} >
                <Box className={classes.headerBlock}>
                    {/*<Link>*/}
                        <LogoFullSvg/>
                    {/*</Link>*/}
                    <Box className={classes.headerInfo}>
                        <Button variant='text'> Pro plan</Button>
                        <Avatar
                            className={classes.headerAvatar}
                            alt="Remy Sharp"
                            src={ava}
                            sx={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;