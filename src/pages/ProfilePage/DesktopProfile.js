import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import DesktopProfilePaper from "../../components/PaperComponent/DesktopProfile";
import ProfileTabs from "../../components/Tabs/ProfileTab";
import SummaryPaper from "../../components/PaperComponent/SummaryPaper";
import HighlightPaper from "../../components/PaperComponent/HighlightPaper";
import SuggestConnection from "../../components/PaperComponent/SuggestConnection";

const DesktopProfile = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
            <SummaryPaper />
            <HighlightPaper />
            <SuggestConnection />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DesktopProfile;
