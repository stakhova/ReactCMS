import './App.scss'
import {ThemeProvider} from '@mui/material';
import theme from "./theme/theme";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TableBlog from "./components/TableBlog/TableBlog";
import View from "./pages/View/View";
import CreateView from "./components/CreateView/CreateView";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import FileView from "./components/FileView/FileView";
import { RoutePublicList} from "./routes/Route.mock,js";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>

                <Routes>
                    {RoutePublicList.map((elem) => {
                        return (
                            <Route path={elem.path}
                                   element = {<PublicRoute>
                                       {elem.page}
                                   </PublicRoute>
                                   }
                            />
                        );
                    })}
                    <Route  path="view"
                           element = { <PrivateRoute>
                               <View/>
                           </PrivateRoute>
                           }
                    />
                    <Route path="*" element={<View/>}>
                        <Route index path="view" element={<TableBlog/>}/>
                        <Route path="createView" element={<CreateView/>}/>
                        <Route path="files" element={<FileView/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;

