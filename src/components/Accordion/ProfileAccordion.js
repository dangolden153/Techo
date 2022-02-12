import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { FiEdit2 } from "react-icons/fi";
import AboutModal from "../Modal/AboutModal";
import SkillsModal from "../Modal/SkillsModal";
import ProjectModal from "../Modal/ProjectModal";
import ExperienceModal from "../Modal/ExperienceModal";
import EducationModal from "../Modal/EducationModal";
import GlobalContext from "../../context/app-context";
import { useSelector } from "react-redux";
import ExperienceItem from "../ExperienceItem";
import EducationItem from "../EducationItem";
import Projects from "../Projects";
import SkillsItem from "../SkillsItem";
import CertificationModal from "../Modal/CertificationModal";
import AwardsModal from "../Modal/AwardsModal";
import CertificationItem from "../CertificationItem";
import AwardsItem from "../AwardsItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  editContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "10px",
    marginBottom: "1rem",
  },
  icon: {
    color: "#474747",
    fontSize: "1.4rem",
    marginRight: "10px",
    cursor: "pointer",
  },
  AccordionDetails: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

export default function ControlledAccordions() {
  const { aboutData, skillsData, experienceData, projectData, educationData } =
    useContext(GlobalContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [openExperienceModal, setOpenExperienceModal] = useState(false);
  const [openEducationModal, setOpenEducationModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openCertificate, setOpenCertificate] = useState(false);
  const [openAwards, setOpenAwards] = useState(false);
  const { education, project, skill, awards, certification, experience } =
    useSelector((state) => state.ProfileReducer);

  // console.log("education", education);
  // console.log("project", project);
  // console.log("skill", skill);
  // console.log("awards", awards);
  // console.log("certification", certification);
  // console.log("experience", experience);

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
  const handleOpenCertification = () => {
    setOpenCertificate(true);
  };
  const handleOpenAwards = () => {
    setOpenAwards(true);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>About</Typography>
        </AccordionSummary>

        <AboutModal open={openAboutModal} setOpen={setOpenAboutModal} />

        <AccordionDetails className={classes.AccordionDetails}>
          <Typography>
            hello world!! hello world!! hello world!! hello world!!
          </Typography>
          <div className={classes.editContainer}>
            <FiEdit2 className={classes.icon} onClick={handleOpenAboutModal} />
          </div>
        </AccordionDetails>
      </Accordion>

      {/* ********************experience************************* */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Experience</Typography>
        </AccordionSummary>
        <ExperienceModal
          open={openExperienceModal}
          setOpen={setOpenExperienceModal}
        />

        <AccordionDetails className={classes.AccordionDetails}>
          <div className={classes.editContainer}>
            <dv>
              {experience.map((exp, i) => (
                <ExperienceItem exp={exp} key={i} />
              ))}
            </dv>
            <FiEdit2
              className={classes.icon}
              onClick={handleOpenExperienceModal}
            />
          </div>
        </AccordionDetails>
      </Accordion>

      {/* ********************education************************* */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Education</Typography>
        </AccordionSummary>
        <EducationModal
          open={openEducationModal}
          setOpen={setOpenEducationModal}
        />
        <AccordionDetails className={classes.AccordionDetails}>
          <div className={classes.editContainer}>
            <div>
              {education.map((edu, i) => (
                <EducationItem edu={edu} key={i} />
              ))}
            </div>
            <FiEdit2
              className={classes.icon}
              onClick={handleOpenEducationModal}
            />
          </div>
        </AccordionDetails>
      </Accordion>

      {/* ********************Projects************************* */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Projects</Typography>
        </AccordionSummary>
        <ProjectModal open={openProjectModal} setOpen={setOpenProjectModal} />
        <AccordionDetails className={classes.AccordionDetails}>
          <div className={classes.editContainer}>
            <div>
              {project.map((proj, i) => (
                <Projects project={proj} key={i} />
              ))}
            </div>
            <FiEdit2
              className={classes.icon}
              onClick={handleOpenProjectModal}
            />
          </div>
        </AccordionDetails>
      </Accordion>

      {/* ********************Skills************************* */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Skills</Typography>
        </AccordionSummary>
        <SkillsModal open={openSkillsModal} setOpen={setOpenSkillsModal} />
        <AccordionDetails className={classes.AccordionDetails}>
          <div className={classes.editContainer}>
            <div>
              {skill.map((skill, i) => (
                <SkillsItem skills={skill} key={i} />
              ))}
            </div>
            <FiEdit2 className={classes.icon} onClick={handleOpenSkillsModal} />
          </div>
        </AccordionDetails>
      </Accordion>

      {/* ********************Certification************************* */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Certification</Typography>
        </AccordionSummary>
        <CertificationModal
          open={openCertificate}
          setOpen={setOpenCertificate}
        />
        <AccordionDetails className={classes.AccordionDetails}>
          <div className={classes.editContainer}>
            <div>
              {certification.map((cert, i) => (
                <CertificationItem certification={cert} key={i} />
              ))}
            </div>
            <FiEdit2 className={classes.icon} onClick={handleOpenCertification} />
          </div>
        </AccordionDetails>
      </Accordion>

      {/* ********************Awards************************* */}
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Awards</Typography>
        </AccordionSummary>
        <AwardsModal open={openAwards} setOpen={setOpenAwards} />
        <AccordionDetails className={classes.AccordionDetails}>
        <div className={classes.editContainer}>
            <div>
              {awards.map((award, i) => (
                <AwardsItem award={award} key={i} />
              ))}
            </div>
            <FiEdit2 className={classes.icon} onClick={handleOpenAwards} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
