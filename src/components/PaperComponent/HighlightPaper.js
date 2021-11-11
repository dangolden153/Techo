import React,{useState} from 'react'
import { Paper,Typography } from '@material-ui/core';
import useStyles from './styles';

const HighlightPaper = () => {
    const classes = useStyles();
    const [data, setData ] = useState(false);

    return (
        <Paper className={classes.sRoot}>
            <div className={classes.sContainer}>
             <Typography variant="body1" className={classes.hTitle}>
                 Highlights
             </Typography>
             <Typography variant="h6" className={classes.hMain}>
                 {data ? 'grop': '3 mutual groups'}
             </Typography>


        <ul className={classes.hList}>
        <li className={classes.hListItem}>
        <Typography variant="body1">
            Techsemester 
        </Typography>
        </li>    
        <li className={classes.hListItem}>
        <Typography variant="body1">
            Techsemester Pro
        </Typography>
        </li>    
        <li className={classes.hListItem}>
        <Typography variant="body1">
            Techsemester Pro max
        </Typography>
        </li>    
        
         </ul>


                </div>
            
        </Paper>
    )
}

export default HighlightPaper
