import React,{useContext,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppContext from '../../context/app-context'
import {Button, Container, Grid, Typography,Paper } from '@material-ui/core'

import useStyles from './styles'
import Sidebar from '../../components/Sidebar/Sidebar'
import CheckboxSelect from '../../components/SelectComponent/CheckboxSelect'
import CategoryCheckbox from '../../components/SelectComponent/CategoryCheckbox'
import MediaCard from '../../components/MediaCard/MediaCard'
import ProfilePaper from '../../components/PaperComponent/ProfilePaper'
import AskQuestionPaper from '../../components/PaperComponent/AskQuestionPaper'

import Tagpaper from '../../components/PaperComponent/Tagpaper'
import TutorialText from '../../components/CustomText/TutorialText'
import ReactHtmlParser from 'react-html-parser';
import {postQuestion} from '../../services/PostServices'




const AskQuestion = () => {
    useEffect(() => {
        window.scroll(0,0)
}, [])
const [contentValue, setContentValue] = React.useState('')
// console.log(ReactHtmlParser(contentValue));

const handleQuestionPost = (e) => {
    e.preventDefault()
    const data = {
        "user": 0,
        "code": "string",
        "body": contentValue,
        "active": true,
        "title": "string",
        "url": "string",
        "imageUrl": "string",
        "audio_url": "string",
        "video_url": "string",
        "youtube_url": "string",
        "tags": [
          0
        ]
      }
      try {
        postQuestion(data)
      } catch (error) {
        console.log(error)
        }
    

}

    
    const classes = useStyles();
    
    return (
        <>
        <div className={classes.root}>

      
        <Navbar />
        <Grid  className={classes.container} container>
          
            
            <Grid item xs={0} md={3} className={classes.left}>
                <div className={classes.selectContainer}>
                <CheckboxSelect />
                <hr />
                <CategoryCheckbox />
                </div>
       
        </Grid>
        <Grid item xs={12} md={6} className={classes.center} >
            <Paper className={classes.paper}>
        <AskQuestionPaper />
            
         {/* <RichText /> */}
         <TutorialText setContentValue={setContentValue} contentValue={contentValue} />
         <Tagpaper handleQuestionPost={handleQuestionPost}  />
            
        </Paper>
        </Grid>
        <Grid item xs={0} md={3} className={classes.right} >
        
           <ProfilePaper  />
        </Grid>
      

        </Grid>


        </div>
        </>
    )
}

export default AskQuestion
