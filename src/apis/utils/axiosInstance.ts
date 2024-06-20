import axios from 'axios';
import https from 'https';

const axiosInstance = axios.create({
  baseURL: 'https://52.78.66.160:8000',
  // baseURL: 'https://localhost:3000',
  
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default axiosInstance;
