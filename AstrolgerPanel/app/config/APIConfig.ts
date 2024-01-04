import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lekhajokhha.com/app/api/',
  validateStatus: function (status) {
    return status >= 200 && status < 300; // Treat only status codes 200-299 as successful
  },
  headers: {
    'User-Agent': 'PostmanRuntime/7.30.1',
    Accept: '/',
    'Accept-Encoding': 'gzip,deflate,br',
    Connection: 'keep-alive',
    'x-api-key': 'lekha@2024',
  },
  auth: {
    username: 'admin',
    password: '1234',
  },
});

export default axiosInstance;
