import React, { useState, useContext } from "react";
import useStyles from "./styles";
import { Grid, Typography, Button } from "@material-ui/core";
import svg from "../../assets/transparent1.png";
import linkedin from "../../assets/linkedin.jpg";
import google from "../../assets/google.jpg";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../../components/Input/TextInput";
import AppContext from "../../context/app-context";
import PasswordInput from "../../components/Input/PasswordInput";
import { userRegister } from "../../services/PostServices";
import axios from "axios";

const Register = () => {

    
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [country, setCountry] = useState(0);
  const [state, setState] = useState(0);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");

//   const handleSubmit =  (event) => {
//     event.preventDefault()
//     // const url = "http://techsemester.tk/api/users/auth/register/";
//     const data = {
//       username,
//       email,
//       password1,
//       password2,
//       country,
//       state,
//       first_name,
//       last_name,
//       phone,
//       address,
//       city,
//       dob,
//       gender,
//       education,
//     }
//     // try {
//     //     const {data} = await axios.post(url, userData);
//     //   console.log(`data`, data)
//     // } catch (error) {
//     //     console.log(`error`, error)
//     // }

//     console.log(`datas`, data)
//     let config = {
//         method: 'post',
//         url: 'http://techsemester.tk/api/users/auth/register/',
//         headers: { 
//           'Content-Type': 'application/json', 
//         //   'Cookie': 'sessionid=2b98u3jug5uwl9fo5ypars8eli7ejsti'
//         },
//         data : data
//       };
      
//       axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   const handleReg =() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     // myHeaders.append("Cookie", "sessionid=2b98u3jug5uwl9fo5ypars8eli7ejsti");
    

    
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };
    
//     fetch("http://techsemester.tk/api/users/auth/register/", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   }

  const { values, setUserData } = useContext(AppContext);

  const history = useHistory();


  const handleRegister = async (e) => {
    //login function
    e.preventDefault();
    // const { email, password1, password2, first_name, last_name, phone } =
    //   values; //get values from context
    // const item = {
    //   first_name: first_name,
    //   last_name: last_name,
    //   email: email,
    //   password1: password1,
    //   password2: password2,
    //   phone: phone,
    //   country: 2,
    //   region: 2,
    // };

    const userData = {
        username,
        email,
        password1,
        password2,
        country,
        state,
        first_name,
        last_name,
        phone,
        address,
        city,
        dob,
        gender,
        education,
      }
      console.log(`userData`, userData)
    const response = await userRegister(userData);
    console.log(response);
    console.log(response.data.user);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      setUserData(response.data.user);
    //   history.push("/home"); 
      //redirect to dashboard page if login is successful
    } else {
      alert("Invalid email or password");
    //   history.push("/register"); 
      //redirect to login page if login is unsuccessful
    } //if login is unsuccessful, alert user with error message
  };

  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.svgcenter}>
          <img src={svg} className={classes.svgImage} alt="techsemester" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.center}>
          <div className={classes.loginButton}>
            <Button
              component={Link}
              to="/register"
              className={classes.registerBtn}
            >
              REGISTER
            </Button>
            <Button component={Link} to="/login" className={classes.loginBtn}>
              LOGIN
            </Button>
          </div>
          <div className={classes.registrationContainer}>
            <Typography variant="h6">with your social account</Typography>
            <div className={classes.socialContainer}>
              <Link to="/google">
                <img alt="google" src={google} className={classes.socialIcon} />
              </Link>
              <Link to="/linkedin">
                <img
                  alt="google"
                  src={linkedin}
                  className={classes.socialIcon}
                />
              </Link>
            </div>
            <Typography variant="h4" className={classes.create}>
              Create your account
            </Typography>
            {/* <div className={classes.formSection}>
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
                            </div> */}

            <div className="flex flex-col sm:flex-row flex-wrap gap-y-4  w-full ">
              <input
                type="text"
                placeholder="username"
                value={username}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2  "
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="text"
                placeholder="email"
                value={email}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="password"
                value={password1}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setPassword1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Confirm password"
                value={password2}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setPassword2(e.target.value)}
              />
              <input
                type="text"
                placeholder="country"
                value={country}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                type="text"
                placeholder="state"
                value={state}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="first_name"
                placeholder="first_name"
                value={first_name}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setFirst_name(e.target.value)}
              />
              {/* <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /> */}
              <input
                type="text"
                placeholder="last_name"
                value={last_name}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setLast_name(e.target.value)}
              />
              <input
                type="text"
                placeholder="phone"
                value={phone}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="address"
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="city"
                value={city}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="dob"
                value={dob}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setDob(e.target.value)}
              />
              <input
                type="text"
                placeholder="gender"
                value={gender}
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                onChange={(e) => setGender(e.target.value)}
              />
              <input
                type="text"
                placeholder="education"
                className="border-2 px-2 py-2 rounded-md w-full sm:w-1/2"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>

            <button className="cursor-pointer px-3 py-2 rounded-md bg-blue-600 text-white mt-6" onClick={handleRegister}>Register</button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
