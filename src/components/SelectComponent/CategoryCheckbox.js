import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Button } from '@material-ui/core';

import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './styles'

const CategoryCheckbox = () =>  {
  
  const [state, setState] = React.useState({
    Technology: true,
    Music: false,
    Health: false,
    Education: false,
    Games: false,
    Sport: false,
  });

    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse);
    }


  const classes  = useStyles({collapse});
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Technology , Music, Health, Education, Games, Sport } = state;



  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
          <div className={classes.selectTop}>

        <FormLabel component="legend">Category</FormLabel>

        <Button className={classes.collapseBtn} onClick={handleCollapse}>
            -
        </Button>
              </div>
        <FormGroup className={classes.selectItem}>
          <FormControlLabel  color="primary"
            control={<Checkbox checked={Technology} onChange={handleChange} name="Technology " />}
            label="Technology "
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Music} onChange={handleChange} name="Music" variant="primary" />}
            label="Music"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Health} onChange={handleChange} name="Health" />}
            label="Health"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Education} onChange={handleChange} name="Education" />}
            label="Education"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Games} onChange={handleChange} name="Games" />}
            label="Games"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Sport} onChange={handleChange} name="Sport" />}
            label="Sport"
          />
        </FormGroup>
       
      </FormControl>
     
    </div>
  );
}


export default CategoryCheckbox
