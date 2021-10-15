import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'

export default function OppositeContentTimeline({textRight, textLeft}) {
 
 const classes = useStyles();
 
    return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent className={classes.timeOpp}>
            <Typography className={classes.timeText}>{textLeft}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot  className={classes.timeDot} />
            <TimelineConnector className={classes.timeConnector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.timeTexty}>{textRight}</Typography>
          </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
          <TimelineOppositeContent className={classes.timeOpp} align='right'>
            <Typography className={classes.timeTexy}>Upskill and grow with community support</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot  className={classes.timeDot} />
            <TimelineConnector className={classes.timeConnector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.timeTex}>Share and access local and global opportunities</Typography>
          </TimelineContent>
        </TimelineItem> */}
        {/* <TimelineItem>
          <TimelineOppositeContent className={classes.timeOpp}>
            <Typography className={classes.timeText}>Share and access local and global opportunities</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot  className={classes.timeDot} />
            <TimelineConnector className={classes.timeConnector} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.timeTexty}>Sleep</Typography>
          </TimelineContent>
        </TimelineItem> */}
     
      </Timeline>
    </React.Fragment>
  );
}
