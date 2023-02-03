import {Box} from "@mui/material"
import TableItem from "../TableItem/TableItem";
import {useStyles} from "./FileView.style";
import Filter from "../Filter/Filter";
import {useEffect, useState} from "react";
import Search from "../Search/Search";

const FileView = () => {
    const classes = useStyles();
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState([])
    const [data, setData] = useState([])
    const [dataShow, setDataShow] = useState([])

    useEffect(() => {
        fetch("https://picsum.photos/v2/list")
            .then(response => response.json())
            .then(data => setData(data))
    },[])

    useEffect(() => {
        setDataShow(data)
    },[data])

    useEffect(()=>{
        setDataShow(data.filter(elem => ( elem.author.toLowerCase().includes(search))));
    },[search])

    return (
        <Box className = {classes.tableWrap}>
            <Search search={search} setSearch={setSearch}/>
            <Filter filter={filter} setFilter={setFilter}/>
            {dataShow.map((elem,key) => {
                return (
                    <TableItem
                        id = {elem.id}
                        src = {elem.download_url}
                        postTitle = {elem.author}
                        postDate = "4 days ago"
                        key = {key}
                    />
                );
            })}
        </Box>
    );
};
export default FileView;
