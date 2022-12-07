import React from "react";
import './App.scss'

import {ThemeProvider} from '@mui/material';
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import TableBlog from "./components/TableBlog/TableBlog";
import View from "./pages/View/BlogView";
import StatusItem from "./components/StatusItem/StatusItem";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegPage/RegPage";

const App = () => (

        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route index path="main" element={<Main/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="registration" element={<RegPage />}/>
                    <Route path="/"element={<View />}>
                        <Route index  path="view"  element={<TableBlog/>} />
                        <Route path="createPage" element={<StatusItem />} />
                        <Route path="files" element={<StatusItem />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
)

export default App;
