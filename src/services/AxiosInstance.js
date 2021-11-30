import axios from 'axios'

// axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}
const access_token = localStorage.getItem('token');
// axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${access_token}`;
    config.params = config.params || {};

    return config;
});

export default axiosInstance;