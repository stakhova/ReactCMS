import {Box,Pagination,PaginationItem} from "@mui/material"

import TableItem from "../TableItem/TableItem";
import TableHeader from "../TableHeader/TableHeader";
import {useState,useMemo} from "react";
import ModalCustom from "../ModalCustom/ModalCustom";
import AddItem from "../AddItem/AddItem";
import { TableBlogList } from "./TableBlog.mock.js";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useStyles} from "./TableBlog.style";
import { createBrowserHistory } from 'history';
import pagination from "./pagination";

function useQuery() {
    const {search} = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}
export function FileView (){
    const classes = useStyles();
    let query = useQuery();
    let init = Number(query.get("page"));
    if (init === 0 || init === -1) {
        init = 1
    }
    let [page, setPage] = useState(init);
    const PER_PAGE = 5;
    console.log('ssssss'+init)
    const history = createBrowserHistory();
    const count = Math.ceil(TableBlogList.length / PER_PAGE);
    const data = pagination(TableBlogList, PER_PAGE, init);
    const linkto = '/view?page='


    const handleChange = (e, p) => {
        setPage(p);
        data.jump(p);
    };

    if(data.currentData().length === 0 ){
        history.replace({ pathname: `${linkto + (page - 1)}`})
    }
    return (
           <Box className={classes.tableWrap}>
                <TableHeader/>
                {data.currentData().map((elem) => {
                    return (
                        <TableItem
                            id = {elem.id}
                            postTitle = {elem.postTitle}
                            postDate = {elem.postDate}
                            postStatus = {elem.postStatus}
                            postStats = {elem.postStats}
                            up = {elem.up}
                        />
                    );
                })}
            <ModalCustom children = {<AddItem/>}/>
            <Pagination
                component = {NavLink}
                hideNextButton
                hidePrevButton
                count = {count}
                size = "large"
                page = {page}
                shape = "rounded"
                onChange = {handleChange}
                renderItem = {(item) => (
                    <PaginationItem
                        component={Link}
                        to={linkto + item.page}
                        {...item}
                    />
                )}
            />

        </Box>
    );
};
export default FileView;
