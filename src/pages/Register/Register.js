import React from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, Container, CssBaseline } from '@material-ui/core'
import svg from '../../assets/signupsvg.jpg'
import linkedin from '../../assets/linkedin.jpg';
import google from '../../assets/google.jpg'
import {Link} from 'react-router-dom'

const Register = () => {

    const classes = useStyles();
    return (
        <>
    
             <Grid container className={classes.container}  >
               <Grid item xs={12} sm={6} className={classes.svgcenter}>
                            <img src={svg} className={classes.svgImage} alt="techsemester" />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.center}>
                    <div className={classes.loginButton}>
                            <Button component={Link} to="/" className={classes.registerBtn} >
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
                            <Typography variant="h5">
                            Create Your Account
                            </Typography>
                    </div>
                    </Grid>
             </Grid>
        </>
    )
}

export default Register
