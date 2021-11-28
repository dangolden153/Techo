import React from 'react'
import { Paper, Button, Typography } from '@material-ui/core'
import useStyles from './styles'

const Tagpaper = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.TagContainer}>
            <Typography  className={classes.TagTitle}>
                Tags
            </Typography>
            <Typography  className={classes.TagSubTitle}>
                Add up to 5 tags to describe what your post is about.
            </Typography>
            <Paper className={classes.TagPaperInput} elevation={2}>
                <input className={classes.TagInput} placeholder="eg. (html, css)" />
                </Paper>
                <Button className={classes.TagButton}>Post your question</Button>
        </Paper>
    )
}

export default Tagpaper
