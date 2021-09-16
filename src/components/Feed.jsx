import React from 'react'
import { Button, makeStyles, Container,Typography } from '@material-ui/core'
import Post from './Post';
const useStyles = makeStyles((theme) => ({
 container: {
  paddingTop: theme.spacing(6),
  marginTop: theme.spacing(5),
 },
}))

const Feed = () => {
 const classes = useStyles();
 return (
  <>
   <Container className={classes.container} >
  <Post />
  <Post />
  <Post />
  <Post />
  <Post />
  <Post />
  <Post />
  <Post />
  <Post />
  <Post />
   </Container>
  </>
 )
}

export default Feed
