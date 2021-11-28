import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
container:{
    padding:'1rem',
    backgroundColor:'#ffffff',
    width:'95%',
    margin:'auto',
    marginTop:'3rem',


},
iconsplit:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0rem 1rem',
    

},

tag:{
color:'#100e86',
fontSize:'1.2rem',

},
tagImg:{
    width:'40px',
    height:'40px',

},
chip:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    marginTop:'1rem',
    marginBottom:'1rem',
},
chipItem:{
    
    margin:'0.5rem 1rem',
},
discover:{
color:'#100e86',
textAlign:'center',
marginTop:'1rem',
},

profileItemContainer:{
    padding:'0.25rem',
    display:'flex',
    alignItems:'center',
    marginBottom:'1rem'
    // justifyContent:'flex-start',
},

    profileImg:{
    width:'50px',
    height:'50px',
    marginRight:'2rem',

},
    askquestionImg:{
    
    marginRight:'2rem',

},
profileItems:{
display:'flex',
flexDirection:'column',

},
profileLinkContainer:{
    display:'grid',
    placeItems:'center',
    borderRadius:'25px',
    textDecoration:'none',
    color:'#100e86',
    height:'3rem',
    width:'95%',
    margin:'0rem auto',
    marginBottom:'1rem',
    border:'2px solid #100e86' ,


},
profileLink:{
    textDecoration:'none',
    marginBottom:'1rem',
    color:'#474747',
},

askPaperContainer:{
width:'100%',
padding:'2rem 1rem 0rem',
[theme.breakpoints.down('sm')] :{
    padding:'1rem 1rem 2rem',

},
marginBottom:'2rem',

},
askText:{
    color:'#474747',
    fontSize:'2rem',
    marginTop:'2rem',
},
sRoot:{
backgroundColor:'#fff',
padding:'1.5rem',
borderRadius:'25px',
border:'1px solid #100e86',
marginTop:'2.2rem',
},
sContainer:{
    display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    [theme.breakpoints.down('sm')]:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',

    }
},

    sItem:{
    display:'flex',
    alignItems:'center',
    marginBottom:'1rem',


    },
    sLogo:{
    width:'15px',
    height:'15px',
    marginRight:'0.5rem',
    },
    hTitle:{
        marginLeft:'0.5rem'
    },
    hMain:{
        marginLeft:'0.5rem'
    },
    cItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        
        alignItems:'center',
        marginBottom:'1rem'

    },
    cLeft:{
        display:'flex',
        flexDirection:'column',
        

    },
    cName:{
        marginBottom:'0rem',
        fontSize:'1rem'
    },
    connectBtn:{
        borderRadius:'15px',
        padding:'0.5rem 1rem',
        border:'1px solid #100e86' 
    },
    sImg:{
        marginRight:'1rem',

    },

    moreBtn:{
    color:'#100e86',
    border:'3px solid #100e86',
    padding:'0.25rem 0.5rem'

    },

    TagContainer:{
            padding:'1rem',
            backgroundColor:'#ffffff',
            width:'100%',
            margin:'auto',
            paddingBottom:'2rem',
    },
    TagTitle:{
        color:'#474747',
        fontSize:'1.2rem',
        marginBottom:'1rem',
    },
    TagSubTitle:{
        color:'#474747',
        fontSize:'0.9rem',
        marginBottom:'1rem',
    },
    TagPaperInput:{
        padding:'0.5rem',
    },
    TagInput:{
        width:'100%',
        border:'none',
        outline:'none',
        padding:'0.5rem',
        backgroundColor:'#fff',
        '&::placeholder':{
            color:'#474747',
            opacity:0.5,
        },
        '&:focus':{
            border:'none',
            outline:'none',
        },
    },

    TagButton:{
        color:'#fff',
        padding:'0.7rem 1.5rem',
        borderRadius:'25px',
        backgroundColor:'#00B4D7',
        border:'none',
        outline:'none',
        marginTop:'1.5rem',
        textTransform:'capitalize',

    },






















      
}));