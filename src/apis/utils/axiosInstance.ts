import axios from 'axios';
import https from 'https';

const axiosInstance = axios.create({
  baseURL: 'https://52.78.66.160:8000',
  // baseURL: 'https://localhost:3000',

  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export default axiosInstance;

// import axios from 'axios';

// const https = require('https');

// export const axiosInstance = axios.create({
//   baseURL: '/api',
//   timeout: 0,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false,
//   }),
// });

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// export const jsonTypeApi = (url: string, data: {}) => {
//   const response = axiosInstance.post(url, data, {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return response;
// };