import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {Typography, Avatar} from '@material-ui/core'; 
import { Cancel } from '@material-ui/icons';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'; 
import DeleteIcon from '@material-ui/icons/Delete';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {

    top: '50%',
    left: '50%',
    // transform: `translate(-${top}%, -${left}%)`,
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor:'#f5f6ff',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalTop: {
    display:'flex',
    alignItems:'center',
    width:'100% ',
    justifyContent:'space-between',
  },
  modalIcon:{
    color:'#474747', 
    fontSize:'2rem',
  },
  imgContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'2rem',
    marginBottom:'2rem',

    },
    Avatar:{
        width:'10rem',
        height:'10rem',
        margin:'0 auto',
        border:'1px solid #000',
    },

}));

export default function SimpleModal() {
  const classes = useStyles();
  const dataItem = localStorage.getItem('user');
const {email,imageUrl,name,} = JSON.parse(dataItem);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className={classes.modalTop}>
        <Typography variant="h5">
            Profile Photo 
        </Typography>
        <Button onClick={handleClose}>
            <Cancel className={classes.modalIcon} /> 
        </Button>
        </div>
        <div className={classes.imgContainer}>

        <Avatar alt={name} src={imageUrl} className={classes.Avatar} />
        </div>
        <div className={classes.modalTop}>
      
        <Button >
            < AddPhotoAlternateIcon className={classes.modalIcon} /> 
        </Button>
        <Button >
            < DeleteIcon className={classes.modalIcon} /> 
        </Button>
    
        </div>
      
    </div>
  );

  return (
    <div>
      <Button type="button"  onClick={handleOpen}>
        change picture
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
