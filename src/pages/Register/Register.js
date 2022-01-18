import React, { useState, useContext } from "react";
import useStyles from "./styles";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import svg from "../../assets/transparent1.png";
import linkedin from "../../assets/linkedin.jpg";
import google from "../../assets/google.jpg";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../../components/Input/TextInput";
import AppContext from "../../context/app-context";
import PasswordInput from "../../components/Input/PasswordInput";
import { userRegister } from "../../services/PostServices";
import flag from "../../assets/flag.svg";
import Slider from "../../components/Slider";
import countryData from "../../Helpers/CountryState.json";

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

  const { values, setUserData } = useContext(AppContext);

  const history = useHistory();

  const handleRegister = async (e) => {
    //login function
    e.preventDefault();

    const userData = {
      email,
      password1,
      password2,
      first_name,
      last_name,
      phone,
    };
    console.log(`userData`, userData);
    const response = await userRegister(userData);
    console.log(response);
    console.log(response?.status);
    if (response?.status === 201) {
      history.push("/home")
      setUserData(response?.data?.detail);
    } else {
      alert("Invalid email or password");
    }
  };

  const classes = useStyles();

  // const regions = Object.entries(countryData).map((data) => {
  //   data[1].regions.map((region) =>
  //    region.name );
  // });

  // console.log(`regions`, regions)
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.svgcenter}>
          <Slider />
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
            <p className="text-2xl mt-8 ">Register with your social account</p>
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

            <div className="flex flex-col w-full ">
              <input
                type="first_name"
                placeholder="First Name"
                value={first_name}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setFirst_name(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last Name"
                value={last_name}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setLast_name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                value={password1}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setPassword1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Confirm password"
                value={password2}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setPassword2(e.target.value)}
              />

<input
                type="text"
                placeholder="Phone number"
                value={phone}
                className="  p-3 my-2 rounded-md w-full outline-none "
                onChange={(e) => setPhone(e.target.value)}
              />

              {/* <div className="flex w-full items-center  my-2 justify-between">
                <div
                  style={{ width: "47%" }}
                  className="flex items-center overflow-hidden rounded-md justify-between bg-white p-4"
                >
                  <img className="w-4 h-4 mr-3 " src={flag} alt="" />
                  <select className="outline-none  w-10/12 cursor-pointer">
                    <option>Country</option>
                    {Object.entries(countryData).map((data, i) => (
                      <option key={i} value={data[1].countryName}>
                        {" "}
                        {data[1].countryName}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  style={{ width: "47%" }}
                  className="flex items-center rounded-md justify-between bg-white p-4"
                >
                  <select className="outline-none cursor-pointer flex-1">
                 

                    <option>State</option>
                    <option>Lagos</option>
                    <option>Colorado</option>
                    <option>UK</option>
                  </select>
                </div>
              </div> */}
            </div>

            <button
              className="cursor-pointer text-2xl uppercase  p-3 w-full rounded-md bg-primaryColor hover:bg-darkPrimaryColor text-white mt-6"
              onClick={handleRegister}
            >
              Register
            </button>

            <div className="flex items-center justify-between my-3">
              <p className="text-lg text-textPrimary font-semibold">
                Have account already?{" "}
                <Link className="text-lg text-primaryColor font-semibold">
                  Login
                </Link>
              </p>
              <Link className="text-lg text-primaryColor font-semibold">
                Forgot your password?
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
