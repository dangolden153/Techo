import React, { useState } from 'react'
import AppContext from './app-context'
import axios from 'axios'

const baseurl = 'https://stocklens.herokuapp.com/stock-lens/api/1.0';
const accessToken = localStorage.getItem('accesstoken');

axios.interceptors.request.use(
 config => {
  config.headers.authorization = `Bearer ${accessToken}`;
  return config;
 },
 error => {
  return Promise.reject(error);
 }
)
const AppState = (props) => {
 const [isAuth, setIsAuth] = useState(true);
 const [login, setLogin] = useState(false);
 const [loading, setLoading] = useState(false);
 const [page,setPage] = useState("default");
 const [message,setMessage] = useState('');
 const [error,setError] = useState(false);


 const [component,setComponent] =  useState("StationCreate");
 const [userData, setUserData] = useState('');
 const handleGet = () => {
  axios.get(`${baseurl}/auth/userContext`).then((res) => {
   // console.log(res.data.response);
   setUserData(res.data.response);
  })
 }
 return (
  <AppContext.Provider value={{

   isAuth, setIsAuth, login,setLogin,handleGet,userData,component,setComponent,setLoading,loading,setPage,page,message,setMessage,error,setError

  }}>
   {/* The below makes the value to be made available for all the children have access to it */}
   {props.children}
  </AppContext.Provider>
 )
}

export default AppState