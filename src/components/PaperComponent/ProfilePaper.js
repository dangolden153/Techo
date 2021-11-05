import React from 'react'
import { Paper,Avatar, Typography,Chip } from '@material-ui/core';
import icon from '../../assets/tagicon.png' ;
import {Link} from 'react-router-dom';

import useStyles from './styles'




const TagsPaper = () => {
const classes = useStyles();
    return (
        <>
          <Paper className={classes.container}>
              <div className={classes.profileItemContainer}>


          <Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272141/use6_xyqgs4.jpg" alt="profile pick" className={classes.profileImg} />
            <Typography variant="h6" >
                Ayeni Daniel
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
