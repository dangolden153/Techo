import React,{useState} from 'react'
import { Button, makeStyles,AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from '@material-ui/core'
import { Search, Mail, Notifications,Cancel } from '@material-ui/icons';
const useStyles = makeStyles((theme) => (
 {
  toolbar:{
   display:"flex",
   justifyContent:"space-between",
   position:"sticky",
   top:0,
  },

  logoLg:{
   display:"none",
   [theme.breakpoints.up("sm")]:{
    display:"block"
   }
  },
  logoSm:{
   display:"block",
   [theme.breakpoints.up("sm")] : {
    display:"none"
   }
  },
  search:{
   display:"flex",
   alignItems:"center",
   backgroundColor:alpha(theme.palette.common.white, 0.15), 
   '&:hover':{
    backgroundColor:alpha(theme.palette.common.white,0.25),
   } ,
   borderRadius:theme.shape.borderRadius,
   width:"50%",
   paddingLeft:"1rem",
     [theme.breakpoints.down("sm")] : {
    display:(props) => 
     (props.open ? "flex" : "none") ,
     width: "70%"
    
   },

  },
  input:{
   color:"white",
   marginLeft: theme.spacing(1),

  },
  cancel:{
     [theme.breakpoints.up('sm')]: {
       display:"none"
     } 
  },
  icons:{
   display:(props) => (props.open ? "none" : "flex"),
   alignItems:"center"
  },
  barge:{
   marginRight:theme.spacing(2),
  },
  searchButton:{
   marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")] :
    {
      display:"none",
    }
  },
 }
));
const Navbar = () => {
  const [open,setOpen] = useState(false);
 const classes = useStyles({open});
 
 return (
  <>
   <AppBar >
<Toolbar className={classes.toolbar}>
 <Typography varinat="h6" className={classes.logoSm} >
DKEYS
 </Typography>
 <Typography varinat="h6" className={classes.logoLg} >
Daniekeys Official
 </Typography>
 <div className={classes.search}>
  <Search />
 
  <InputBase placeholder="Search...." className={classes.input} />
           <Cancel className={classes.cancel} onClick={() => {
             setOpen(false)
           }} />
  </div> 
  <div className={classes.icons}>
  <Search className={classes.searchButton} onClick={()=> {
   setOpen(true);
  }} />
  
    <Badge badgeContent={4} color="secondary"  className={classes.barge}>
    <Mail  />
    </Badge>
    <Badge badgeContent={4} color="secondary" className={classes.barge} >
    <Notifications  />
    </Badge>
    <Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272141/use6_xyqgs4.jpg" />
  </div>
</Toolbar>
   </AppBar>
  </>
 )
}

export default Navbar
