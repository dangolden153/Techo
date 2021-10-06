import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    width:'100%',
    overflowX:'hidden',
  },
      svgcenter:{
          display:'flex',
          justifyContent:'center',
          marginTop:theme.spacing(2),
          alignItems:'center',
          height:'100vh',
          backgroundColor:'white',

      },
      svgImage:{
          height:'auto',
          width:'60%',

      },
      center:{
        backgroundColor:'#e6e6ff',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        
        height:'100vh',
      },
      loginButton:{
          
          paddingTop:theme.spacing(4),
          display:'flex',
            justifyContent:'center',
          width:'100%',
      },
      registerBtn:{
             color:'#444444',
             backgroundColor:'white',
             textDecoration:'none',
             padding:'1rem 6rem',
      },
      loginBtn:{
             
             backgroundColor:'#100E86',
             textDecoration:'none',
             padding:'1rem 6rem',
             color:'white',
      },
      registrationContainer:{
            width:'70%',
            margin:'auto',
            textAlign:'center',
            
            [theme.breakpoints.down('sm')]: {
                width:'100%',
            }


      },
      socialContainer:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginTop:'2rem',
          marginBottom:'3rem',
      },
      socialIcon:{
          marginRight:'2rem',
      }










      
}));