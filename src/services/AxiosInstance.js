import axios from 'axios'

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {

    config.params = config.params || {};

    return config;
});

export default axiosInstance;