import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import commentIcon from '../../assets/comment.png'
import downvoteIcon from '../../assets/downvote.png'
import shareIcon from '../../assets/share.png'
import upvotetIcon from '../../assets/upvote.png'
import likeIcon from '../../assets/like.png';
import colorlike from '../../assets/colorlike.png';





import useStyles from './styles'


export default function PostCard({imageLink}) {
  const classes = useStyles();
  let likeNo = "230.";
  let commentNo = "30";

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
            <div className={classes.cardHead}>
                <div className={classes.cardHeadLeft} >
                <Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272141/use6_xyqgs4.jpg" alt="profile pick" className={classes.posterImg} />
                <div className={classes.nameContainer}>
                <Typography gutterBottom variant="h6" component="h6" className={classes.fullName}>
            Ayeni Daniel
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sept.21, 2021
          </Typography>
                    </div>

                    </div>
                <div className={classes.cardHeadRight} >
                  <div className={classes.voteContainer}>
                  <img src={upvotetIcon} alt="upvote" className={classes.voteImg} />
                  <Typography className={classes.voteValue} variant="h5">
                    20
                  </Typography>
                    </div>
                  <div className={classes.voteContainer}>
                  <img src={downvoteIcon} alt="upvote" className={classes.voteImg} />
                  <Typography className={classes.voteValue} variant="h5">
                    5
                  </Typography>
                    </div>

                    </div>

        
        </div>
        {/* End of the head session */}
        <hr />

          <Typography variant="body1"  component="p" >
          the chip will not be clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={imageLink}
          title="Contemplative Reptile"
        />
        <div className={classes.commentSection}>
        <img src={colorlike} alt="like button" className={classes.colorlike} />
        <Typography variant="body2" >
          {likeNo}
        </Typography>
        <Typography variant="body2" >
          {`${commentNo} comments`}
        </Typography>

        </div>
        <hr />
      </CardActionArea>
      <CardActions className={classes.postActionsContainer}>
        <Button className={classes.actionBtnContainer}>
          <img src={likeIcon} alt="likeIcon" className={classes.actionIcon} />
          <Typography variant="body1" color="textSecondary" >
            Like
          </Typography>
        </Button>
        <Button className={classes.actionBtnContainer}>
          <img src={commentIcon} alt="likeIcon" className={classes.actionIcon} />
          <Typography variant="body1" color="textSecondary" >
            Comments
          </Typography>
        </Button>
        <Button className={classes.actionBtnContainer}>
          <img src={shareIcon} alt="likeIcon" className={classes.actionIcon} />
          <Typography variant="body1" color="textSecondary" >
            Share
          </Typography>
        </Button>
      
      </CardActions>
   
    </Card>
  );
}
