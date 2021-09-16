import React from 'react'
import { Button, makeStyles, Container, Typography,Card, CardActionArea,CardMedia,CardContent, CardActions } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
 container: {
  paddingTop: theme.spacing(4),
 },
 media:{
  height: "250px",
  [theme.breakpoints.down("sm")] : {
   height:150,
  }
 },
 card:{
  marginBottom:theme.spacing(3)
 },
 text:{
  marginBottom:theme.spacing(2)
 }


}))


const Post = () => {
 const classes = useStyles();
 return (
  <>
  <Card className={classes.card}>
   <CardActionArea>
    <CardMedia className={classes.media}
      image="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139131/donut1_opdb43.jpg"
      
      title="my post"
      />
      <CardContent>
        <Typography variant="h5">
         My first Post
        </Typography>
        <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio vitae corporis recusandae facilis perspiciatis ab dignissimos placeat nihil eveniet, unde nulla quod officiis in et veniam saepe tempore itaque!
        </Typography>
      </CardContent>
   </CardActionArea>
   <CardActions>
    <Button size="small" color="primary">Share</Button>
    <Button size="small" color="primary">Learn More</Button>
   </CardActions>
  </Card>
  </>
 )
}

export default Post
