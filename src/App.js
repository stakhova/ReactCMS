import React from "react";
import './App.scss'

import {Switch, ThemeProvider} from '@mui/material';
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import TableBlog from "./components/TableBlog/TableBlog";
import View from "./pages/View/BlogView";
import StatusItem from "./components/StatusItem/StatusItem";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegPage/RegPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => (

        <ThemeProvider theme={theme}>

            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<PrivateRoute />}>*/}
            {/*            <Route path="/"element={<View />}>*/}
            {/*                <Route index  path="view"  element={<TableBlog/>} />*/}
            {/*                <Route path="createPage" element={<StatusItem />} />*/}
            {/*                <Route path="files" element={<StatusItem />} />*/}
            {/*            </Route>*/}
            {/*        </Route>*/}
            {/*        <Route path="login" element={<PublicRoute restricted />}>*/}
            {/*            <Route index element={<LoginPage />} />*/}
            {/*        </Route>*/}
            {/*        <Route path="registration" element={<PublicRoute restricted />}>*/}
            {/*            <Route index element={<RegPage />} />*/}
            {/*        </Route>*/}
            {/*        <Route path="*" element={<Main/>} />*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}

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

