import React from 'react'
import { Button, makeStyles, Container,Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
 container: {
  paddingTop: theme.spacing(6),
  marginTop: theme.spacing(5),
 },
}))

const Add = () => {
 const classes = useStyles();
 return (
  <>
   <Container className={classes.container} >

   </Container>
  </>
 )
}

export default Add
