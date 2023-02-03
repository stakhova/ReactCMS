import { Button} from "@mui/material";

function ButtonCustom({variant,buttonText,startIcon,type,onClick} ) {
    return (
        <Button
            variant = {variant}
            startIcon = {startIcon}
            type = {type}
            onClick = {onClick}
        >
            {buttonText}
        </Button>
    );
};

export default ButtonCustom;