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
padding:'2rem 1rem 4rem',
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













      
}));