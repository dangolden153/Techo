import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
    mobileContainer:{
        width:'100%',
        height:'auto',
        overflowX:'hidden',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        

    },
root:{
    width:'100%',
    height:'auto',
    backgroundColor:'#f5f6ff',
    [theme.breakpoints.down('sm')]: {
        height:'auto',
        overflowX:'hidden',
    },
    

},

container:{
    
    marginTop:'3rem',
    
    padding:'1rem',
    width:'95%',
    margin:'auto',
  [theme.breakpoints.down('sm')]:{
      width:'100%',
        marginTop:'2rem',
        overflowX:'hidden',
        // padding:'0',

  }
},

left:{
width:'100%',
display:'block',
position:'sticky',
// overflowY:'scroll',
height:'100vh',
top:'0',
paddingTop:"1rem",

    placeItems:'center',
    [theme.breakpoints.down('sm')]:{
        display:'none',
    }
},
right:{
width:'100%',
display:'block',
position:'sticky',

height:'auto',
top:'0',
paddingTop:"1rem",

    placeItems:'center',
    [theme.breakpoints.down('sm')]:{
        display:'none',
    }
},
selectContainer:{
    backgroundColor:'#ffffff',
    padding:'2rem',
    width:'95%',
    marginTop:'3rem',
    

},
center:{
    backgroundColor:'#f5f6ff',
    paddingTop:'3rem',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    
}





      
}));