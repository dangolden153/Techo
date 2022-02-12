import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import GlobalContext from "../../context/app-context";
import {addUserCertification} from '../../reducers/actions/profiles'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: "40%",
    left: "50%",

    transform: "translate(-50%, -50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    height: 450,
    borderRadius: "7px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },

    backgroundColor: "#fff",

    boxShadow: theme.shadows[5],
  },
  modalTop: {
    display: "flex",
    alignItems: "center",
    width: "100% ",
    justifyContent: "space-between",
    paddingBottom: "1rem",
    borderBottom: "1px solid #888",
    padding: "1rem",
  },
  modalIcon: {
    color: "#474747",
    fontSize: "2rem",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  Avatar: {
    width: "10rem",
    height: "10rem",
    margin: "0 auto",
    border: "1px solid #000",
  },
  imgBtn: {
    position: "relative",
  },
  imgUpload: {
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    opacity: "0",
  },
  imgUploadIcon: {
    color: "#474747",
    fontSize: "2rem",
  },
  title: {
    color: "#474747",
    fontSize: "1.5rem",
  },
  content: {
    padding: "1rem",
    borderBottom: "1px solid #888",
    paddingBottom: "1rem",
  },
  desc: {
    color: "#474747",
    opacity: "0.7",
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },

  text: {
    color: "#474747",
    fontSize: "1rem",
    marginBottom: "1rem",
    height: "auto",
    minHeight: "10rem",
    width: "100%",
    border: "none",
    outline: "none",
  },
  textContainer: {
    border: "1px solid #888",
    borderRadius: "4px",
    padding: "0.75rem",
    marginBottom: "1rem",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1rem",
    paddingRight: "1rem",
  },
  btn: {
    color: "#fff",
    backgroundColor: "#100e86",
    borderRadius: "10px",
    padding: "0.5rem 1rem",
    "&:hover": {
      backgroundColor: "#0f0e7d",
      color: "#fff",
    },
  },
}));

export default function SimpleModal({ setOpen, open }) {
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("https://getnave.com/blog/wp-content/uploads/2018/01/what-is-project-management-process.png");
  
  const classes = useStyles();
  const dispatch = useDispatch();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const handleChange = (e) => {
    setName(e.target.value);
  };

 

  const handleSave = () => {
    const data = {
      user: 13,
      name:name,
      image_url
    }
    dispatch(addUserCertification(data));
    setOpen(false);
  };

  const handleCloseAbout = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.modalTop}>
        <Typography variant="h5" className={classes.title}>
          Edit Certification
        </Typography>
        <Button onClick={handleCloseAbout}>
          <Cancel className={classes.modalIcon} />
        </Button>
      </div>
      <div className={classes.content}>
        <Typography className={classes.desc}>Your Name</Typography>
        <div className={classes.textContainer}>
          <textarea
            className={classes.text}
            value={name}
            placeholder="write about your certification..."
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <Button className={classes.btn} onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Button type="button"></Button>
      <Modal
        open={open}
        onClose={handleCloseAbout}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
