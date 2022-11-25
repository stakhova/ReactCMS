import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    statusItemValue:{

    },
    statusPublished:{
        fontWeight:"400",
        fontSize: '1.6rem',
        lineHeight: '1.9rem',
        borderRadius:'5rem',
        width:'12rem',
        padding:'0.7rem 0',
        textAlign: 'center',
        border: `0.2rem solid ${theme.palette.info.colorPublished}`,
        color:theme.palette.info.colorPublished,
    },
    statusDraft:{
        fontSize: '1.6rem',
        lineHeight: '1.9rem',
        borderRadius:'5rem',
        width:'12rem',
        padding:'0.7rem 0',
        textAlign: 'center',
        border: `0.2rem solid ${theme.palette.info.colorDraft}`,
        color:theme.palette.info.colorDraft,
    },
    statusScheduled:{
        fontSize: '1.6rem',
        lineHeight: '1.9rem',
        borderRadius:'5rem',
        width:'12rem',
        padding:'0.7rem 0',
        textAlign: 'center',
        border: `0.2rem solid ${theme.palette.info.colorScheduled}`,
        color:theme.palette.info.colorScheduled,
    }

}))
