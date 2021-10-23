import React,{useState,useContext} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, Container, CssBaseline } from '@material-ui/core'
import svg from '../../assets/successful.png'

import {Link} from 'react-router-dom'
import LoginInput from '../../components/Input/LoginInput';
import PasswordInput from '../../components/Input/PasswordInput';
import AppContext from '../../context/app-context';
import LoginPasswordInput from '../../components/Input/LoginPasswordInput';
const ResetSuccessful = () => {
    const {forgetEmail, setForgetEmail} =  useContext(AppContext);
    
    const classes = useStyles();
    return (
        <>
    
             <Grid container className={classes.container}  >
               <Grid item xs={12} sm={6} className={classes.svgcenter}>
                            <img src={svg} className={classes.svgImage} alt="techsemester" />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.center}>
                
                    <div className={classes.registrationContainer}>
                  
                            <Typography variant="h4" className={classes.success}>
                            Reset Successful
                            </Typography>
                            <div className={classes.formSection}>
                                <div className={classes.forgetText}>
                            <Typography variant="body1" className={classes.create}>
                            Your password has been successfully reset 
                            login below to access your account
                            </Typography>
                            </div>
                            <Button component={Link} to="/home"  className={classes.mainRegBtn}   >
                            Login
                            </Button>
                            <div className={classes.progressContainer}>
                            <div className={classes.dot} />
                            <div className={classes.dot} />
                            <div className={classes.dotActive} />

                                </div>




                            </div>
                    </div>
                    </Grid>
             </Grid>
        </>
    )
}

export default ResetSuccessful
