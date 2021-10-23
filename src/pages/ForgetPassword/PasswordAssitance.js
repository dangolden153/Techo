import React,{useState,useContext} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, Container, CssBaseline } from '@material-ui/core'
import svg from '../../assets/signupsvg.jpg'
import linkedin from '../../assets/linkedin.jpg';
import google from '../../assets/google.jpg'
import {Link} from 'react-router-dom'
import LoginInput from '../../components/Input/LoginInput';
import PasswordInput from '../../components/Input/PasswordInput';
import AppContext from '../../context/app-context';
import LoginPasswordInput from '../../components/Input/LoginPasswordInput';
const PasswordAssitance = () => {
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
                            Password Assitance
                            </Typography>
                            <Typography variant="h5" className={classes.usermail}>
                            {forgetEmail}
                            </Typography>
                            <div className={classes.formSection}>
                                <div className={classes.forgetText}>
                            <Typography variant="body1" className={classes.create}>
                            Please input the code sent to the above address 
                            </Typography>
                            </div>

                            <div className={classes.forgetInput} >
                            <input placeholder="PIN" name="resetPin" value={resetPin} className={classes.Finput} type="text" onChange={handleChange} />
                            </div>
                        
                            <Button  className={classes.mainRegBtn} component={Link} to="/resetPassword" >
                            Next
                            </Button>

                            <div className={classes.progressContainer}>
                            <div className={classes.dotActive} />
                            <div className={classes.dot} />
                            <div className={classes.dot} />

                                </div>




                            </div>
                    </div>
                    </Grid>
             </Grid>
        </>
    )
}

export default PasswordAssitance
