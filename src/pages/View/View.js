import {Box, Container} from "@mui/material";
import {FlexWrap} from "./View.style";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { Outlet} from "react-router-dom";
function View() {
    return (
        <Box >
            <Header/>
            <Container maxWidth={false} >
                <Box style={FlexWrap}>
                    <Navigation/>
                    <Outlet/>
                </Box>
            </Container>
        </Box>

    );
};

export default View;