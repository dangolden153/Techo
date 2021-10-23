import React, { useState } from 'react'
import AppContext from './app-context';

const registrationData = {
    first_name:'',
    last_name:'',
    password1:'',
    password2:'',
    email:'',
    phone:'',
    showPassword: false,
}
const loginData = {
    email:'',
    password:'',
    showPassword: false,
}


const AppState = (props) => {

const [values, setValues] = useState(registrationData);
const [loginValues, setLoginValues] = useState(loginData);
const [forgetEmail, setForgetEmail] = useState('');
 return (
  <AppContext.Provider value={{

   values, 
   setValues,
   setLoginValues,
   loginValues,
   forgetEmail,
   setForgetEmail,

  }}>
   {/* The below makes the value to be made available for all the children have access to it */}
   {props.children}
  </AppContext.Provider>
 )
}

export default AppState