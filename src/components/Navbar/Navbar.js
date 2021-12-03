import React,{useState, useContext,useEffect} from 'react'
import useStyles from './styles'
import { Button, makeStyles,AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from '@material-ui/core'
import { Search, Mail, Notifications,Cancel } from '@material-ui/icons';
import logo from '../../assets/bluelogo.png'
import AppContext from '../../context/app-context'
import {useHistory,Link} from 'react-router-dom';
import TestNav from '../Testing/TestNav' 
import {FaHome} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'






const Navbar = () => {
    const {home, setHome,setOpenSidebar,openSidebar,open,setOpen} =  useContext(AppContext);
  const [activeBtn, setActiveBtn] = useState(true);
  const data = localStorage.getItem('user');
  const {userEmail,imageUrl,name,} = JSON.parse(data);

 
const handleSidebar = () => {
  setOpen(!open);
}

    const classes = useStyles({open,activeBtn});
 

    return (
        <AppBar>
            <Toolbar className={classes.toolbar} >
            <img  src={logo}  className={classes.navImg} alt="nav image" onClick={handleSidebar}   />
            <div className={classes.search}>
              <Search className={classes.searcher} />
 
             <InputBase placeholder="Search...." className={classes.input} />
           <Cancel className={classes.cancel}  />
         </div>
         <div className={classes.navBtnContainer}>
            <Button className={classes.homeBtn} component={Link} to='/home' >
              <div className={classes.btnStack}>
              <FaHome className={classes.homeIcon} />
              
              <Typography className={classes.navTitle} variant="h6">
                    Home
                    </Typography>
                    </div>
                </Button>
            <Button className={classes.mediaBtn} component={Link} to='/media' >
              <div className={classes.btnStack}>
              <BsYoutube className={classes.mediaIcon} />
              <div className={classes.navTitle}>
                    Media
                    </div>
                    </div>
                </Button>
             </div>
         <div className={classes.icons}>
  <Search className={classes.searchButton} onClick={()=> {
   setOpen(true);
  }} />
  
   
    <Badge badgeContent={4} color="secondary" className={classes.barge} >
    <Notifications  />
    </Badge>
    <Avatar src={imageUrl} alt={name} component={Link} to='/profile' />
       <Button className={classes.askBtn } component={Link} to="/ask">
                Ask Question
          </Button> 
        <TestNav />
  </div>

            </Toolbar>


        </AppBar>
    )
}

export default Navbar
