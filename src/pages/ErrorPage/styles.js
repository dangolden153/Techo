import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
root:{
    backgroundColor:'#f5f6ff',
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'


},
errorText:{
textAlign:'center',
color:'#100e86',
fontSize:'1.5rem',
[theme.breakpoints.down('sm')]:{
fontSize:'1.1rem',
},

},

errorBtn:{
    textDecoration:'none',
    color:'#fff',
    backgroundColor:'#100e86',
    padding:'0.5rem 1rem',
    margin:'1rem',
},

errorImg:{
    width:'30%',
    height:'auto',
    [theme.breakpoints.down('md')]:{
        width:'80%',
        height:'auto'
    }
    
},




      
}));