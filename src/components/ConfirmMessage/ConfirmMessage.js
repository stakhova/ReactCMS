import React from 'react';
import {Typography} from "@mui/material";
import {useStyles} from "./ConfirmMessage.style";


const ConfirmMessage = ({text}) =>{
    const classes = useStyles();
    return (
          <Typography> {text} </Typography>

    );
}

export default ConfirmMessage;


