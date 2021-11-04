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






      
}));