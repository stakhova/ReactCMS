import React, { useState } from "react";
import {Box} from "@mui/material"
import { TableBlogList} from "./CreateView.mock"
import TableItem from "../TableItem/TableItem";
import {useStyles} from "./CreateView.style";
import TableHeader from "../TableHeader/TableHeader";
import Pagg from "../Pagg/Pagg";

const CreateView = () => {
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
                        authorName={elem.authorName}
                        authorStatus={elem.authorStatus}
                    />
                );
            })}
            <Pagg/>
        </Box>
    );
};
export default CreateView;
