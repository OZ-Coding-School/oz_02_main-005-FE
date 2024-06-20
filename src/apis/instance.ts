import axios from 'axios';

const https = require('https');

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const jsonTypeApi = (url: string, data: {}) => {
  const response = apiClient.post(url, data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};
