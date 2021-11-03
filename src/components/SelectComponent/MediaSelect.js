import React,{useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Button, Checkbox} from '@material-ui/core'



import useStyles from './styles'


const MediaSelect = ({label, data}) => {
  const [value, setValue] = useState(data[1]);
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
      setCollapse(!collapse);
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles({collapse});

  return (
    <FormControl component="fieldset" className={classes.Container}>
        <div className={classes.selectTop}>
      <FormLabel component="legend">{label}</FormLabel>
        <Button className={classes.collapseBtn} onClick={handleCollapse}>
            -
        </Button>
      

      </div>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} className={classes.radioItem}>
          {data.map((item,index) => { 
              return (
                  <>
        <FormControlLabel value={item.text} control={<Radio />} label={item.text} key={item.id} />
                {/* <div>  
                    hello
                </div> */}
                </>
          )
          })}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
  );
}

export default MediaSelect
