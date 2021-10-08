import React,{useState} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, Container, CssBaseline } from '@material-ui/core'
import svg from '../../assets/signupsvg.jpg'
import linkedin from '../../assets/linkedin.jpg';
import google from '../../assets/google.jpg'
import {Link} from 'react-router-dom'

const Login = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

   
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
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
                            <Button component={Link} to="/register" className={classes.loginBtn} >
                                    REGISTER
                            </Button>
                            <Button component={Link} to="/login" className={classes.registerBtn} >
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
                           
                            
                            <div className={classes.formItem}>
                            <input  type="email" placeholder="Email" value={email} className={classes.formId}  onChange={handleEmail} />
                            </div>
                            <div className={classes.formItem}>
                            <input  type="password" placeholder="Password" value={password} className={classes.formId}  onChange={handlePassword} />
                            </div>
                           

                            <Button  className={classes.mainRegBtn} >
                            Login
                            </Button>
                            <Typography variant="body1" component={Link} to="/register" className={classes.acc}>
                            Not a member?Register
                            </Typography>




                            </div>
                    </div>
                    </Grid>
             </Grid>
        </>
    )
}

export default Login
