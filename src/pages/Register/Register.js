import React,{useState,useEffect,useContext} from 'react'
import useStyles from './styles'
import { Grid, Typography, Button, Container, CssBaseline } from '@material-ui/core'
import svg from '../../assets/transparent1.png'
import linkedin from '../../assets/linkedin.jpg';
import google from '../../assets/google.jpg'
import {Link,useHistory} from 'react-router-dom'
import TextInput from '../../components/Input/TextInput';
import AppContext from '../../context/app-context'
import PasswordInput from '../../components/Input/PasswordInput';
import { userRegister,getCountry } from '../../services/PostServices'
import CountrySelect from '../../components/SelectComponent/CountrySelect';
import RegionSelect from '../../components/SelectComponent/RegionSelect';




const Register = () => {
    const {values, setValues,setUserData,setCountry} =  useContext(AppContext);
    const [submitValues, setSubmitValues] = useState(values);
    const [live, setLive] = useState({});
    const [countries, setCountries] = useState('');
    const fixed = true
    
    // const [country, setCountry] = useState('');
    const test = async () => {
        const res = await getCountry(); 
        setCountry(res.data.results);
        setCountries(res.data.results);
        
    }
    
    useEffect(() => {
        if(live.length !== 1) {
             test();
            }
            //   const data =  test();
    //   setCountry(data);
}, [fixed])
console.log(countries);
    
    const history = useHistory();
    
    
const handleRegister = async (e) => {  //login function    
    e.preventDefault();

    const {email,password1,password2, first_name, last_name,phone} = values;   //get values from context

    const item = {
        "first_name":first_name,
        "last_name":last_name,
        "email":email,
        "password1":password1,
        "password2":password2,
        "phone":phone,


    };
    console.log(item);
    const response = await userRegister(item); 
    console.log(response)
    console.log(response.data.user)
    if(response.status === 200){
        localStorage.setItem('token',response.data.access_token);
        localStorage.setItem('refreshToken',response.data.refresh_token);
            setUserData(response.data.user);
        history.push('/home'); //redirect to dashboard page if login is successful 
    } else { 
        alert('Invalid email or password');
        history.push('/register'); //redirect to login page if login is unsuccessful
        
    }   //if login is unsuccessful, alert user with error message 

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
                            <Button 
                            // component={Link} to="/register"
                            onClick={test}
                            
                            className={classes.registerBtn} >
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
                            <div>
                        <CountrySelect  />
                                </div>
                            <div>
                        <RegionSelect  />
                                </div>
                         
                            <Button  className={classes.mainRegBtn}
                             onClick={handleRegister}
                            // component={Link} to="/home"
                             >
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
