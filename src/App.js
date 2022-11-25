import React from "react";
import './App.scss'

import {ThemeProvider, createTheme} from '@mui/material';
import theme from "./theme/theme";
import BlogView from "./pages/BlogView/BlogView";

const App = () => (
        <ThemeProvider theme={theme}>
            <BlogView/>
        </ThemeProvider>
)

export default App;
