import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://194.163.145.251/~beinmedi/api/',
    // You can add headers or other configurations here
});

export default apiClient;