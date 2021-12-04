import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {Typography, Avatar} from '@material-ui/core'; 
import { Cancel } from '@material-ui/icons';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'; 
import DeleteIcon from '@material-ui/icons/Delete';
import GlobalContext from '../../context/app-context';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {

    top: '40%',
    left: '50%',
    // transform: `translate(-${top}%, -${left}%)`,
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    height: 450,
    borderRadius:'7px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    // backgroundColor: theme.palette.background.paper,
    backgroundColor:'#fff',
    
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  modalTop: {
    display:'flex',
    alignItems:'center',
    width:'100% ',
    justifyContent:'space-between',
    paddingBottom:'1rem',
    borderBottom:'1px solid #888',
    padding:'1rem'
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
    imgBtn:{
        position:'relative',

    },
    imgUpload:{
      position:'absolute',
      top:'0',
      bottom:'0',
      right:'0',
      left:'0',
      opacity:'0',


    },
    imgUploadIcon:{
        color:'#474747',
      fontSize:'2rem',
    },
    title:{
        color:'#474747',
        fontSize:'1.5rem',
        
    },
    content:{
      padding:'1rem',
      borderBottom:'1px solid #888',
      paddingBottom:'1rem',

    },
    desc:{
      color:'#474747',
      opacity:'0.7',
      fontSize:'1rem',
      marginBottom:'0.5rem',
    },

    text:{
        color:'#474747',
        fontSize:'1rem',
        marginBottom:'1rem',
        height:'auto',
        minHeight:'10rem', 
        width:'100%',
        border:'none',
        outline:'none',
    },
    textContainer:{
        border:'1px solid #888',
        borderRadius:'4px',
        padding:'0.75rem',
        marginBottom:'1rem',

    },
    btnContainer:{
        display:'flex',
        justifyContent:'flex-end',
        marginTop:'1rem',
        paddingRight:'1rem',
    },
    btn:{
      color:'#fff',
      backgroundColor:'#100e86',
      borderRadius:'10px',
      padding:'0.5rem 1rem',
      '&:hover':{
        backgroundColor:'#0f0e7d',
        color:'#fff',
      }

    },
    

}));

export default function SimpleModal({setOpen,open}) {
  const classes = useStyles();
  const dataItem = localStorage.getItem('user');
const {email,imageUrl,name,} = JSON.parse(dataItem);
const {aboutData, setAboutData} = useContext(GlobalContext);

// const aboutInfo = localStorage.getItem('aboutInfo');
// const abt = JSON.parse(aboutInfo);

const [prevImg, setPrevImg] = useState(imageUrl);


  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [aboutText, setAboutText] = useState('');
  const handleChange = (e) => {
    setAboutText(e.target.value);
    // setAboutData(e.target.value);
  };

  const handleSave = () => {
    // localStorage.setItem('aboutInfo', aboutText);
    setAboutData(aboutText);
    setOpen(false);
    
  };



   const handleCloseAbout = () => {
    setOpen(false);
  };

 const handleImgUpload = (e) => {
    e.preventDefault();
  const files = e.target.files;
  Array.from(files).map((file) => { 
    // URL.createObjectURL(file);
    setPrevImg(URL.createObjectURL(file));
  })
  const data = new FormData();
  data.append('image', files[0]);
  // axios.post('/api/users/upload', data)


 }

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className={classes.modalTop}>
        <Typography variant="h5" className={classes.title}>
            Edit About
        </Typography>
        <Button onClick={handleCloseAbout}>
            <Cancel className={classes.modalIcon} /> 
        </Button>
        </div>
        <div className={classes.content}>
        <Typography className={classes.desc}>
          Description
        </Typography>
        <div className={classes.textContainer}>
        <textarea className={classes.text} value={aboutText} placeholder="Write about yourself" onChange={handleChange}></textarea>

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
      <Button type="button" >
        
      </Button>
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
