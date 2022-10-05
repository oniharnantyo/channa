import axios from 'axios';

const baseURL = process.env.BASE_API;

export const instanceSSR = axios.create({
  baseURL,
});

instanceSSR.interceptors.request.use(function (config) {
  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString('base64');
  if (config.headers) {
    config.headers.Authorization = 'Basic ' + encodedToken;
    config.timeout = 30000;
  }
  return config;
});

instanceSSR.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instanceSSR;
