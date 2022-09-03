import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_API;

console.log(baseURL);

export const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(function (config) {
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

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
