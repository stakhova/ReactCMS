
import React, { useState } from "react";
import {Box} from "@mui/material"
import { TableBlogList} from "./TableBlog.mock"
import TableItem from "../TableItem/TableItem";
import {useStyles} from "./TableBlog.style";
import TableHeader from "../TableHeader/TableHeader";
import Pagg from "../Pagg/Pagg";


const TableBlog = () => {
    const classes = useStyles();


    return (
        <Box className={classes.tableWrap}>
            <TableHeader/>
            {TableBlogList.map((elem) => {
                return (
                    <TableItem
                        id={elem.id}
                        postTitle={elem.postTitle}
                        postDate={elem.postDate}
                        postStatus={elem.postStatus}
                        postStats={elem.postStats}
                        up={elem.up}
                    />
                );
            })}
            <Pagg/>
        </Box>
    );
};
export default TableBlog;
