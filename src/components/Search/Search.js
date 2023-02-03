import {Box, TextField} from "@mui/material";
import {useStyles} from "./Search.style";

const Search = ({search, setSearch}) => {
    const classes = useStyles();

    return (
        <TextField
            className = {classes.searchItem}
            onChange={(event) => setSearch(event.target.value)}>
        </TextField>
    );
};

export default Search;