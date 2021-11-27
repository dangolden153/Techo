import React from 'react'
import useStyles from './styles'
import {Avatar, Button } from '@material-ui/core'


const AskComment = () => {
const classes = useStyles(); 
const dataItem = localStorage.getItem('user');
const {email,imageUrl,name,} = JSON.parse(dataItem);

    return (
        <>
          <div>
            <div className={classes.commentContainer}
            >
                <Avatar className={classes.avatar} src={imageUrl} alt={name} />
                <div className={classes.inputContainer} >
                    <input className={classes.input} placeholder="Add a comment..." />
                </div>
                <Button className={classes.btn}> 
                 Comment
                </Button>
            </div>
          </div>

        </>
    )
}

export default AskComment
