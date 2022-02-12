import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import google from "../../assets/google.jpg";
import linkedin from "../../assets/linkedin.jpg";
import InputField from "../Input";
import "./register.css";
import techsemester from "../../assets/bluelogo.png";
import { userLogin, userRegister } from "../../services/PostServices";
import BtnComponent from "../Button/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import {LoadingButton} from '@material-ui/lab';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password1: "",
  password2: "",
  phone: "",
};
function RegisterLogin({ switchTab }) {
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const validate = Yup.object({
    first_name: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("first name required"),
    last_name: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("last name required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .required("password required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    password1: Yup.string()
      .required("password required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    password2: Yup.string()
      .oneOf([Yup.ref("password1"), null], "password must match")
      .required("password required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    phone: Yup.string()
      .max(20, "must not be more than 20 characters")
      .required("phone number is required"),
  });
  // console.log("form", form);
  // const submit = () => {
  //   console.log('form', form);
  // }
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handleRegister = async (values) => {
    // e.preventDefault();
    try {
      setLoading(true);

      // console.log(`userData`, userData);

      const response = await userRegister(values);
      console.log(response);
      console.log(response?.status);
      if (response?.status === 201) {
        setLoading(false);
        history.push("/question-feeds");
        // setUserData(response?.data?.detail);
      } else {
        alert(response);
      }
    } catch (error) {
      setLoading(false);

      console.log(`error`, error);
    }
  };

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await userLogin(form);
      console.log(`response`, response);
      console.log(`token`, response?.data?.access_token);
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.access_token);

        setLoading(false);
        window.location.href = "/question-feeds";
        /// history.push("/question-feeds"); //redirect to dashboard page if login is successful
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(`error`, error);
    }
  };

  const handleSample = (value) => {
    console.log(value);
  };

  return (
    <div className="relative w-full  ">
      <div className="flex items-center justify-center sm:my-8 xs:my-4">
        <img
          alt="google"
          src={google}
          className="md:w-12 md:h-12 mx-2 xs:w-9 sm:h-9"
        />
        <img
          alt="google"
          src={linkedin}
          className="md:w-12 md:h-12 mx-2 xs:w-9 sm:h-9"
        />
      </div>
      <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => console.log("values", values)}
        >
      <div
        className={`${
          switchTab ? null : "mt-24 "
        } flex flex-col w-full  justify-center `}
      >
       
          <Form>
            {switchTab && (
              <InputField
                name="first_name"
                placeholder="first name"
                type="text"
                // handleChange={handleChange}
              />
            )}
            {switchTab && (
              <InputField
                name="last_name"
                placeholder="last name"
                type="text"
                // handleChange={handleChange}
              />
            )}
            <InputField
              name="email"
              placeholder="email"
              type="text"
              // handleChange={handleChange}
            />
            {switchTab ? null : (
              <InputField
                name="password"
                placeholder="password"
                type="password"
                // handleChange={handleChange}
              />
            )}
            {switchTab && (
              <InputField
                name="password1"
                placeholder="password1"
                type="password"
                // handleChange={handleChange}
              />
            )}
            {switchTab && (
              <InputField
                name="password2"
                placeholder="confirm password"
                type="password"
                // handleChange={handleChange}
              />
            )}
            {switchTab && (
              <InputField
                name="phone"
                placeholder="Phone Number"
                type="text"
                // handleChange={handleChange}
              />
            )}

            {switchTab && (
              <div className="flex items-center mt-3">
                <input type="checkbox" className="mr-4" />
                <p className="text-xs text-textPrimary w-10/12 ">
                  By signing up on this platform, you agree to Techsemester's
                  Terms & conditions.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="cursor-pointer md:text-2xl uppercase flex items-center justify-center  sm:p-3 w-full xs:p-2 xs:text-sm rounded-md bg-primaryColor hover:bg-darkPrimaryColor text-white mt-6 mb-4"
            >
              {loading ? (
                <div className="animate-spin border-2 border-dotted my-1 border-white w-7 h-7 rounded-full" />
              ) : (
                <p>Register</p>
              )}
            </button>
            {/* {switchTab ? (
             <button
             type="submit"
             className="cursor-pointer md:text-2xl uppercase flex items-center justify-center  sm:p-3 w-full xs:p-2 xs:text-sm rounded-md bg-primaryColor hover:bg-darkPrimaryColor text-white mt-6 mb-4"
             
           >
             {loading ? (
               <div className="animate-spin border-2 border-dotted my-1 border-white w-7 h-7 rounded-full" />
             ) : (
               <p>Registerr</p>
             )}
           </button>
            ) : (
              <BtnComponent type="submit" loading={loading}>
                Login
              </BtnComponent>
            )} */}
          </Form>
       
      </div>
      </Formik>
      <p className="text-right mt-2">
        {switchTab ? (
          <Link to="#" className="text-primaryColor">
            Already have an account? Login
          </Link>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Link to="#" className="text-primaryColor">
              Not a member? Register
            </Link>

            <Link to="#" className="text-primaryColor">
              Forgot your password
            </Link>
          </div>
        )}
      </p>
      {switchTab && (
        <div className="flex items-center justify-between w-full absolute -bottom-10">
          <div className="flex items-center justify-center">
            <img src={techsemester} alt="techsemester" className="w-5 h-5" />
            <p className="text-right ml-2 text-primaryColor xs:text-sm md:text-lg">
              Techsemester
            </p>
          </div>

          <p className="text-right ml-2 text-textPrimary xs:text-sm md:text-lg">
            2022 All Rights Reserved
          </p>
        </div>
      )}
    </div>
  );
}

export default RegisterLogin;
