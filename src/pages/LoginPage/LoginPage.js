import {Box} from "@mui/material";
import FormCustom from "../../components/FormCustom/FormCustom";
import {useStyles} from "./LoginPage.style";
function LoginPage() {
    const classes = useStyles();
    return (
        <>
            <Box className = {classes.loginWrap}>
                <FormCustom />
            </Box>
        </>
    );
};

export default LoginPage;