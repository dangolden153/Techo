import React,{useContext} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button } from '@material-ui/core'
import svg from '../../assets/signupsvg.jpg'

import {Link} from 'react-router-dom'


import AppContext from '../../context/app-context';

import ResetPasswordInput from '../../components/Input/ResetPasswordInput';
const ResetPassword = () => {
    const {forgetEmail, setResetPin, resetPin} =  useContext(AppContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(forgetEmail);
   }
   const handleChange = (e)=> {
    setResetPin(e.target.value);
   }


    const classes = useStyles();
    return (
        <>
    
             <Grid container className={classes.container}  >
               <Grid item xs={12} sm={6} className={classes.svgcenter}>
                            <img src={svg} className={classes.svgImage} alt="techsemester" />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.center}>
                
                    <div className={classes.registrationContainer}>

                            <Typography variant="h4" className={classes.create}>
                            Reset Password
                            </Typography>
                            
                            <div className={classes.formSection}>
                                <div className={classes.forgetText}>
                            <Typography variant="body1" className={classes.create}>
                            Please Enter Your new password 
                            </Typography>
                            </div>
                            <div>
                            <ResetPasswordInput   placeholder=" New Password" name="password1" />
                             </div>   
                            <div>
                            <ResetPasswordInput   placeholder=" Confirm Password" name="password2" />
                             </div>   

                             <Typography variant="body2" className={classes.resetNote}>
                            Click  to reset your password to a new password
                            </Typography>
                            <Button  className={classes.mainRegBtn} component={Link} to="/resetSuccessful" >
                            Reset
                            </Button>

                            <div className={classes.progressContainer}>
                            <div className={classes.dot} />
                            <div className={classes.dotActive} />
                            <div className={classes.dot} />

                                </div>




                            </div>
                    </div>
                    </Grid>
             </Grid>
        </>
    )
}

export default ResetPassword
