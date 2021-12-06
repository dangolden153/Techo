import React,{useContext} from 'react'
import useStyles from './styles' 
import AppContext from '../../context/app-context';

import  {Link} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import tagIcon from '../../assets/tagIcon1.png'
import mediaIcon from '../../assets/mediaIcon.png'
import terms from '../../assets/terms.png'
import homeIcon from '../../assets/homeIcon.png'
import privacyIcon from '../../assets/privacyIcon.png'
import profileIcon from '../../assets/profileIcon.png'


const HomeSidebar = () => {
    const {openSidebar} = useContext(AppContext);

    const classes = useStyles({openSidebar});
    return (
                <>
        <div className={classes.Sidebar}>
            <div className={classes.sidebarContent}>
                <div className={classes.sidebarItem}>
            <div className={classes.listItemContainer}>
                    <div className={classes.listItem}>
                    <Link to='/home' className={classes.linkItem}>
                <img src={homeIcon} alt="techsemester" className={classes.linkImg} />
                <Typography variant="h5"   className={classes.linkText} >
                    Home
                </Typography>

                    </Link>
                    <Link   to='/media' className={classes.linkItem}>
                <img src={mediaIcon} alt="techsemester" className={classes.linkImg} />
                <Typography variant="h5"   className={classes.linkText} >
                    Media
                </Typography>

                    </Link>
                    <Link to='/tags' className={classes.linkItem}>
                <img src={tagIcon} alt="techsemester" className={classes.linkImg} />
                <Typography variant="h5"   className={classes.linkText} >
                    Tags
                </Typography>

                    </Link>
                    <Link  to='/profile' className={classes.linkItem}>
                <img src={profileIcon} alt="techsemester" className={classes.linkImg} />
                <Typography variant="h5"  className={classes.linkText} >
                    About
                </Typography>

                    </Link>
                    <Link  to='/privacy' className={classes.linkItem}>
                <img src={privacyIcon} alt="techsemester" className={classes.linkImg} />
                <Typography variant="h5"  className={classes.linkText} >
                    Privacy
                </Typography>

                    </Link>
                    <Link to='/terms' className={classes.linkItem}>
                <img src={terms} alt="techsemester" className={classes.linkImg} />
                <Typography variant="h5"   className={classes.linkText} >
                    Terms and Conditions
                </Typography>
        
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default HomeSidebar
