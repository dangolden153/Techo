import React,{useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'

import { Grid, Typography,Paper } from '@material-ui/core'

import useStyles from './styles'

import CheckboxSelect from '../../components/SelectComponent/CheckboxSelect'
import CategoryCheckbox from '../../components/SelectComponent/CategoryCheckbox'

import ProfilePaper from '../../components/PaperComponent/ProfilePaper'
import AskQuestionPaper from '../../components/PaperComponent/AskQuestionPaper'


import {askQuestion} from '../../services/PostServices'




const AskQuestion = () => {
    useEffect(() => {
        window.scroll(0,0)
}, [])
    const [code, setCode] = useState('')
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [audioUrl, setAudioUrl] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [youtubeUrl, setYoutubeUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [responseData,setResponseData] = useState('');



    const classes = useStyles();
    const handleQuestionPost = (e) => {
        e.preventDefault()
        setLoading(true);
        const data = {
            "user": 1,
            "code": code,
            "body": body,
            "active": true,
            "title": title,
            "url": url,
            "imageUrl": imageUrl,
            "audio_url": audioUrl,
            "video_url": videoUrl,
            "youtube_url": youtubeUrl,
            "tags": [
                1
            ]

        }
       const result =  askQuestion(data)
         result.then(res => {
                setResponseData(res)
                console.log(responseData);
                setLoading(false);
                setCode('');
                setBody('');
                setTitle('');
                setUrl('');
                setImageUrl('');
                setAudioUrl('');
                setVideoUrl('');
                setYoutubeUrl('');
                alert('Question Posted Successfully');

            }
        )


        
    }

    
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
      
                 
    
       
            
        </Paper>
        <Grid item>
        <div className="row">
        <div className="row">
            <div className="mb-3 col-md-6">
                <input type="text" className="form-control" placeholder="Title" 
                value={title} onChange={(e) => setTitle(e.target.value)}/>
                
            </div>
            <div className="mb-3 col-md-6">
                <input type="text" className="form-control" placeholder="URL"
                  value={url} onChange={(e) => setUrl(e.target.value)}
                />
            </div>
            <div className="mb-3 col-md-6">
                <input type="text" className="form-control" placeholder="Image URL" 
                value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                
            </div>
            <div className="mb-3 col-md-6">
                <input type="text" className="form-control" placeholder="Enter video URL" 
                value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)}/>
                
            </div>
            <div className="mb-3 col-md-6">
                <input type="text" className="form-control" placeholder="Enter youtube URL" 
                value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)}/>
                
            </div>
            <div className="mb-3 col-md-6">
                <input type="text" className="form-control" placeholder="Enter audio URL" 
                value={audioUrl} onChange={(e) => setAudioUrl(e.target.value)}/>
                
            </div>
            <div className="col-md-12 mb-3">
  <textarea className="form-control" placeholder="place your code here"  style={{height: "100px"}}
  value={code} onChange={(e) => setCode(e.target.value)}/>
  
  
</div>
            <div className="col-md-12 mb-3">
  <textarea className="form-control" placeholder="place your question body here"  style={{height: "100px"}}
  value={body} onChange={(e) => setBody(e.target.value)}/>
  
  
</div>
            <div className="col-md-12 mb-3">
                <button className="btn btn-primary px-5 d-block mx-auto" onClick={handleQuestionPost}>
                    {loading? 'Posting...' : 'Post'}
                    
                    
                    </button>
                </div>

            </div>
            </div>
             </Grid>  
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
