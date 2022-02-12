import React, { useState, useContext } from "react";
import useStyles from "./profilestyle";
import { Grid, Typography, Avatar, Button, Paper } from "@material-ui/core";

import locationIcon from "../../assets/locationIcon.png";
import officeIcon from "../../assets/officeIcon.png";
import studentIcon from "../../assets/studentIcon.png";
import GlobalContext from "../../context/app-context";

import ProfilleImgModal from "../../components/Modal/ProfileImgModal";
import { useSelector } from "react-redux";

const DesktopProfile = () => {
  const { aboutData } = useContext(GlobalContext);
  const { user } = useSelector((state) => state.userReducer);
  const data = false;
const dummyImg = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container className={classes.profileSection}>
        <Grid item className={classes.profileLeft} sm={3}>
          <Avatar src={user?.image || dummyImg} className={classes.profileAvatar} onClick={handleOpen} />
          <ProfilleImgModal
            open={open}
            handleClose={handleClose}
            setOpen={setOpen}
          />
        </Grid>
        <Grid item className={classes.profileRight} sm={9}>
          <div className={classes.profileDetails}>
            <Typography variant="h3" className={classes.profileName}>
              {user?.first_name} {user?.last_name}
            </Typography>
            <Typography variant="body2" className={classes.profileStory}>
              {aboutData
                ? `${aboutData}`
                : "Kindly update Your profile in the about session"}
            </Typography>
            <div className="flex flex-wrap">
                {user?.skills.map((skill, i) =>(
                    <Typography variant="body1" key={i} className={classes.profileRole}>
                        {skill?.skill} ||
             </Typography>
                ))}
            </div>

            <div className={classes.followContainer}>
              <div className={classes.follow}>
                <p className={classes.followValue}>
                {user?.followers}
                </p>
                <p>Followers</p>
              </div>
              <div className={classes.follow}>
                <p className={classes.followValue}>
                {user?.following}
                </p>
                <p>Following</p>
              </div>
            </div>
          </div>

          <Grid container className={classes.trackInfo}>
            <Grid item xm={12} className={classes.dFlexContainer}>
              <div className={classes.dFlex}>
                <img
                  src={locationIcon}
                  alt="techsemester"
                  className={classes.profileIcon}
                />
                <Typography variant="body1" className={classes.profileStory}>
                {user?.state || "-"} {user?.country || "-"}
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <img
                  src={officeIcon}
                  alt="techsemester"
                  className={classes.profileIcon}
                />
                <Typography variant="body1" className={classes.profileStory}>
                  {data ? "location" : "Techsemester"}
                </Typography>
              </div>
              <div className={classes.dFlex}>
                <img
                  src={studentIcon}
                  alt="techsemester"
                  className={classes.profileIcon}
                />
                <Typography variant="body1" className={classes.profileStory}>
                  {data ? "location" : "Contact"}
                </Typography>
              </div>
            </Grid>
            <Grid item xm={12} className={classes.dFlexContainer}>
              <div className={classes.dFlex}>
                <Button className={classes.actionBtns}>Follow</Button>
              </div>
              <div className={classes.dFlex}>
                <Button className={classes.actionBtn}>Message</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DesktopProfile;
