import React from 'react'
import useStyles from './styles'
import {Avatar, Typography, Button } from '@material-ui/core'
import commentIcon from '../../assets/comment.png'
import downvoteIcon from '../../assets/downvote.png'
import shareIcon from '../../assets/share.png'
import upvoteIcon from '../../assets/upvote.png'
import likeIcon from '../../assets/like.png';
import colorlike from '../../assets/colorlike.png';
import {TiArrowBack} from 'react-icons/ti';


const PostComment = ({commentData}) => {
    const { comment, userImage, up_vote, down_vote, userName, date} = commentData;
    
const classes = useStyles(); 


    return (
        <>
          
            <div className={classes.Proot}
            >
                <div className={classes.pOne}>
                    <Avatar src={userImage} alt={userName} />
                    <div className={classes.pOneRight}>
                        <Typography className={classes.pOneRightName} variant="h6" component="h6">
                            {userName}
                        </Typography>
                        <Typography className={classes.pOneRightDate} variant="body2" component="p">
                            {date}
                        </Typography>
                        <Typography className={classes.pOneRightContent} variant="body2" component="p">
                            {comment}
                        </Typography>
                <div className={classes.pOneRightBtn}>
                    <div className={classes.leftBtnContainer}>

                        <div className={classes.flex}>
                        <img src={upvoteIcon} alt="like" className={classes.likeImg} />
                        <Typography className={classes.likeValue} variant="h5">
                            {up_vote}
                        </Typography>
                        </div>

                        {/* 343434343434343434 */}
                        <div className={classes.flex}>
                        <img src={downvoteIcon} alt="like" className={classes.likeImg} />
                        <Typography className={classes.likeValue} variant="h5">
                            {down_vote}
                        </Typography>
                        </div>



                        </div>
                        {/* End of left */}
                        <div className={classes.rightBtnContainer}>
                        <div className={classes.flex}>
                      <Button className={classes.btnStar}>
                          <TiArrowBack />
                        </Button>
                        <Typography className={classes.likeValue} variant="h5">
                            Reply
                        </Typography>
                        </div>
                        </div>
                    </div>

                        </div>
                </div>
            
            </div>
          

        </>
    )
}

export default PostComment
