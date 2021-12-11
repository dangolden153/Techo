import React,{useState} from 'react'
import { Paper, Typography, } from '@material-ui/core';
import useStyles from './styles';
import uparrow from '../../assets/uparrow.png'
import downarrow from '../../assets/downarrow.png'
import certification from '../../assets/certification.png'
import ratingIcon  from '../../assets/ratingIcon.png'
import gigsIcon  from '../../assets/gigsIcon.png'
import reviewIcon  from '../../assets/reviewIcon.png'
import studentIcon from '../../assets/studentIcon.png'


const SummaryPaper = () => {
    const classes = useStyles();
    const [data, setData ] = useState(false);

    return (
        <Paper className={classes.sRoot}>
            <div className={classes.sContainer}>
                <div className={classes.sItem}>
            <img src={uparrow} alt="techsemester" className={classes.sLogo} />
            <Typography variant="body1">
                {data? 'info': ' 50000 upvote'}
            </Typography>
                 </div>   
                <div className={classes.sItem}>
            <img src={downarrow} alt="techsemester" className={classes.sLogo} />
            <Typography variant="body1">
                {data? 'info': '300 downloads'}
            </Typography>
                 </div>   
                <div className={classes.sItem}>
            <img src={certification} alt="techsemester" className={classes.sLogo} />
            <Typography variant="body1">
                {data? 'info': '20 Bootcamps'}
            </Typography>
                 </div>   
                <div className={classes.sItem}>
            <img src={ratingIcon} alt="techsemester" className={classes.sLogo} />
            <Typography variant="body1">
                {data? 'info': '3.7 Rating(23)'}
            </Typography>
                 </div>   
                <div className={classes.sItem}>
            <img src={reviewIcon} alt="techsemester" className={classes.sLogo} />
            <Typography variant="body1">
                {data? 'info': '324 reviews'}
            </Typography>
                 </div>   
                <div className={classes.sItem}>
            <img src={studentIcon} alt="techsemester" className={classes.sLogo} />
            <Typography variant="body1">
                {data? 'info': '250 Students'}
            </Typography>
                 </div>   
                <div className={classes.sItem}>
            <img src={gigsIcon} alt="techsemester" className={classes.sLogo} />
            <Typography variant="body1">
                {data? 'info': '250 Gigs'}
            </Typography>
                 </div>   

                </div>
            
        </Paper>
    )
}

export default SummaryPaper
