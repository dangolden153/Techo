import React from 'react'
import { Button, makeStyles, Container,Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
 container: {
  paddingTop: theme.spacing(6),
  marginTop: theme.spacing(5),
 },
}))

const Add = () => {
 const classes = useStyles();
 return (
  <>
   <Container className={classes.container} >

   </Container>
  </>
 )
}

export default Add



import React,{useState} from 'react'
// import useStyles from './styles'
import { Button, makeStyles,AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from '@material-ui/core'
import { Search, Mail, Notifications,Cancel } from '@material-ui/icons';
import logo from '../../assets/bluelogo.png'

const useStyles = makeStyles((theme) => (
    {
    toolbar:{
        display:"flex",
        justifyContent:"space-between",
        padding:'0.5rem 4rem',
        position:"sticky",
        top:0,
        backgroundColor:'#ffffff',
        [theme.breakpoints.down('sm')]:{
            padding: '1rem',
        }
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
       navImg:{
           width:'40px',
           height:'auto',

       },
       search:{
        display:"flex",
        alignItems:"center",
        backgroundColor:alpha(theme.palette.common.black, 0.05), 
        '&:hover':{
         backgroundColor:alpha(theme.palette.common.black,0.05),
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
        color:"black",
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
        // backgroundColor:'#666666',
        color:'#666666'
       },
       searchButton:{
        marginRight:theme.spacing(1),
         [theme.breakpoints.up("sm")] :
         {
           display:"none",
         },
         color:'#666666',

       },
       searcher:{
           color:'#666666'
       },
    }



      


    ));



const Navbar = () => {
  const [open,setOpen] = useState(false);

    const classes = useStyles({open});
    

    return (
        <AppBar>
            <Toolbar className={classes.toolbar} >
            <img  src={logo}  className={classes.navImg} alt="nav image"    />
            <div className={classes.search}>
              <Search className={classes.searcher} />
 
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
    )
}

export default Navbar
