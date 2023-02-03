import {Box, Typography} from "@mui/material"
import {useStyles} from "./Filter.style";
import {FilterList} from "./Filter.mock";
import FilterItem from "../FilterItem/FilterItem";

const Filter = ({filter,setFilter}) => {
    const classes = useStyles();
    return (
        <Box className = {classes.filterWrap}>
            <Typography
                className = {classes.filterTitle}
                variant = 'h3'>
                Filter
            </Typography>
            {FilterList.map((elem) => {
                return (
                    <FilterItem
                        id = {elem.id}
                        text = {elem.title}
                        filter={filter}
                        setFilter={setFilter}
                    />
                );
            })}
        </Box>
    );
};
export default Filter;
