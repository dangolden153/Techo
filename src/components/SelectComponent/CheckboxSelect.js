import React,{useState} from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import {Button } from '@material-ui/core';
import './styles.css';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './styles'

const CheckboxSelect = () =>  {
  
  const [state, setState] = React.useState({
    All: true,
    Blogs: false,
    Others: false,
    Podcast: false,
    Video: false,
  });

    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse);
    }


  const classes  = useStyles({collapse});
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { All , Blogs, Others, Podcast, Video } = state;



  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
          <div className={classes.selectTop}>

        <FormLabel component="legend">Media Tags</FormLabel>

        <Button className={classes.collapseBtn} onClick={handleCollapse}>
            -
        </Button>
              </div>
        <FormGroup className={classes.selectItem}>
          <FormControlLabel color="primary"
            control={<Checkbox checked={All} onChange={handleChange} name="All media types" color="primary" className={classes.check} />}
            label="All media types"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Blogs} onChange={handleChange} name="Blogs" variant="primary" color="primary" className={classes.check} />}
            label="Blogs"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Others} onChange={handleChange} name="Others" className={classes.check} />}
            label="Others"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Podcast} onChange={handleChange} name="Podcast" color="primary" className={classes.check} />}
            label="Podcast"
          />
          <FormControlLabel color="primary"
            control={<Checkbox checked={Video} onChange={handleChange} name="Video" color="primary" className={classes.check} />}
            label="Video"
          />
        </FormGroup>
       
      </FormControl>
     
    </div>
  );
}


export default CheckboxSelect
