import React,{useContext,useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppContext from '../../context/app-context'
import { Grid } from '@material-ui/core'

import useStyles from './styles'


import MediaCard from '../../components/MediaCard/MediaCard'
import ProfilePaper from '../../components/PaperComponent/ProfilePaper'
import AskQuestionPaper from '../../components/PaperComponent/AskQuestionPaper'
import PostCard from '../../components/PostCard/PostCard'
import ProfileSummary from '../../components/PaperComponent/ProfileSummary'

import TagsPaper from '../../components/PaperComponent/TagsPaper'





const HomePage = () => {
    useEffect(() => {
        window.scroll(0,0)
}, [])
    const {home, setHome} =  useContext(AppContext);
    const classes = useStyles();
    const [profileShow, setProfileShow] = useState(false);
    
    return (
        <>
        <div className={classes.root}>

        <Navbar setProfileShow={setProfileShow} profileShow={profileShow} />
        <Grid  className={classes.container} container>
           
            
            <Grid item xs={0} md={3} className={classes.left}>
            <div className={classes.profileSection}>

                <ProfileSummary />
                </div>
         
        </Grid>
        <Grid item xs={12} md={6} className={classes.center} >
            
        <AskQuestionPaper />
            <PostCard imageLink="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

            
            <PostCard imageLink="https://images.unsplash.com/photo-1633113088983-12fb3b2fe0ac?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <PostCard imageLink="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <PostCard imageLink="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </Grid>
        <Grid item xs={0} md={3} className={classes.right} >
           {profileShow ? <ProfilePaper /> : <TagsPaper />}
           
        </Grid>
      

        </Grid>


        </div>
        </>
    )
}

export default HomePage
