import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-08-backend.herokuapp.com'
});

export default api;