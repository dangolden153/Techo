import React,{useContext} from 'react'

import { makeStyles } from '@material-ui/core/styles';

import AppContext from '../../context/app-context'



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    text:{
        outlineStyle:'none',
        outline:'none',
    },
    formId:{
        width:'100%',
        border:'none',
        outlineStyle:'none',


      },
      formItem:{
        width:'100%',
        // border:'1px solid #555555',
        height:'auto',
        padding:' 1rem 0.5rem ',
        backgroundColor:'#ffffff',
        
        borderRadius:'5px',
        display:'grid',
        placeItems:'center',

      },
      error:{
          textAlign:'left',
          display:'block',
          paddingLeft:'0.5rem'
      },
      inputbase:{
          marginBottom:'1rem',
      },

  
  
    
  }));

const TextInput = ({label,placeholder, name, type,ErrorMessage}) => {
    const {values, setValues} =  useContext(AppContext);

    const classes = useStyles();
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const value = values.name;
    return (
        <div className={classes.inputbase}>
    <div className={classes.formItem}>
      <input  type={type} placeholder={placeholder} value={value} className={classes.formId}  onChange={handleChange(name)} />
    </div>
        <small className={classes.error}>{ErrorMessage}</small>

    </div>
    )
}

export default TextInput
