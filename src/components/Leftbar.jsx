import React from 'react'
import {  makeStyles,Container, Typography } from '@material-ui/core'
import {Home,Person,TabletMac,Bookmark,Settings,ExitToApp,Storefront,List,PhotoCamera,PlayCircleOutline} from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
container:{
 paddingTop: theme.spacing(4),
 height:"100vh",
 backgroundColor:theme.palette.primary.main,
 color:"white",
 [theme.breakpoints.up("sm")] : {
backgroundColor: "white" ,
color: "#555",
border:"1px solid #ececec"
},
position:"sticky",
top: 0,

},
icon:{
marginRight: theme.spacing(1),
[theme.breakpoints.up("sm")]: {
 fontSize:"18px",

}
},
item:{
display:"flex",
alignItems:"center",
marginBottom:theme.spacing(4),
[theme.breakpoints.up("sm")] : {
marginBottom: theme.spacing(3),
cursor: "pointer",}
},
text:{
 fontWeight:500,
 [theme.breakpoints.down("sm")]: {
  display:"none",
  
 },

},



}));

const Leftbar = () => {
 const classes = useStyles();
 return (
  <>
   <Container className={classes.container}>
    <div className={classes.item} 
   
    >
  <Home className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Home
  </Typography>
    </div>
    <div className={classes.item}>
  <Person className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Friends
  </Typography>
    </div>
    <div className={classes.item}>
  <List className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Lists
  </Typography>
    </div>
    <div className={classes.item}>
  <PhotoCamera className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Camera
  </Typography>
    </div>
    <div className={classes.item}>
  <PlayCircleOutline className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Videos
  </Typography>
    </div>
    <div className={classes.item}>
  <TabletMac className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Apps
  </Typography>
    </div>
    <div className={classes.item}>
  <Bookmark className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Collections
  </Typography>
    </div>
    <div className={classes.item}>
  <Storefront className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
 Market Place
  </Typography>
    </div>
    <div className={classes.item}>
  <Settings className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
     Settings
  </Typography>
    </div>
    <div className={classes.item}>
  <ExitToApp className={classes.icon} />
  <Typography className={classes.text} variant="h6" >
     Logout
  </Typography>
    </div>
   </Container>
  </>
 )
}

export default Leftbar
