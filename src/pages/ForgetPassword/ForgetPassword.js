import React,{useContext} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button } from '@material-ui/core'
import svg from '../../assets/signupsvg.jpg'


import {Link} from 'react-router-dom'


import AppContext from '../../context/app-context';

const ForgetPassword = () => {
    const {forgetEmail, setForgetEmail} =  useContext(AppContext);
    

   const handleChange = (e)=> {
    setForgetEmail(e.target.value);
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
                            <div className={classes.formSection}>
                                <div className={classes.forgetText}>
                            <Typography variant="body1" className={classes.create}>
                            Enter your username or email to recover your password. 
                            You will receive an email with instructions.
                             If you are having problems recovering your password
                            </Typography>
                            </div>
                            <div className={classes.forgetInput} >
                            <input placeholder="Email or Username" name="forgetEemail" value={forgetEmail} className={classes.Finput} type="email" onChange={handleChange} />
                            </div>
                        
                            <Button component={Link} to="/passwordAssitance"  className={classes.mainRegBtn}   >
                            Continue
                            </Button>
                            <div className={classes.forgetContainer}>
                            <Typography variant="body2" component={Link} to="/login" className={classes.acc}>
                            Login
                            </Typography>
                            <Typography variant="body2" component={Link} to="/register" className={classes.acc}>
                            Dont have account? Register
                            </Typography>

                               </div> 




                            </div>
                    </div>
                    </Grid>
             </Grid>
        </>
    )
}

export default ForgetPassword
