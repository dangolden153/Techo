import React,{useContext} from 'react'
import {FormControl, InputLabel,FilledInput, InputAdornment} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
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
    password:{
        width:'100%',
        backgroundColor:'#ffffff',
        height:'auto',
        marginBottom:'1rem',
        paddingRight:'1rem',
        
        border:'none',

    },
    passwording:{
        backgroundColor:'#ffffff',
        border:'none',
        outlineStyle:'none',
        width:'100%',
        
    },
  }));
 
const LoginPasswordInput  = ({name,placeholder,size})=> {

  const {loginValues, setLoginValues} =  useContext(AppContext);
    const classes = useStyles();
    // const [values, setValues] = useState();
    
      const handleChange = (prop) => (event) => {
        setLoginValues({ ...loginValues, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setLoginValues({ ...loginValues, showPassword: !loginValues.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <>
          <FormControl  variant="filled" className={classes.password}>
          <InputLabel htmlFor="filled-adornment-password">{placeholder}</InputLabel>
          <FilledInput className={classes.passwording}
            id="filled-adornment-password"
            disableUnderline={true}
            type={loginValues.showPassword ? 'text' : 'password'}
            value={loginValues.password}
            
            onChange={handleChange(name)}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {loginValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        </>
    )
}

export default LoginPasswordInput
