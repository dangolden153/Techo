import { makeStyles } from '@material-ui/core/styles';



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
    padding:'0.5rem 3rem',
    borderRadius:'10px',
    marginLeft:'10px',
    '&:hover':{
        backgroundColor:'#100e86',
        color:'#fff',
    padding:'0.5rem 1.5rem',

    },
},
Proot:{
    marginBottom:'1rem',
    marginTop:'1rem',
},
pOne:{
    display:'flex',
    flexDirection:'row',
},
pOneRight:{
    display:'flex',
    flexDirection:'column',
    marginLeft:'10px',
},
pOneRightName:{
    fontSize:'14px',
    fontFamily:'inherit',
    fontWeight:'inherit',
    color:'inherit',
    marginBottom:'5px',
},
pOneRightDate:{
    fontSize:'12px',
    fontFamily:'inherit',
    fontWeight:'inherit',
    color:'inherit',
    marginBottom:'5px',
},
pOneRightContent:{
    fontSize:'14px',
    fontFamily:'inherit',
    fontWeight:'inherit',
    color:'inherit',
    marginBottom:'5px',
},
pOneRightBtn:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:'10px',
},
leftBtnContainer:{
    display:'flex',
    flexDirection:'row',
    
    alignItems:'center',
},
rightBtnContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    width:'100%',
},
flex:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
},
likeImg:{
    width:'20px',
    height:'20px',
    marginRight:'5px',
},
likeValue:{
    color:'#100e86',
    fontSize:'14px',
    fontFamily:'inherit',
    fontWeight:'inherit',
    marginRight:'5px',
},

    btnStar:{
        color:'#100e86',
        fontSize:'16px',

    },



      
}));