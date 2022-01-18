import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import commentIcon from "../../assets/comment.png";
import downvoteIcon from "../../assets/downvote.png";
import shareIcon from "../../assets/share.png";
import upvotetIcon from "../../assets/upvote.png";
import likeIcon from "../../assets/like.png";
import colorlike from "../../assets/colorlike.png";
import pics from "../../assets/intro.png";
import question from "../../assets/question.png";
import AskComment from "../Comment/AskComment";
import AddComments from "../AddComments";
import useStyles from "./styles";
import { useSelector } from "react-redux";

export default function PostCard({ questions }) {
  const [openComment, setOpenComment] = useState(false);
  // const {body} = questions
  console.log(`questions`, questions?.body);
  const classes = useStyles();
  let likeNo = "230.";
  let commentNo = "30";

  const handleCommet = () => {
    setOpenComment(!openComment);
  };
  return (
    <div>
      <div className="bg-white p-5 shadow-lg">
        {/* <***********avatar name date upvote and down vote****************> */}
        <div className="flex items-center justify-between">
          {/* <***********avatar name and date ****************> */}
          <div className="flex items-center justify-center">
            <img src={pics} alt="" className="h-12 w-12 rounded-full mr-3" />
            <div className="">
              <p className="text-lg font-bold ">Abdusalm Fatai</p>
              <p className="">sep 28, 2021</p>
            </div>
          </div>

          {/* <***********upvote and down vote ****************> */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mr-7">
              <img src={upvotetIcon} alt="up vote" className="h-6 w-6 mx-1 " />
              <p className="text-lg ">10</p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={downvoteIcon}
                alt="down vote"
                className="h-6 w-6 mx-1  "
              />
              <p className="text-lg">10</p>
            </div>
          </div>
        </div>

        {/* <*******divider**********> */}
        <div className="h-px w-full opacity-50 bg-dividerBg my-6" />

        {/* <***********image number of comments ****************> */}
        <div className="">
          <p className="">
            {questions?.body ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, nibh dolor morbi elementum. Sed eu mauris ac viverra congue. Suspendisse mollis suspendisse volutpat ultricies commodo. Malesuada amet purus a eros porttitor ut nunc nisi, nisl."}
          </p>
        </div>

        <img
          src={questions?.imageUrl || question}
          alt=""
          className="w-full my-4"
        />
        <div className="flex items-center justify-start ">
          <img src={colorlike} alt="" className="h-4 w-4" />
          <p className="text-sm">172.4 comments</p>
        </div>

        {/* <*******divider**********> */}
        <div className="h-px w-full opacity-50 bg-dividerBg my-6" />

        {/* <***********like comments and share ****************> */}
        <div className="flex items-center cursor-pointer justify-between w-5/12 md:w-7/12">
          <div className="flex items-center justify-ce">
            <img src={likeIcon} alt="" className="h-5 w-5" />
            <p className="ml-2">like</p>
          </div>

          <div
            onClick={handleCommet}
            className="flex items-center cursor-pointer justify-center "
          >
            <img src={commentIcon} alt="" className="h-5 w-5" />
            <p className="ml-2">Comment</p>
          </div>

          <div className="flex items-center cursor-pointer justify-center ">
            <img src={shareIcon} alt="" className="h-5 w-5" />
            <p className="ml-2">Share</p>
          </div>
        </div>

        {openComment && <AddComments />}
      </div>
    </div>

    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardContent>

    //       {/* //////// Avatar, header and vote flex-row container */}
    //       <div className={classes.cardHead}>
    //         <div className={classes.cardHeadLeft}>
    //           <Avatar
    //             src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272141/use6_xyqgs4.jpg"
    //             alt="profile pick"
    //             className={classes.posterImg}
    //           />

    //           {/* //////////header and date div */}
    //           <div className={classes.nameContainer}>
    //             <Typography
    //               gutterBottom
    //               variant="h6"
    //               component="h6"
    //               className={classes.fullName}
    //             >
    //               Ayeni Daniel
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary" component="p">
    //               Sept.21, 2021
    //             </Typography>
    //           </div>
    //         </div>

    //         {/* ///////////////up and down vote */}
    //         <div className={classes.cardHeadRight}>
    //           <div className={classes.voteContainer}>
    //             <img
    //               src={upvotetIcon}
    //               alt="upvote"
    //               className={classes.voteImg}
    //             />
    //             <Typography className={classes.voteValue} variant="h5">
    //               20
    //             </Typography>
    //           </div>
    //           <div className={classes.voteContainer}>
    //             <img
    //               src={downvoteIcon}
    //               alt="upvote"
    //               className={classes.voteImg}
    //             />
    //             <Typography className={classes.voteValue} variant="h5">
    //               5
    //             </Typography>
    //           </div>
    //         </div>
    //       </div>

    //       {/* End of the head session */}
    //       <hr />
    //       <Typography variant="body1" component="p">
    //         the chip will not be clickable, even if onClick prop is defined.
    //         This can be used, for example, along with the component prop to
    //         indicate an anchor Chip is clickable
    //       </Typography>
    //     </CardContent>
    //     <CardMedia
    //       className={classes.media}
    //       image={imageLink}
    //       title="Contemplative Reptile"
    //     />
    //     <div className={classes.commentSection}>
    //       <img
    //         src={colorlike}
    //         alt="like button"
    //         className={classes.colorlike}
    //       />
    //       <Typography variant="body2">{likeNo}</Typography>
    //       <Typography variant="body2">{`${commentNo} comments`}</Typography>
    //     </div>
    //     <hr />
    //   </CardActionArea>
    //   <CardActions className={classes.postActionsContainer}>
    //     <Button className={classes.actionBtnContainer}>
    //       <img src={likeIcon} alt="likeIcon" className={classes.actionIcon} />
    //       <Typography variant="body1" color="textSecondary">
    //         Like
    //       </Typography>
    //     </Button>
    //     <Button
    //       className={classes.actionBtnContainer}
    //       onClick={handleClickOpenComment}
    //     >
    //       <img
    //         src={commentIcon}
    //         alt="likeIcon"
    //         className={classes.actionIcon}
    //       />
    //       <Typography variant="body1" color="textSecondary">
    //         Comments
    //       </Typography>
    //     </Button>
    //     <Button className={classes.actionBtnContainer}>
    //       <img src={shareIcon} alt="likeIcon" className={classes.actionIcon} />
    //       <Typography variant="body1" color="textSecondary">
    //         Share
    //       </Typography>
    //     </Button>
    //   </CardActions>
    //   {openComment && <AskComment />}
    // </Card>
  );
}
