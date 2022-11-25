import {createTheme} from "@mui/material";
import palette from "./pallete";
import components from "./components";
import typography from "./typography";

const theme = createTheme({
    palette,
    components,
    typography,
    spacing: (factor) => `${1 * factor}rem`
})
export default theme