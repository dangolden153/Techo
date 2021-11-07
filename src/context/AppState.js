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

const resetPasswordData = {
    password1: "",
    password2:"",
    showPassword: false,

}


const AppState = (props) => {

const [values, setValues] = useState(registrationData);
const [loginValues, setLoginValues] = useState(loginData);
const [forgetEmail, setForgetEmail] = useState('');
const [resetPin, setResetPin] = useState('');
const [resetPassword, setResetPassword] = useState(resetPasswordData);
const [home, setHome] = useState(true);
const [login, setLogin] = useState(false);
const [auth, setAuth] = useState('');
const [openSidebar, setOpenSidebar] = useState(true);
const [open, setOpen] = useState(false);

// 





 return (
  <AppContext.Provider value={{

   values, 
   setValues,
   setLoginValues,
   loginValues,
   forgetEmail,
   setForgetEmail,
   setResetPin,
   resetPin,
   resetPassword,
   setResetPassword,
   home, 
   setHome,
   auth,
   setAuth,
   openSidebar,
   setOpenSidebar,
   setOpen,
   open,


  }}>
   {/* The below makes the value to be made available for all the children have access to it */}
   {props.children}
  </AppContext.Provider>
 )
}

export default AppState