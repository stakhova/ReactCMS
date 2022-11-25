const components = {
    MuiContainer:{
        styleOverrides: {
            root: {
                width:'100%',
                maxWidth:"144rem",
                paddingRight:'0',
                paddingLeft:'0'
            },
        },
    },
    MuiButton:{
        styleOverrides: {
            root: {
                color:`#fff`,
                background:`#2A4365`,
                borderRadius:'0.5rem',
                width:'20.1rem',
                padding:"1.8rem 0",
                fontSize:"2rem",
                lineHeight:"2.3rem",
                "&:hover": {
                    background:`#2A4365`,
                }
            },
        },
        variants:[
            {
                props: {variant: "outlined"},
                style:{
                    background:`white`,
                    color:`#2A4365`,
                    border:`0.1rem solid #2A4365`,
                    "&:hover": {
                        background:`#2A4365`,
                        color:`white`,
                    }
                }
            },
            {
                props: {variant: "text"},
                style:{
                    background:`#ED64A6`,
                    color:`white`,
                    padding:"0.7rem 1.2rem",
                    width:'auto',
                    textTransform:'initial',
                    fontSize:"1.5rem",
                    lineHeight:"1.8rem"
                }

            }
        ],
    },
    MuiInput:{
        styleOverrides: {
            root: {
                color:`#fff`,
                background:`#EDF2F7`,
                borderRadius:'0.5rem',
                height:'7rem',
                width:'100%',
                border:'none',
                maxWidth:"43.6rem",
                padding:'1rem'
            },
        }

    }
}
export default components