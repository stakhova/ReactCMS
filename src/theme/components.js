const components = {
    MuiContainer:{
        styleOverrides: {
            root: {
                width:'100%',
                maxWidth:"144rem",
                paddingRight:'0!important',
                paddingLeft:'0!important'
            },
        },
    },
    MuiList:{
        styleOverrides: {
            root: {
                borderRadius:'0.5rem',
                backgroundColor: '#FFFCFE',
                padding:'2rem 1.6rem 0 2.5rem'
            },
        },
    },
    MuiMenuItem:{
        styleOverrides: {
            root: {
                borderRadius:'0.5rem',
                backgroundColor: '#FFFCFE',
                fontSize: '1.6rem',
                lineHeight: '1.9rem',
                fontWeight: "400",
                marginBottom:"2.4rem",
                'svg':{
                    marginRight:"1.5rem",
                }
            },
        },
    },
    MuiPagination: {
        styleOverrides: {
            root: {
                marginTop:"4.7rem",
                'ul': {
                    justifyContent: 'center',
                    color: `#2C5282`,
                },
            },
        },
    },
    MuiPaginationItem:{
      styleOverrides:{
        root:{
            margin: '0 0.5rem',
            background: '#E2E8F0',
            color:"#2C5282",
            borderRadius:"50%",
            fontSize: '1.6rem',
            lineHeight: '1.9rem',
            fontWeight: "700",
            width:'3rem',
            minWidth:'3rem',
            height:'3rem',
            "&.Mui-selected": {
                backgroundColor: "#2C5282!important",
                color: '#F7FAFC',
            }
        }
      },
    },
    MuiSelected:{
        styleOverrides:{
            root:{
                backgroundColor:  'red',
            }
        },
    },
    MuiButtonBase:{
        styleOverrides: {
            root: {
                justifyContent: 'center',
                fontWeight: '700',
                fontSize:'1.6rem',
                lineHeight:'1.9rem',
                color: `#2C5282`,
                background:"#E2E8F0",
            },
        },
    },
    MuiFormHelperText:{
        styleOverrides: {
            root: {
                fontSize:'1.4rem',
                position:"absolute",
                margin:0,
                bottom:'-7rem',
            },
        },
    },
    MuiButton:{
        styleOverrides: {
            root: {
                color:`#fff`,
                backgroundColor:`#2A4365`,
                borderRadius:'0.5rem',
                width:'20.1rem',
                padding:"1.8rem 0",
                fontSize:"2rem",
                lineHeight:"2.3rem",
                textDecoration:"none",
            },
        },

        variants:[
            {
                props: {variant: "no-back"},
                style:{
                    maxWidth:"max-content",
                    background:'transparent',
                    color:`#3182CE`,
                    border:`none`,
                    textTransform: 'initial',
                    fontSize:"2rem",
                    lineHeight:"2.3rem",
                }
            },
            {
                props: {variant: "string"},
                style:{
                    textDecoration:"none",
                    maxWidth:"max-content",
                    background:'transparent',
                    padding: "1rem 2.4rem ",
                    color:`white`,
                    border:`0.1rem solid white`,
                    textTransform: 'initial',
                    fontSize:"2rem",
                    lineHeight:"2.3rem",
                }
            },
            {
                props: {variant: "footer"},
                style:{
                    textDecoration:"none",
                    maxWidth:"max-content",
                    background:'transparent',
                    padding: "1rem 2.4rem ",
                    color:`white`,
                    textTransform: 'initial',
                    fontSize:"2rem",
                    lineHeight:"2.3rem",
                }
            },
            {
                props: {variant: "mainPage"},
                style:{
                    textDecoration:"none",
                    width:"auto",
                    background:'transparent',
                    padding: "3rem 2.5rem ",
                    color:`white`,
                    border:`0.1rem solid white`,
                    textTransform: 'initial',
                    fontSize:"3rem",
                    lineHeight:"3.5rem",
                }
            },
            {
                props: {variant: "outlined"},
                style:{
                    background:'white',
                    color:`#2A4365`,
                    border:`0.2rem solid #2A4365`,
                    width: "100%",
                    borderRadius: '0.5rem',
                    "&:hover": {
                        border:`0.2rem solid #2A4365`,
                    }

                }
            },
            {
                props: {variant: "main"},
                style:{
                    minWidth: '20.1rem',
                    width: 'max-content',
                    background:'#2A4365',
                    color:'white',
                    border:`0.1rem solid #2A4365`,
                    textTransform: 'initial',
                    fontSize:"2rem",
                    lineHeight:"2.3rem",
                    "&:hover": {
                        background:`#2A4365`,
                        color:`white`,
                    }
                }
            },
            {
                props: {variant: "contained"},
                style:{
                    minWidth: '13.5rem',
                    width: 'max-content',
                    background:'#2A4365',
                    color:'white',
                    border:`0.1rem solid #2A4365`,
                    padding: "1.2rem 2.4rem 1.2rem 1.5rem",
                    textTransform: 'initial',
                    fontSize:"1.6rem",
                    lineHeight:"1.9rem",
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
                    lineHeight:"1.8rem",
                    "&:hover": {
                        background:`#ED64A6`,
                        color:`white`,
                    }
                }
            }
        ],
    },
    MuiFormControl:{
        styleOverrides: {
            root: {
                padding: "0.9rem 4.2rem 2.6rem 4.2rem" ,
                // margin:"0 auto",
                display:"flex",
                alignItems:"center",
                justifyContent:`center`,
                background:"white",
            },
        }
    },
    MuiTextField:{
        styleOverrides: {
            root: {
                color:`#2A4365`,
                background:`#EDF2F7`,
                borderRadius:'0.5rem',
                padding:0,
                fontSize:'1.8rem',
                height:'7rem',

                width:"43.6rem",
                // padding:'1rem',
                "&:before": {
                   border:"none"

                },
                "& > *":{
                    width:'100%',
                    height: "100%",
                    border:"none",
                    outline:'none',
                },
                'fieldset':{
                    border:'none',
                }
            },
        }
    },
    MuiInputLabel:{
        styleOverrides: {
            root: {
                display:"flex",
                alignItems:"center",
                justifyContent:`flex-start`,
                top:'-3rem',
                left:0,
                margin:"none",
                position:"absolute",
                transform:"none"
            },
        }

    }
}
export default components