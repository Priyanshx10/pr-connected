import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const sendContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: '/contact',
    data,
  };

  const response = await api(config);
  return response.data;
};

export default api;