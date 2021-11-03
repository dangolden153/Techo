import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
container:{
    // display:'flex',
    marginTop:'3rem',
    // justifyContent:'space-between',
    padding:'2rem',
},
// left:{
//     width:'100%',
//     display:'grid',
//     placeItems:'center',
// },
right:{
width:'100%',
display:'grid',
    placeItems:'center',
    [theme.breakpoints.down('sm')]:{
        display:'none',
    }
},



      
}));