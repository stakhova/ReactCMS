
import {Box} from "@mui/material";
import {useStyles} from "./StatusItem.style";


const StatusItem= ({postStatus}) => {
    const classes = useStyles();
    const classCustom = (postStatus === "Published" ? classes.statusPublished : (postStatus === "Draft" ? classes.statusDraft : (postStatus === "Scheduled" ? classes.statusScheduled : null)));
    return (
        <Box className = {classCustom}>{postStatus}</Box>
    );
};


export default StatusItem;