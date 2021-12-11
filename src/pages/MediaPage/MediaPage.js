import React,{useEffect} from 'react'

import { Grid, Typography, } from '@material-ui/core'

import useStyles from './styles'

import CheckboxSelect from '../../components/SelectComponent/CheckboxSelect'
import CategoryCheckbox from '../../components/SelectComponent/CategoryCheckbox'
import MediaCard from '../../components/MediaCard/MediaCard'
import TagsPaper from '../../components/PaperComponent/TagsPaper'
import MediaNavbar from '../../components/Navbar/MediaNavbar'
import ProfileSummary from '../../components/PaperComponent/ProfileSummary'



const MediaPage = () => {
    useEffect(() => {
            window.scroll(0,0)
    }, [])
    
    const classes = useStyles();



    
    return (
        <>
        <div className={classes.root}>

      
        <MediaNavbar />
        <Grid  className={classes.container} container>
            
            <Grid item xs={0} md={3} className={classes.left}>
                <div className={classes.profileSection}>
                    <ProfileSummary />
                </div>
                <div className={classes.selectContainer}>
                <CheckboxSelect />
                <hr />
                <CategoryCheckbox />
                </div>
       
        </Grid>
        <Grid item xs={12} md={6} className={classes.center} >
            
            <Typography varaint="body1" component="p" >
                showing 50 out of 500
            </Typography>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </Grid>
        <Grid item xs={0} md={3} className={classes.right} >
            {/* {home ? <Home /> : <Media />} */}
           <TagsPaper />
        </Grid>
      

        </Grid>


        </div>
        </>
    )
}

export default MediaPage
