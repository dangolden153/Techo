import React from 'react'
import {Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import Navbar from '../../components/Navbar/Navbar';
import DesktopProfilePaper from '../../components/PaperComponent/DesktopProfile';
import ProfileTabs from '../../components/Tabs/ProfileTab'
const DesktopProfile = () => {
    const classes = useStyles();
    return (
        <>
          <div className={classes.root}> 
          
              <Navbar />
        <Grid container className={classes.container}>
        
        <Grid item sm={9} className={classes.center}> 
        <DesktopProfilePaper />

        <ProfileTabs />
       
        </Grid> 
        <Grid item sm={3} className={classes.right}> 
        
        <Typography>
            Hello i am The Desktop view
        </Typography>
        </Grid> 

        </Grid>
          </div>
        </>
    )
}

export default DesktopProfile
