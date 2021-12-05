import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  root:{
      backgroundColor:'#fff',
      
      width:'90%',
      margin:'auto',
     paddingBottom:'1rem',
     padding:'4rem 1rem',
     [theme.breakpoints.down('sm')]: {
        padding:'2rem 1rem',
     
        marginTop:'2rem',


     },

  },

  profileSection:{
    padding:'0rem 1rem 2rem',
    width:'100%',
    marginTop:'1rem',
    [theme.breakpoints.down('sm')]: {
        padding:'0rem 1rem 2rem',
        width:'100%',
        marginTop:'0rem',
        paddingBottom:'1rem',
    },  
  },
background:{
width:'100%',
height:50,
marginBottom:'0.5rem',

},

profileLeft:{
    display:'flex',
    justifyContent:'center',

},
backgroundImg:{
width:'100%',
height:60,



},


profileRight:{

},

profileAvatar:{
width:'140px',
height:'140px',
[theme.breakpoints.down('sm')]: {
    width:'100px',
    height:'100px',
    },
cursor:'pointer',

},

profileRight:{

},

profileDetails:{
width:'90%',
},

profileName:{
marginBottom:'0.25rem',
fontSize:'1.3rem',
color:'#474747',
},

profileStory:{
    marginBottom:'0.25rem',
color:'#474747',
fontSize:'0.8rem',

},
profileRole:{
    marginBottom:'0.25rem',
color:'#474747',
fontSize:'0.9rem',
fontWeight:'bold',
},
followContainer:{
    display:'flex',
    alignItems:'center',
},
follow:{
display:'flex',
marginRight:'0.45rem',
alignItems:'center',
marginTop:'0.5rem',
fontWeight:'500',


},
followValue:{
fontWeight:'700',
marginRight:'0.2rem',
},

dFlexContainer:{
    display:'flex',
    alignItems:'center',
    
    width:'100%',
    padding:'0.5rem 0rem'

},
dFlex:{
    display:'flex',
    alignItems:'center',
    // justifyContent:'space-evenly',
    width:'100%',

},
profileIcon:{
    width:'15px',
    height:'15px',
    marginRight:'0.5rem'

},
trackInfo:{
    marginLeft:'0rem',
},

actionBtn:{
border:'2px solid #100e86',
padding:' 0.5rem 3em',
color:'#100e86',
[theme.breakpoints.down('sm')]:{
    padding:'0.5rem 1rem',
},
},

actionBtns:{
    color:'#fff',
    backgroundColor:'#100e86',
    padding:'0.5rem 3rem',
    border:'none',
    fontSize:'0.8rem',
    fontWeight:'500',
    cursor:'pointer',
    marginRight:'0.5rem',
    [theme.breakpoints.down('sm')]:{
        padding:'0.5rem 1rem',

    },
},

      
}));




















































































