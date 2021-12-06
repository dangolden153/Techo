import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { FiEdit2 } from 'react-icons/fi';
import AboutModal from '../Modal/AboutModal';
import  SkillsModal  from '../Modal/SkillsModal';
import  ProjectModal  from '../Modal/ProjectModal';
import  ExperienceModal  from '../Modal/ExperienceModal';
import  EducationModal  from '../Modal/EducationModal';
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
  const {aboutData,skillsData,   experienceData, projectData, educationData} = useContext(GlobalContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [openExperienceModal, setOpenExperienceModal] = useState(false);
  const [openEducationModal, setOpenEducationModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);
  const [openProjectModal, setOpenProjectModal] = useState(false);

  

  const handleOpenAboutModal = () => {
    setOpenAboutModal(true);
  };
  const handleOpenExperienceModal = () => {
    setOpenExperienceModal(true);
  };
  const handleOpenEducationModal = () => {
    setOpenEducationModal(true);
  };
  const handleOpenSkillsModal = () => {
    setOpenSkillsModal(true);
  };
  const handleOpenProjectModal = () => {
    setOpenProjectModal(true);
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
          
        </AccordionSummary>
        <ExperienceModal open={openExperienceModal} setOpen={setOpenExperienceModal} />
        
        <AccordionDetails className={classes.AccordionDetails}>
        <div className={classes.editContainer} >
          <FiEdit2 className={classes.icon} onClick={handleOpenExperienceModal}/>
          </div>
          <Typography>
          { experienceData}
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
        
        </AccordionSummary>
        <EducationModal open={openEducationModal} setOpen={setOpenEducationModal} />
        <AccordionDetails className={classes.AccordionDetails}>
        <div className={classes.editContainer} >
          <FiEdit2 className={classes.icon} onClick={handleOpenEducationModal}/>
          </div>
          <Typography>
          {educationData}
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
         
        </AccordionSummary>
        <ProjectModal open={openProjectModal} setOpen={setOpenProjectModal} />
        <AccordionDetails className={classes.AccordionDetails}>
        <div className={classes.editContainer} >
          <FiEdit2 className={classes.icon} onClick={handleOpenProjectModal}/>
          </div>
          <Typography>
          {projectData}
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
          
        </AccordionSummary>
        <SkillsModal open={openSkillsModal} setOpen={setOpenSkillsModal} />
        <AccordionDetails className={classes.AccordionDetails}>
        <div className={classes.editContainer} >
          <FiEdit2 className={classes.icon} onClick={handleOpenSkillsModal}/>
          </div>
          <Typography>
          {skillsData}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
