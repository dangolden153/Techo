import React from 'react'
import { Paper,Avatar, Typography,Chip } from '@material-ui/core';
import useStyles from './styles';

const AskQuestionPaper = () => {
    const classes = useStyles();
    return (
        <>
      <Paper elevation={2} className={classes.askPaperContainer}>
      <div className={classes.profileItemContainer}>


<Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272141/use6_xyqgs4.jpg" alt="profile pick" className={classes.askquestionImg} />
  <Typography variant="h6" >
      Ayeni Daniel
  </Typography>
</div>

<Typography variant="h2" className={classes.askText}>
    Ask your Question!
</Typography>
              
              
              
    </Paper>  
        </>
    )
}

export default AskQuestionPaper
