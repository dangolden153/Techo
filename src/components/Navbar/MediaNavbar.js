import React,{useState, useContext,useEffect} from 'react'
import useStyles from './styles'
import { Button, makeStyles,AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from '@material-ui/core'
import { Search, Mail, Notifications,Cancel } from '@material-ui/icons';
import logo from '../../assets/bluelogo.png'
import AppContext from '../../context/app-context'
import {useHistory,Link} from 'react-router-dom';
import TestNav from '../Testing/TestNav'






const MediaNavbar = () => {
    const {home, setHome,setOpenSidebar,openSidebar} =  useContext(AppContext);

  const [open,setOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const data = localStorage.getItem('user');
    const {email,imageUrl,name,} = JSON.parse(data);

    const classes = useStyles({open,activeBtn});


    return (
        <AppBar>
            <Toolbar className={classes.toolbar} >
            <img  src={logo}  className={classes.navImg} alt="nav image" onClick={() => setOpenSidebar(!openSidebar)}   />
            <div className={classes.search}>
              <Search className={classes.searcher} />
 
             <InputBase placeholder="Search...." className={classes.input} />
           <Cancel className={classes.cancel} onClick={() => {
             setOpen(false)
           }} />
         </div>
         <div className={classes.navBtnContainer}>
            <Button className={classes.homeBtn} 
            component={Link} to='/home'
            >
                    Home
                </Button>
            <Button className={classes.mediaBtn} 
            component={Link} to='/media'
            >
                    Media
                </Button>
             </div>
         <div className={classes.icons}>
  <Search className={classes.searchButton} onClick={()=> {
   setOpen(true);
  }} />
  
   
    <Badge badgeContent={4} color="secondary" className={classes.barge} >
    <Notifications  />
    </Badge>
    <Avatar src={imageUrl}   alt={name} component={ Link} to='/profile' />
       <Button className={classes.askBtn}>
                Ask Question
          </Button> 
  <TestNav />
  </div>

            </Toolbar>


        </AppBar>
    )
}

export default MediaNavbar
