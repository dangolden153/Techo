import React,{useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppContext from '../../context/app-context'
import {Button, Container, Grid, Typography, } from '@material-ui/core'

import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import CheckboxSelect from '../../components/SelectComponent/CheckboxSelect'
import CategoryCheckbox from '../../components/SelectComponent/CategoryCheckbox'
import MediaCard from '../../components/MediaCard/MediaCard'
import TagsPaper from '../../components/PaperComponent/TagsPaper'
import MediaNavbar from '../../components/Navbar/MediaNavbar'



const MediaPage = () => {
    const {home, setHome} =  useContext(AppContext);
    const classes = useStyles();



    
    return (
        <>
        <div className={classes.root}>

      
        <MediaNavbar />
        <Grid  className={classes.container} container>
            
            <Grid item xs={0} md={3} className={classes.left}>
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
