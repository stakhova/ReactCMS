import {Box} from "@mui/material";
import {useStyles} from "./StatusItem.style";

const StatusItem= ({postStatus}) => {
    const classes = useStyles();
    let classCustom = '';
    switch(postStatus) {
        case 'Published':
            classCustom = classes.statusPublished
            break
        case 'published':
            classCustom = classes.statusPublishedFull
            break
        case 'Draft':
            classCustom = classes.statusDraft
            break
        case 'Scheduled':
            classCustom = classes.statusScheduled
            break
        default:
            classCustom = '';
    }
    return (
        <Box className = {[classes.statusItemValue, classCustom]}>
            {postStatus}
        </Box>
    );
};

export default StatusItem;