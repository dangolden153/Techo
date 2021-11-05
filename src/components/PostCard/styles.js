import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({


  root: {
    width:'100%',
    marginBottom:'2rem',
    padding:'1rem',
  },
  media: {
    height: 300,
  },
cardHead:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
},
cardHeadLeft:{
display:'flex',
alignItems:'center'
},
cardHeadRight:{
display:'flex',
alignItems:'center',
justifyContent:'flex-end',
},
posterImg:{
marginRight:'1.5rem',
[theme.breakpoints.down('sm')]:{
  marginRight:'1rem',
}

},
nameContainer:{
display:'flex',
flexDirection:'column',

},
fullName:{
    marginBottom:'0rem',
    [theme.breakpoints.down('sm')]:{
      fontSize:'0.9rem'
    }
},
voteContainer:{
display:'flex',
alignItems:'center',
marginRight:'1rem',

},
voteValue:{
color:'#100e86',
[theme.breakpoints.down('sm')]:{
  fontSize:'0.9rem'
}

},
voteImg:{
width:'20px',
height:'20px',
[theme.breakpoints.down('sm')]:{
  width:'15px',
  height:'15px',
},

marginRight:'0.5rem',
fontSize:'1.1rem',
},

commentSection:{
display:'flex',
alignItems:'center',
marginTop:'1rem',
},




colorlike:{
  height:'10px',
  width:'10px',
  marginRight:theme.spacing(1),
},


actionBtnContainer:{
display:'flex',
alignItems:'center',
marginRight:'1rem',
},


actionIcon:{
  width:'20px',
  height:'20px',
  marginRight:'1rem',
  [theme.breakpoints.down('sm')]:{
    width:'15px',
    height:'15px',
    marginRight:'0.5rem',
  }

},


postActionsContainer:{
  display:'flex',
  justifyContent:'flex-start',
  alignItems:"center",

}







      
}));