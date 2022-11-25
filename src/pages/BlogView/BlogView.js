import {Box, Container} from "@mui/material";
import {FlexWrap} from "./BlogView.style";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import TableBlog from "../../components/TableBlog/TableBlog";

function BlogView() {
    return (
        <Box >
            <Header/>
            <Container maxWidth={false} >
                <Box style={FlexWrap}>
                    <Navigation/>
                    <TableBlog/>
                </Box>
            </Container>
        </Box>

    );
};

export default BlogView;