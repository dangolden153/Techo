import axiosInstance from "./AxiosInstance";
import {useContext} from 'react'


// import AppContext from '../context/app-context'

// export const HandleSignup = () => {
//     const {login, setLogin,values,auth,setAuth} = useContext(AppContext);
    

//     // e.preventDefaults();
//     axiosInstance.post('/api/users/auth/register/', values).then((res) => {
//         console.log(res)
        
//     })

// }


export const userLogin = (post) => {
    return axiosInstance.post('api/users/auth/login/', post)
}

export const userRegister = (info) => {
    return axiosInstance.post('api/users/auth/register/', info)
}
export const getCountry = async () => {
    const res =  await axiosInstance.get('api/users/countries');
    if(res.status) {
        return res
    }
}