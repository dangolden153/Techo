import React,{useState} from 'react'
import { Button, makeStyles, Container, Typography, Fab, Tooltip,Modal,TextField, MenuItem, FormControlLabel, RadioGroup,Radio,FormLabel, Snackbar,  } from '@material-ui/core'
import {Add as AddIcon} from '@material-ui/icons'
import MuiAlert from '@material-ui/lab/Alert'
function Alert(props) {

 return <MuiAlert elevation={6} varinat="filled" {...props}/>

}
const useStyles = makeStyles((theme) => ({
fab:{
 position:"fixed",
 bottom:20,
 right:20,
},
container: {
 width:550,
 height:550,
 backgroundColor:"white", 
position:"absolute",
top:0,
bottom: 0,
left:0,
right:0,
margin:"auto",
 [theme.breakpoints.down("sm")] : {
  width: "100vw",
  height:"100vh",
 }
},
item:{
 marginBottom: theme.spacing(3),

},
form:{
 padding:theme.spacing(2),
},

}))



const Add = () => {
 const [open, setOpen] = useState(false);
 const [value, setValue] = useState("Female");
 const [openAlert, setOpenAlert] = useState(false);
 const handleChange = (e) => {
  setValue(e.target.value)
 }
 const handleClose= (event, reason) => {
  if(reason === 'clickaway') {
    return;
  }
  setOpenAlert(false);
 }
 const classes = useStyles();
 return (
  <>
 <Tooltip title="Add" aia-label="add" 
 
 onClick={() => setOpen(true)}
 >

  <Fab color="primary" className={classes.fab} >
 <AddIcon />
  </Fab>
  </Tooltip>
  <Modal open={open}>
   <Container className={classes.container}>
<form className={classes.form} autoComplete="off" >
<div className={classes.item}>
<TextField label="Title" style={{width:"100%"}} size="small" />
</div>
<div className={classes.item}>

<TextField label="Title" style={{width:"100%"}} size="small"
multiline
rows={4}
defaultValue="Tell Your Story..."
variant="outlined"


/>
</div>
<div className={classes.item}> 
<TextField 
select label="" value="Public"
>
<MenuItem value="Public"> Public</MenuItem>
<MenuItem value="Private"> Private</MenuItem>
<MenuItem value="Unlisted"> Unlisted</MenuItem>
 </TextField>
</div>
<div className={classes.item}>
       <FormLabel component="legend">Who can comments</FormLabel>
 <RadioGroup aria-label="" name="gender1" value={value} onChange={handleChange}>
    <FormControlLabel value="Friends" control={<Radio size="small" />} label="Friends" />
    <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
    <FormControlLabel value="Everyone" control={<Radio size="small" />} label="Everyone" />
    <FormControlLabel value="Custom" control={<Radio size="small" />} label="Custom(Premium)" 
    disabled
    />
   
  </RadioGroup>
</div>
<div className={classes.item}>
 <Button varinat="outlined" color="primary" style={{marginRight:20}}
 onClick={() => {
  setOpenAlert(true);
 }}
 >
Create
 </Button>
 <Button varinat="outlined" color="secondary"
 onClick={() => setOpen(false)}
 >
Cancel
 </Button>
</div>

</form>
     
   </Container>
  </Modal>
<Snackbar
open={openAlert} autoHideDuration={3000} 
onClose={
 handleClose
}
anchorOrigin={{vertical:"bottom", horizontal:"left"}}
>

<Alert onClose={handleClose} severity="success">
Successfully Added
</Alert>

 </Snackbar>

  </>
 )
}

export default Add
