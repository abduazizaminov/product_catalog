import axios from 'axios';
import { API_URL } from '../config';


export const Axios = axios.create({
    baseURL: API_URL,
    timeout: 5000,
});
