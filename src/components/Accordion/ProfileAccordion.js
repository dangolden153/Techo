import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {BiEditAlt} from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';
import AboutModal from '../Modal/AboutModal';
import GlobalContext from '../../context/app-context';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  editContainer:{
    width:'100%',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    marginTop:'10px',
    marginBottom:'1rem',

  },
  icon:{
    color:'#474747',
    fontSize:'1.4rem',
    marginRight:'10px',
    cursor:'pointer',

  },
  AccordionDetails:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
  },

}));

export default function ControlledAccordions() {
  const {aboutData} = useContext(GlobalContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);

  // const aboutInfo = localStorage.getItem('aboutInfo');
  // const abt = JSON.parse(aboutInfo);

  const handleOpenAboutModal = () => {
    setOpenAboutModal(true);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>About</Typography>
          <Typography className={classes.secondaryHeading}>
              Kindly update your profile
          </Typography>
        </AccordionSummary>
        <AboutModal open={openAboutModal} setOpen={setOpenAboutModal} />
        <AccordionDetails className={classes.AccordionDetails}>
          <div className={classes.editContainer} >
          <FiEdit2 className={classes.icon} onClick={handleOpenAboutModal}/>
          </div>
          <Typography>
          {aboutData}
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Experience</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently have no experience added
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Education</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently have no education added
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Projects</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently have no projects added
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Skills</Typography>
          <Typography className={classes.secondaryHeading}>
            Kindly add your skills
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
