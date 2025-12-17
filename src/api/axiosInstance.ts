import axios from 'axios';
import type { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.cerebras.ai/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_CEREBRAS_API_KEY}`,
  },
});
