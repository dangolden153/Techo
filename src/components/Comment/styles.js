import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({


commentContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'10px',

},
avatar:{
    width:'30px',
    height:'30px',
    marginRight:'10px',

},
inputContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    padding:'0.5rem 1rem',
    backgroundColor:'#e5e5e5',
    borderRadius:'10px',
},
input:{
    width:'100%',
    
    border:'none',
    outline:'none',
    fontSize:'14px',
    fontFamily:'inherit',
    fontWeight:'inherit',
    color:'inherit',
    backgroundColor:'transparent',
},
btn:{
    backgroundColor:'#100e86',
    color:'#fff',
    fontSize:'11px',
    fontFamily:'inherit',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    padding:'0.5rem 1rem',
    borderRadius:'10px',
    marginLeft:'10px',
    '&:hover':{
        backgroundColor:'#100e86',
        color:'#fff',
    },
}



      
}));