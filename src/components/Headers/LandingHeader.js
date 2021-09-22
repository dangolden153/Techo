import React,{useState,useEffect} from 'react'
import { Button, makeStyles,AppBar, Toolbar,  InputBase, alpha,  } from '@material-ui/core'
import { Search, Cancel } from '@material-ui/icons';
import landingimage from '../../assets/techsemester-img.png';
import {Link} from 'react-router-dom' 
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
   border:'1px solid #100E86'

  },
  input:{
   color:"#100E86",
   marginLeft: theme.spacing(1),
   [theme.breakpoints.down('sm')]: {
       width: '80%',
   },
    
  },
  appbar:{
    boxShadow:(props) => 
    (props.className ? '' : 'none'), 
    // boxShadow:'none'
    marginBottom:'2rem',
    zIndex:'999999',
    backgroundColor:'#fff',
    [theme.breakpoints.down('sm')]:{
      marginBottom:'5rem !important',
    }
  },
  cancel:{
     [theme.breakpoints.up('sm')]: {
       display:"none"
     } 
  },
  logoImg:{
        width:'200px',
        height: 'auto',
        [theme.breakpoints.down('sm')]:{
            display:(props) => (props.open ? "none" : "flex"),
            width:'50%',
            height:'auto'
        }
  },
  icons:{
   display:(props) => (props.open ? "none" : "flex"),
   [theme.breakpoints.up('sm')]: {
    display:'flex',
   },
   alignItems:"center"
  },
  barge:{
   marginRight:theme.spacing(2),
  },
  phone:{
      display:'none',
      [theme.breakpoints.down('sm')]:{
        display:'flex',
        alignItems:'center',
      },
  },
  desktop:{
      display:'flex',
      alignItems:'center',
      [theme.breakpoints.down('sm')]:{
        display:'none'
      },
  },
  linkItem:{
      marginRight: theme.spacing(2),
      textDecoration:'none',
      color:'#100E86',
      [theme.breakpoints.down('sm')]: {
          marginRight:theme.spacing(1),
      }
  },
  linkItemCreate:{
      marginRight: theme.spacing(2),
      border:'1px solid #100E86',
      padding:'0.25rem 1rem',
      textDecoration:'none',
      color:'#fff',
      backgroundColor:'#100e86',
      [theme.breakpoints.down('sm')]: {
          marginRight:theme.spacing(1),
      }
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
  const [className, setClassName] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      // if (!className) {
      setClassName(true)
      // }
    } else {
      // if (className) {
      setClassName(false)
      // }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

 const classes = useStyles({open,className});

 
 useEffect(() => {
    window.addEventListener('resize', function(event){
        let newWidth = window.innerWidth;
        if(newWidth > 770) {
            setOpen(false);
        }
    });
    
 }, [])
 return (
  <>
   <AppBar color="transparent" className={classes.appbar} >
<Toolbar className={classes.toolbar}>
<img src={landingimage} className={classes.logoImg} alt="techsemester logo" />

 <div className={classes.search}>
  <Search />
 
  <InputBase placeholder="Search by answer or questions" className={classes.input} fullWidth="true" />
           <Cancel className={classes.cancel} onClick={() => {
             setOpen(false)
           }} />
  </div> 
  <div className={classes.icons}>
  <Search className={classes.searchButton} onClick={()=> {
   setOpen(true);
  }} />

  <div className={classes.phone}>
  <Link to='./login' className={classes.linkItem} >
        Login
      </Link>
      <Link to='./signup' className={classes.linkItemCreate} >
        Signup
      </Link>
      </div>
  <div className={classes.desktop}>

  <Link to='./homepage' className={classes.linkItem} >
        Home
      </Link>
  <Link to='./signup' className={classes.linkItem} >
        Login
      </Link>
  <Link to='./signup' className={classes.linkItemCreate} >
        Create Account
      </Link>
      </div>

  
   
  </div>
</Toolbar>
   </AppBar>
  </>
 )
}

export default Navbar
