import {useState} from "react";
import './App.scss'
import {ThemeProvider} from '@mui/material';
import theme from "./theme/theme";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import TableBlog from "./components/TableBlog/TableBlog";
import View from "./pages/View/View";
import CreateView from "./components/CreateView/CreateView";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegPage/RegPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="registration"
                           element = {<PublicRoute restricted>
                                        <RegPage/>
                                    </PublicRoute>
                        }
                    />
                    <Route  path="login"
                           element = {<PublicRoute restricted>
                                        <LoginPage/>
                                    </PublicRoute>
                        }
                    />
                    <Route  path="view"
                           element = { <PrivateRoute>
                               <View/>
                           </PrivateRoute>
                           }
                    />
                    <Route path="*" element={<View/>}>
                        <Route index path="view" element={<TableBlog/>}/>
                        <Route path="createView" element={<CreateView/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;

