import { Button} from "@mui/material";



function ButtonCustom({variant,buttonText,startIcon,type} ) {
    return (
        <Button
            variant={variant}
            startIcon={startIcon}
            type={type}
        >
            {buttonText}
        </Button>
    );
};

export default ButtonCustom;