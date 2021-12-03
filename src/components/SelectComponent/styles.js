import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  Container:{
    width:'100%',
    height:'auto',

  },
selectTop:{
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    width:'100%',
    height:'auto',
    
},
collapseBtn:{
    color:'#555555',
    backgroundColor:'e5e5e5',
    height:'10px',
    width:'fit-content',
    fontSize:'2.5rem',
    marginLfet:"5rem",
    
},
radioItem:{
    display:(props) => (props.collapse ? "none" : "flex"),
    flexDirection:'column',
},
selectItem:{
    display:(props) => (props.collapse ? "none" : "flex"),
    flexDirection:'column',
},
check:{
  color:'#1976d2'
}


      
}));