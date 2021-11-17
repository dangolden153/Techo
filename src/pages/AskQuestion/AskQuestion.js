import React,{useContext,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppContext from '../../context/app-context'
import {Button, Container, Grid, Typography, } from '@material-ui/core'

import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import CheckboxSelect from '../../components/SelectComponent/CheckboxSelect'
import CategoryCheckbox from '../../components/SelectComponent/CategoryCheckbox'
import MediaCard from '../../components/MediaCard/MediaCard'
import ProfilePaper from '../../components/PaperComponent/ProfilePaper'
import AskQuestionPaper from '../../components/PaperComponent/AskQuestionPaper'
import PostCard from '../../components/PostCard/PostCard'
import HomeSidebar from '../../components/Sidebar/HomeSidebar'
import LinkSidebar from '../../components/Sidebar/LinkSidebar'
import RichText from '../../components/CustomText/RichText' 




const AskQuestion = () => {
    useEffect(() => {
        window.scroll(0,0)
}, [])
    
    const classes = useStyles();
    
    return (
        <>
        <div className={classes.root}>

      
        <Navbar />
        <Grid  className={classes.container} container>
            {/* <HomeSidebar /> */}
        {/* <LinkSidebar variant="temporary" anchor="left"  /> */}
            
            <Grid item xs={0} md={3} className={classes.left}>
                <div className={classes.selectContainer}>
                <CheckboxSelect />
                <hr />
                <CategoryCheckbox />
                </div>
       
        </Grid>
        <Grid item xs={12} md={6} className={classes.center} >
        <AskQuestionPaper />
            
         <RichText />
            
        
        </Grid>
        <Grid item xs={0} md={3} className={classes.right} >
            {/* {home ? <Home /> : <Media />} */}
           <ProfilePaper  />
        </Grid>
      

        </Grid>


        </div>
        </>
    )
}

export default AskQuestion
