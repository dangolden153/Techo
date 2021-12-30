import React,{useContext,useEffect} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button} from '@material-ui/core'
import svg from '../../assets/signupsvg.jpg'
import linkedin from '../../assets/linkedin.jpg';

import {Link,useHistory} from 'react-router-dom'
import LoginInput from '../../components/Input/LoginInput';

import AppContext from '../../context/app-context';
import LoginPasswordInput from '../../components/Input/LoginPasswordInput';
import { userLogin } from '../../services/PostServices'
import GoogleLogin from './GoogleLogin';
import logo from '../../assets/bluelogo.png'

const Login = () => {
    const {loginValues, setUserData } =  useContext(AppContext);
    
    const history = useHistory();

    useEffect(() => {
        window.scroll(0,0)
}, [])

   const handleLogin = async (e) => {  //login function    
    e.preventDefault();
    const {email,password} = loginValues;   //get values from context

    const item = {"email":email,"password":password};
    try {
        const response = await userLogin(item); 
        if(response.status === 200){
            localStorage.setItem('token',response.data.access_token);
            localStorage.setItem('refreshToken',response.data.refresh_token);
                setUserData(response.data.user);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                const{first_name,last_name,email,id} = response.data.user;
                const name= first_name + " " + last_name;
                const userEmail= email;
              const   imageUrl= logo;
                localStorage.setItem('user', JSON.stringify({name, userEmail, imageUrl})); 
            history.push('/home'); //redirect to dashboard page if login is successful 
        } 
    }
    catch (error) {
        
    }
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
                                  
                                    <Link to="/linkedin">
                                    <img alt="google" src={linkedin} className={classes.socialIcon} />
                                    </Link>
                                    <GoogleLogin  /> 
                            </div>
                            <Typography variant="h4" className={classes.create}>
                            Login to your account
                            </Typography>
                            <div className={classes.formSection}>
                            <div className={classes.formIt}>
                            <LoginInput placeholder="Email" name="email" label="" type="email" ErrorMessage="" />
                            </div>
                            <div className={classes.formI}>
                            <LoginPasswordInput placeholder="Password" name="password"   />
                            </div>
                            <Button  className={classes.mainRegBtn} 
                            onClick={handleLogin}
                            component={Link} to="/home"  >
                            Login
                            </Button>
                            <div className={classes.forgetContainer}>
                            <Typography variant="body2" component={Link} to="/register" className={classes.acc}>
                            Dont have an account? Register
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

export default Login
