import axios from 'axios';

const api = axios.create({
    baseURL: ' 192.168.6.52',
})

export default api;