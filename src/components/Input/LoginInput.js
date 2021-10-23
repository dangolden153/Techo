import React,{useContext} from 'react'
import {FilledInput, FormControl, InputBase,InputLabel,TextField} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AppContext from '../../context/app-context'
import { ErrorMessage } from 'formik';


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

const LoginInput = ({label,placeholder, name, type,ErrorMessage}) => {
    const {loginValues, setLoginValues} =  useContext(AppContext);

    const classes = useStyles();
      const handleChange = (prop) => (event) => {
        setLoginValues({ ...loginValues, [prop]: event.target.value });
      };
      const value = loginValues.name;
    return (
        <div className={classes.inputbase}>
    <div className={classes.formItem}>
      <input  type={type} placeholder={placeholder} value={value} className={classes.formId}  onChange={handleChange(name)} />
    </div>
        <small className={classes.error}>{ErrorMessage}</small>

    </div>
    )
}

export default LoginInput
