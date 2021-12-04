import React,{useState,useContext} from 'react'
import useStyles from './profilestyle'
import {Grid, Typography, Avatar, Divider, Button,Paper } from '@material-ui/core'
import GroupAvatars from '../Avatar/GroupAvatar';
import locationIcon from '../../assets/locationIcon.png'
import officeIcon from '../../assets/officeIcon.png'
import studentIcon from '../../assets/studentIcon.png'

import ProfilleImgModal from '../../components/Modal/ProfileImgModal'




const DesktopProfile = () => {
const [data, setData] = useState(false);
const dataItem = localStorage.getItem('user');
const {email,imageUrl,name,} = JSON.parse(dataItem);
const [open, setOpen] = useState(false);

let personName = name; 
let personEmail = email;
let personImage = imageUrl; 
const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    };


    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={1} >
   
            <Grid container className={classes.profileSection}>
            <Grid item className={classes.profileLeft} sm={3}>

            <Avatar src={personImage} className={classes.profileAvatar} onClick={handleOpen} />
            <ProfilleImgModal open={open} handleClose={handleClose}/>
            </Grid>
            <Grid item className={classes.profileRight} sm={9} >
                <div className={classes.profileDetails}>
                    <Typography variant="h3" className={classes.profileName} > 
                    {personName}
                    </Typography>
                    <Typography variant="body2" className={classes.profileStory} > 
                    {data ? "This is " : "Kindly update Your profile in the about session" } 

                    </Typography>

                    <Typography variant="body1" className={classes.profileRole} > 
                    {data ? "Name" : `${personEmail}`}
                    </Typography> 
            
                    <div className={classes.followContainer}>
                        <div className={classes.follow}>
                            <p className={classes.followValue}>
                                {data? 'number': '5,130'}
                            </p>
                            <p>
                            Followers
                            </p>
                        </div>
                        <div className={classes.follow}>
                            <p className={classes.followValue}>
                                {data? 'number': '1,100'}
                            </p>
                            <p>
                            Following
                            </p>

                        </div>
                    </div>    
                    {/* <div className={classes.followContainer}>
                    <GroupAvatars />
                    <div className={classes.follow}>
                            <p className={classes.followValue}>
                                {data? 'number': '42'}
                            </p>
                            <p>
                            Mutual Connections
                            </p>

                        </div>
                     </div>    */}
                    
                </div>
                
            <Grid container className={classes.trackInfo}>
            <Grid item xm={12} className={classes.dFlexContainer}>
                <div className={classes.dFlex}>
                    <img src={locationIcon} alt="techsemester"  className={classes.profileIcon}  />
                    <Typography variant="body1" className={classes.profileStory}>
                        {data ? "location" : "Lagos, Nigeria"}
                    </Typography>
                </div>
                <div className={classes.dFlex}>
                    <img src={officeIcon} alt="techsemester"  className={classes.profileIcon}  />
                    <Typography variant="body1" className={classes.profileStory}>
                        {data ? "location" : "Techsemester"}
                    </Typography>
                </div>
                <div className={classes.dFlex}>
                    <img src={studentIcon} alt="techsemester"  className={classes.profileIcon}  />
                    <Typography variant="body1" className={classes.profileStory}>
                        {data ? "location" : "Contact"}
                    </Typography>
                </div>
            </Grid>
            <Grid item xm={12} className={classes.dFlexContainer}>
                <div className={classes.dFlex}>
                <Button className={classes.actionBtns}>
                Follow
                </Button>
                </div>
                <div className={classes.dFlex}>
                <Button className={classes.actionBtn}>
                Message
                </Button>
                </div>
         
            </Grid>
           
            </Grid>
            </Grid>
          
            </Grid>
        </Paper>
    )
}

export default DesktopProfile



















































































































