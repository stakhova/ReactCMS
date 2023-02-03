import {Typography} from "@mui/material";
import {filterItem,filterActive} from "./FilterItem.style";

const FilterItem = ({id, text, filter, setFilter}) => {

    function handleClick() {
        setFilter(id)
        console.log(id)
    }

    return (
        <Typography
            style = { filter===id ? filterActive : filterItem}
            variant = 'h3'
            onClick = {() => handleClick()}
        >{text}
        </Typography>
    );
};


export default FilterItem;