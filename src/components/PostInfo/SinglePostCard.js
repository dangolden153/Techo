import React,{useState} from 'react';

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

import AskComment from '../Comment/AskComment';
import PostComment from '../Comment/PostComment';



import useStyles from './styles'


export default function SimplePostCard({data}) {
const {title,content_image, content, like_Number,comment_Number, share_Number, userImage, up_vote, down_vote, userName, date, comments} = data;

  const classes = useStyles();
  let likeNo = "230.";
  let commentNo = "30";
  const [openComment, setOpenComment] = useState(false);

  const handleClickOpenComment = () => {
    setOpenComment(!openComment);
  };
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
            <div className={classes.cardHead}>
                <div className={classes.cardHeadLeft} >
                <Avatar src={userImage} alt="profile pick" className={classes.posterImg} />
                <div className={classes.nameContainer}>
                <Typography gutterBottom variant="h6" component="h6" className={classes.fullName}>
            {userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
                    </div>

                    </div>
                <div className={classes.cardHeadRight} >
                  <div className={classes.voteContainer}>
                  <img src={upvotetIcon} alt="upvote" className={classes.voteImg} />
                  <Typography className={classes.voteValue} variant="h5">
                    {up_vote}
                  </Typography>
                    </div>
                  <div className={classes.voteContainer}>
                  <img src={downvoteIcon} alt="upvote" className={classes.voteImg} />
                  <Typography className={classes.voteValue} variant="h5">
                    {down_vote}
                  </Typography>
                    </div>

                    </div>

        
        </div>
        {/* End of the head session */}
        <hr />

          <Typography variant="body1"  component="p" >
       {content}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={content_image}
          title="Contemplative Reptile"
        />
        <div className={classes.commentSection}>
        <img src={colorlike} alt="like button" className={classes.colorlike} />
        <Typography variant="body2" >
          {like_Number}
        </Typography>
        <Typography variant="body2" >
          {`${comment_Number} comments`}
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
        <Button className={classes.actionBtnContainer}
        onClick={handleClickOpenComment}
        >
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
      {openComment && <AskComment  />}
      {openComment && <div className={classes.CommentsContainer}>
        {comments.map((comment,index)=>{
          return <PostComment key={index} commentData={comment} />
        }
        )}
        

        </div>
        
        
        
        }
      
   
    </Card>
  );
}
