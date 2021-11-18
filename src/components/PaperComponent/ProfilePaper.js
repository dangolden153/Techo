import React,{useContext, useState} from 'react'
import { Paper,Avatar, Typography,Chip } from '@material-ui/core';
import icon from '../../assets/tagicon.png' ;
import {Link} from 'react-router-dom';
import AppContext from '../../context/app-context';


import useStyles from './styles'




const TagsPaper = () => {
    
    const data = localStorage.getItem('user');
    const {email,imageUrl,name,} = JSON.parse(data);
    let personName = name; 
    let personEmail = email;
    let personImage = imageUrl; 
    // const {email, first_name, last_name} = userData;

const classes = useStyles();
    return (
        <>
          <Paper className={classes.container}>
              <div className={classes.profileItemContainer}>


          <Avatar src={personImage} alt="profile pick" className={classes.profileImg} />
            <Typography variant="h6" >
                {/* {last_name +" " + first_name } */}
                {personName}
            </Typography>
          </div>
            <Link className={classes.profileLinkContainer} to="/profile">
            View Profile
            </Link>
            <div className={classes.profileItems}>
            <Typography component={Link} to="/settings"  variant="body1" className={classes.profileLink}>
                Settings
            </Typography>
            <Typography component={Link} to="/about"  variant="body1" className={classes.profileLink}>
                About
            </Typography>
            <Typography component={Link} to="/privacy"  variant="body1" className={classes.profileLink}>
                Privacy Policy 
            </Typography>
            <Typography component={Link} to="/terms"  variant="body1" className={classes.profileLink}>
                Terms & Condition 
            </Typography>
            <Typography component={Link} to="/signout"  variant="body1" className={classes.profileLink}>
                Sign Out
            </Typography>
            </div>
            </Paper>
        </>
    )
}

export default TagsPaper
