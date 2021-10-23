import React,{useState,useEffect,useContext} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, Container, CssBaseline } from '@material-ui/core'
import svg from '../../assets/transparent1.png'
import linkedin from '../../assets/linkedin.jpg';
import google from '../../assets/google.jpg'
import {Link} from 'react-router-dom'
import TextInput from '../../components/Input/TextInput';
import AppContext from '../../context/app-context'
import PasswordInput from '../../components/Input/PasswordInput';



const Register = () => {
    const {values, setValues} =  useContext(AppContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
   }

    const classes = useStyles();
    return (
        <>
    
             <Grid container className={classes.container}  >
               <Grid item xs={12} sm={6} className={classes.svgcenter}>
                            <img src={svg} className={classes.svgImage} alt="techsemester" />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.center}>
                    <div className={classes.loginButton}>
                            <Button component={Link} to="/register" className={classes.registerBtn} >
                                    REGISTER
                            </Button>
                            <Button component={Link} to="/login" className={classes.loginBtn} >
                        LOGIN
                            </Button>
                    </div>
                    <div className={classes.registrationContainer}>
                        <Typography variant="h6" >
                            with your social account
                        </Typography>
                        <div className={classes.socialContainer}>
                                    <Link to="/google">
                                    <img alt="google" src={google} className={classes.socialIcon} />
                                    </Link>
                                    <Link to="/linkedin">
                                    <img alt="google" src={linkedin} className={classes.socialIcon} />
                                    </Link>
                            </div>
                            <Typography variant="h4" className={classes.create}>
                            Create your account
                            </Typography>
                            <div className={classes.formSection}>
                            <div>
                                <TextInput   placeholder="First Name" name="first_name" label="" type="text" ErrorMessage=""  />
                            
                            </div>
                            <div>
                                <TextInput   placeholder="Last Name" name="last_name" label="" type="text" ErrorMessage=""  />
                            
                            </div>
                            <div>
                                <TextInput   placeholder="Email" name="email" label="" type="email" ErrorMessage=""  />
                            
                            </div>
                            <div>
                                <TextInput   placeholder="Phone number" name="phone" label="" type="tel" ErrorMessage=""  />
                            
                            </div>
                          
                            <div >
                           <PasswordInput  name="password1" placeholder="Password" size="small" />
                            </div>
                            <div >
                           <PasswordInput  name="password2" placeholder="Confirm Password" size="small" />
                            </div>
                         

                            <Button  className={classes.mainRegBtn} onClick={handleSubmit} >
                            REGISTER
                            </Button>
                            <div className={classes.forgetContainer}>
                            <Typography variant="body2" component={Link} to="/login" className={classes.acc}>
                            Have account already? Login
                            </Typography>
                            <Typography variant="body2" component={Link} to="/forgetPassword" className={classes.acc}>
                            Forget your password?
                            </Typography>

                               </div> 



                            </div>
                    </div>
                    </Grid>
             </Grid>
        </>
    )
}

export default Register
