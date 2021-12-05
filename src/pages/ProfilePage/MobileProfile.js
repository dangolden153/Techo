import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import DesktopProfilePaper from '../../components/PaperComponent/DesktopProfile';
import ProfileTabs from '../../components/Tabs/ProfileTab'
import SummaryPaper from '../../components/PaperComponent/SummaryPaper';
import HighlightPaper from '../../components/PaperComponent/HighlightPaper';
import SuggestConnection from '../../components/PaperComponent/SuggestConnection';
import useStyles from './styles';
const MobileProfile = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.mobileContainer}>

            <Navbar />
            <div className={classes.root}>
                <div className={classes.container}>
                    <DesktopProfilePaper />
                    <ProfileTabs />
                    <SummaryPaper />
                    <HighlightPaper />
                    <SuggestConnection />

                    </div>
                    </div>       
        </div>
        </>
    )
}

export default MobileProfile
