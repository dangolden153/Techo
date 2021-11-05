import axiosInstance from "./AxiosInstance";
import {useContext} from 'react'


import AppContext from '../context/app-context'

export const HandleSignup = () => {
    const {login, setLogin,values,auth,setAuth} = useContext(AppContext);
    

    // e.preventDefaults();
    axiosInstance.post('/api/users/auth/register/', values).then((res) => {
        console.log(res)
        
    })

}