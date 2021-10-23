import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:` techsemester.tk/api/`
});

axiosInstance.interceptors.request.use((config) => {

    config.params = config.params || {};
    console.log(config)

    return config;
});

export default axiosInstance;