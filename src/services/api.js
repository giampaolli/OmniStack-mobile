import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.5:3000',
    // baseURL: 'http://10.0.3.2:3000', 
    // baseURL: 'http://10.0.2.2:3000', AVD android
    // baseURL: 'http://localhost:3000', IOS Simulator
});

export default api;