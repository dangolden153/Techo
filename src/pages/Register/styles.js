import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  container:{
    width:'100%',
    overflowX:'hidden',
    height:'auto',
    [theme.breakpoints.down('sm')] : {
      backgroundColor:'#f5f6ff',
      paddingTop:'1rem',
    },
  },
      svgcenter:{
          display:'flex',
          justifyContent:'center',
          marginTop:theme.spacing(2),
          alignItems:'center',
          height:'100vh',
          backgroundColor:'white',
          [theme.breakpoints.down('sm')]: {
            width:'100%',
            padding:'1rem',
            height:'auto',
            display:'none'
        },

      },
      svgImage:{
          height:'auto',
          width:'60%',
          [theme.breakpoints.down('sm')]: {
            width:'60%',
            height:'auto',
        },

      },
      center:{
        backgroundColor:'#f5f6ff',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingBottom:'2rem',
        
        height:'auto',
        [theme.breakpoints.down('sm')]: {
          width:'100%',
          padding:'1rem'
      }
      },
      loginButton:{
          
          paddingTop:theme.spacing(4),
          display:'flex',
            justifyContent:'center',
          width:'100%',
      },
      create:{
        fontWeight:'500',
        marginBottom:'2rem',


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
      mainRegBtn:{
        backgroundColor:'#100E86',
        textDecoration:'none',
        width:'100%',
        color:'white',
        padding:'0.5rem 0',
        borderRadius:'10px',
        fontSize:'1.5rem',
      },
      registrationContainer:{
            width:'80%',
            margin:'auto',
            textAlign:'center',
            
            [theme.breakpoints.down('sm')]: {
                width:'100%',
                padding:'1rem'
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
      },
      formSection:{
        width:'100%',
        display:'flex',
        flexDirection:'column',

      },
      formItem:{
        width:'100%',
        // border:'1px solid #555555',
        padding:'1rem ',
        backgroundColor:'#ffffff',
        marginBottom:'2rem',
        borderRadius:'5px',

        

      },
      formId:{
        width:'100%',
        border:'none',
        outlineStyle:'none',

      },
      acc:{
        textDecoration:'none',
          color:'#333',
          marginTop:'1rem',
          fontSize:'1.5rem'
      },











      
}));