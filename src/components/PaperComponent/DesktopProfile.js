import React,{useState} from 'react'
import useStyles from './profilestyle'
import {Grid, Typography, Avatar, Divider, Button,Paper } from '@material-ui/core'
import GroupAvatars from '../Avatar/GroupAvatar';
import locationIcon from '../../assets/locationIcon.png'
import officeIcon from '../../assets/officeIcon.png'
import studentIcon from '../../assets/studentIcon.png'


import {Link} from 'react-router-dom';


const DesktopProfile = () => {
const [data, setData] = useState(false);

    const classes = useStyles();
    return (
        <Paper className={classes.root} >
            <div className={classes.background}>
        <img src=" https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="backdrop"  className={classes.backgroundImg} />
            </div>
            <Divider />
            <Grid container className={classes.profileSection}>
            <Grid item className={classes.profileLeft} sm={3}>

            <Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272141/use6_xyqgs4.jpg" className={classes.profileAvatar} />

            </Grid>
            <Grid item className={classes.profileRight} sm={9} >
                <div className={classes.profileDetails}>
                    <Typography variant="h3" className={classes.profileName} > 
                    {data ? "Name" : "Ayeni Daniel"}
                    </Typography>
                    <Typography variant="body2" className={classes.profileStory} > 
                    {data ? "Name" : "I am an experinced web Developer with great skills in frontend development. I have participated in many couple of intresting projects and am still working on More am currently working at Techsemester"} 

                    </Typography>

                    <Typography variant="body1" className={classes.profileRole} > 
                    {data ? "Name" : "FrontEnd Development"}
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
                    <div className={classes.followContainer}>
                    <GroupAvatars />
                    <div className={classes.follow}>
                            <p className={classes.followValue}>
                                {data? 'number': '42'}
                            </p>
                            <p>
                            Mutual Connections
                            </p>

                        </div>
                     </div>   
                    
                </div>
            </Grid>
          
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
                <Button className={classes.actionBtn}>
                Follow
                </Button>
                </div>
                <div className={classes.dFlex}>
                <Button className={classes.actionBtn}>
                Message
                </Button>
                </div>
                <div className={classes.dFlex}>
                <Button className={classes.actionBtn}>
                More
                </Button>
                </div>
            </Grid>
           
            </Grid>
            </Grid>
        </Paper>
    )
}

export default DesktopProfile



















































































































